## Kubectl
## run kustomization
  ```shell
    kubectl apply -k {kustomization folder}
  ```
## delete all
  ```shell
    kubectl delete -n {namespace}
    # or 
    kubectl delete -k {kustomization folder}
  ```


## get all by namespace
  ```shell
    kubectl get all -n {namespace}
  ```
## get {pod(s), service(s), deployment(s), node(s), etc }
  ```shell
    kubectl get { kind } -n {namespace}
  ```

## describe
  ```shell
    kubectl describe { kind } {name} -n {namespace}

    kubectl describe service my-service -n my-namespace
  ```

## delete a kind by name
  ```shell
    kubectl delete { kind } {name} -n {namespace}
    # example
    kubectl delete service my-service -n my-namespace
  ```



# KIND
## create cluster
  ```shell
    kind create cluster --name wslkind
    kind create cluster --name wslkind --config config-file.yaml
  ```


# NOTE
pvc <-> pv is one-to-one
can't have 2 pvc to on pv
one pvc can be used in many pods

exit 137 means out of resources