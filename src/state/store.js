import { configureStore } from "@reduxjs/toolkit"

import LoadingReducer from "./loading/reducer"
import AuthReducer from "./auth/reducer"
import ContentReducer from "./content/reducer"
import OrderReducer from "./order/reducer"

const store = configureStore({
    reducer: {
        loading: LoadingReducer,
        auth: AuthReducer,
        content: ContentReducer,
        order: OrderReducer
    }
});

export { store }