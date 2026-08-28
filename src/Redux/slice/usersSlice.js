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
            
        }

    }
    
})

export const {
    regis,
    updateUsers
} = usersSlice.actions

export default usersSlice.reducer