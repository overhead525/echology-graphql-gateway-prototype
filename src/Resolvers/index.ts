import queryResolvers from './queries';
import mutationResolvers from './mutations';

const baseResolvers = {
  ...queryResolvers,
  ...mutationResolvers,
};

export default baseResolvers;
