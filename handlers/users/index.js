import { default as mockResponses } from '../../responses'

const { UsersListResponse } = mockResponses;

const userHandlers = {
    getAllUsersResponse: () => ([200, UsersListResponse])
}

export default userHandlers