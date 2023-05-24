import {setupListeners} from "@reduxjs/toolkit/query";
import {configureStore} from "@reduxjs/toolkit";
import globalReducer from "./state";
import { api } from "./state/api";

const store = configureStore({
    reducer: {
        global: globalReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});
setupListeners(store.dispatch);

export default store;
