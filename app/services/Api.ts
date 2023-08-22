import apisauce, { ApisauceInstance } from 'apisauce';
import { PayloadType } from '../Types';

const apiConfig: ApisauceInstance = (baseURL: string) =>
  apisauce.create({
    baseURL,
    timeout: 30000,
    headers: { 'Cache-Control': 'no-cache' },
  });

export const api: ApisauceInstance = apiConfig(SERVER_URL);

const auth = () => {
  const signInUser = (credentials: PayloadType) => {
    return api.post(END_POINT, credentials);
  };

  return { signInUser };
};

export default { auth, api };
