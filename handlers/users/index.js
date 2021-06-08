//import {UsersListResponse} from '../../responses'



const UsersListResponse ={
    "usersList": [
        {
            "name": "mathew",
            "lastName": "perry",
            "gender": "male"
        },
        {
            "name": "Lisa",
            "lastName": "kudrow",
            "gender": "female"
        },
        {
            "name": "Matt",
            "lastName": "leblanc",
            "gender": "male"
        },
        {
            "name": "David",
            "lastName": "schwimmer",
            "gender": "male"
        },{
            "name": "Jennefer",
            "lastName": "anniston",
            "gender": "female"
        }
    ]
}
const userHandlers = {
    getAllUsersResponse: ()=> ([
        200,
        UsersListResponse
    ])
}

export default userHandlers