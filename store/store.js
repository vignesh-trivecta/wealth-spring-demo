import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';

const reducers = combineReducers({
    auth: authSlice,
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

const   store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
})

export const persistor = persistStore(store)

export default store;
