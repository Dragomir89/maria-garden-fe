import { get } from './http';

export const getUsers = async () => {
  return await get(
    'http://maria-garden-be-node-env.eba-xxubk6h8.eu-north-1.elasticbeanstalk.com/'
  );
};
