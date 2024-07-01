import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

const appStore = configureStore({
    reducer:{
        counter: counterReducer
    }
})

export default appStore;