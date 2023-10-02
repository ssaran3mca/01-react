import { createSlice, current } from '@reduxjs/toolkit';

const cardSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearItem: (state) => {
            state.items.length = 0;
            console.log(current(state))
        },
    },

});
export const { addItem, removeItem, clearItem } = cardSlice.actions;
export default cardSlice.reducer;