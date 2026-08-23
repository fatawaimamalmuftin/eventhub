import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice.js";
import storage from "./solfBug.js";
import {FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from "redux-persist";

import {
    persistStore,
    persistReducer
} from "redux-persist";


const persistUserConfig = {

    key: "user",

    storage

}

const store = configureStore({

    reducer: {

        userState: persistReducer(
            persistUserConfig,
            userReducer
        )

    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({

            serializableCheck: {
                ignoredActions: [FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
            }

        })

})

export const persist = persistStore(store)

export default store