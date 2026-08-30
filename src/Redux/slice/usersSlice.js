import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    users: []

}

const usersSlice = createSlice({

    name: "users",

    initialState,

    reducers: {
        
        regis: (prevState, {payload}) => {

            return {
                ...prevState,

                users: [
                    ...prevState.users,
                    payload
                ]

            }

        },
        
        updateUsers: (prevState, {payload}) => {

            prevState.users = payload
            
        },

        changePassword: (prevState, {payload}) => {
            const user = prevState.users.find((e)=> e.id === payload.id)

            if(user){
                user.password = payload.password
            }
        }

    }
    
})

export const {
    regis,
    updateUsers,
    changePassword
} = usersSlice.actions

export default usersSlice.reducer