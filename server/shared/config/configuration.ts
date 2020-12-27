import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

export interface DatabaseConfig {
  type: any;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

const YAML_CONFIG_FILENAME = 'config.yml';

export default (configFile?: string) => {
  return yaml.load(
    readFileSync(join('/', configFile ?? YAML_CONFIG_FILENAME), 'utf8'),
  );
};