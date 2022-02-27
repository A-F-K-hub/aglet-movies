import userApiService from '../../api-services/users-api/user.api-service';
import { setIsLoadingGetCurrentUserAction, setCurrentUserAction } from './users.reducer';

export const getCurrentUserAction = async (id) => async (dispatch) => {
  dispatch(setIsLoadingGetCurrentUserAction(true));
  try {
    const response = await userApiService.getCurrentUser(id);
    console.log({getCurrentUserResponse: response});
    dispatch(setCurrentUserAction(response));
    return response;
  } catch (error) {
     console.warn({error});
  } finally {
    dispatch(setIsLoadingGetCurrentUserAction(false));
  }
};

