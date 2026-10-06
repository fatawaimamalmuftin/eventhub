import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {

    users: []

}

export const RegisThunk = createAsyncThunk(
    "set_user",
    async(data, {rejectWithValue}) => {
        try {
            const res = await fetch("http://localhost:5678/auth/regis",{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(data)
            })

            const result = await res.json()

            if (!res.Status) {
                return rejectWithValue(res.Message)
            }

            return result

        } catch (err) {
            return rejectWithValue(err instanceof Error ? err.Message : err)
        }
    }
)

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