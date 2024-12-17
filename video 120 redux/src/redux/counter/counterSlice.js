import { createSlice } from '@reduxjs/toolkit'

const initialState = { // this is a state with initiall value of 0 
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {  // these are the function to  change this state
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {  // these are the function to  change this state
      state.value -= 1
    },
    incrementByAmount: (state, action) => {   // these are the function to  change this state
      state.value += action.payload
    },
    multiply: (state) => {  // custm made by me
        state.value *=2
      },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, multiply } = counterSlice.actions

export default counterSlice.reducer