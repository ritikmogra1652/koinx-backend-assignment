import env from '../../env.json';
import { CONST_DATA } from '../utils/constants';
import { EnvConfig } from '../interface/commonInterfaces';

const envConfig = (): EnvConfig => {
  const nodeEnv =
    (process.env.NODE_ENV as keyof typeof env) || CONST_DATA.local;
  return env[nodeEnv];
};

export default envConfig;
