import appNetworkService from '../../moviesNetwordService';

const getCurrentUser = async (id) => {
  const url = `users/${id}`
  return appNetworkService
    .get(url)
    .then((apiResponse) => {
        return apiResponse.data;
    })
    .catch((error) => {
        console.log({errorCurrentUser: error});
    Promise.reject({error})
    });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getCurrentUser,
};
