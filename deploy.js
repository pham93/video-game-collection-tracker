const targz = require('targz');
const fs = require('fs');
const path = require('path');

const ARTIFACTS_BUCKET = 'fatpanda-artifacts-id';
const TMP_LOCATION = '/tmp';

const artifacts = Object.freeze({
  frontend: {
    src: 'frontend/dist',
    dst: `${TMP_LOCATION}/frontend.tar.gz`,
  },
  backend: {
    src: 'server/dist',
    dst: `${TMP_LOCATION}/backend.tar.gz`,
  },
});

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-2'});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Call S3 to list the buckets
s3.listBuckets(function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    const hasBucket = data.Buckets.some((e) => e.Name === ARTIFACTS_BUCKET);
    if (!hasBucket) {
      console.log(`${ARTIFACTS_BUCKET} doesn't exist`);
      createBucket();
    }
    uploadArtifacts();
  }
});


function compress(src, dest, callback) {
  console.log(`Creating ${dest}`);
  targz.compress({
    src,
    dest
  }, function(err){
    if(err) {
        console.log(err);
    } else {
      callback(dest);
    }
  });
}

function uploadArtifacts() {
  // console
  console.log('Uploading artifacts');

  function upload(dst) {
    const uploadParams = {Bucket: ARTIFACTS_BUCKET, Key: '', Body: ''};
    const fileStream = fs.createReadStream(dst);
    fileStream.on('error', function(err) {
      console.log('File Error', err);
    });
    uploadParams.Body = fileStream;
    uploadParams.Key = path.basename(dst);
    s3.upload(uploadParams, function (err, data) {
      if (err) {
        console.log("Error", err);
      } if (data) {
        console.log("Upload Success", data.Location);
      }
    });
  }

  Object.values(artifacts).forEach((value) => {
    const { src, dst } = value;
    compress(src, dst, upload);
  });
}

function createBucket() {
  const bucketParams = {
    Bucket: ARTIFACTS_BUCKET,
  };
  // call S3 to create the bucket
  s3.createBucket(bucketParams, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log(`${ARTIFACTS_BUCKET} created successfully`);
      console.log("Success", data.Location);
    }
  });
}
