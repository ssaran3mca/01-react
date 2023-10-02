import { configureStore } from '@reduxjs/toolkit';
import cardSlice from '../utility/cardSlice'
const appStore = configureStore({
    reducer: {
        carts: cardSlice,
    }
})
export default appStore;