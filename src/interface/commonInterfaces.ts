export interface EnvConfig {
  env: string;
  port: number;
  profile: string;
  bucket: string;
  secretManagerKey: string;
  region: string;
  sentryDsn: string;
  mongoUri:string;  
}
