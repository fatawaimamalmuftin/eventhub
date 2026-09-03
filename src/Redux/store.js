import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice.js";
import storage from "./solfBug.js";
import {FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from "redux-persist";
import eventsReducer from "./slice/eventSlice"
import usersReducer from './slice/usersSlice.js'

import {
    persistStore,
    persistReducer
} from "redux-persist";
import persistCombineReducers from "redux-persist/es/persistCombineReducers.js";


const persistUserConfig = {
    // entar ubah nama dari user ke active
    key: "user",

    storage

}

const persistUsersConfig = {

    key: "users",

    storage
}

const EventHubManajementPersist = {

    key: "EventHubManajement",

    storage
}

const store = configureStore({

    reducer: persistCombineReducers(EventHubManajementPersist,{

        userState: persistReducer(
            persistUserConfig,
            userReducer
        ),

        usersState: persistReducer(
            persistUsersConfig,
            usersReducer
        ),

        eventState: eventsReducer
    }),

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({

            serializableCheck: {
                ignoredActions: [FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
            }

        })

})

export const persist = persistStore(store)

export default store