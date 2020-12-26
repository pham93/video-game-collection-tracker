import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import { ConnectionOptions } from 'typeorm';

export interface DatabaseConfig {
  type: any;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

const YAML_CONFIG_FILENAME = 'config.yml';

export default () => {
  return yaml.load(
    readFileSync(join('/', YAML_CONFIG_FILENAME), 'utf8'),
  );
};