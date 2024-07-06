import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        count: 0
    },
    reducers:{
       
    }
});

// export const {} = counterSlice.actions;

export default counterSlice.reducer;