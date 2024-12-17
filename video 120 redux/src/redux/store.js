import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'  // importing state from its slice

export const store = configureStore({
    reducer: {  // to take peramiter 
        counter: counterReducer,
      },
})