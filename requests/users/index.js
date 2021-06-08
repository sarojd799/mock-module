import constants from '../../util/consts'
import {default as Handlers} from '../../handlers/'


const {reqTypes} = constants;
const {UserHandlers}  = Handlers;
const UserRequests  =  [
  {
      url: '/users/getAllUsers',
      method: reqTypes.GET,
      handler: UserHandlers.getAllUsersResponse
  }
]

export default UserRequests;