import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    users: null

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

        }

    }
    
})

export const {
    regis
} = usersSlice.actions

export default usersSlice.reducer