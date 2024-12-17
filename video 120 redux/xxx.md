# redux
redux is a tool(store) that saves our stats to be used by any component we want without doing prop driling

1. to instll redux
```
npm install @reduxjs/toolkit react-redux
```

2. make folder 
```
src/redux/store.js
```

3. now make a store on store.js
```
    import { configureStore } from '@reduxjs/toolkit'

    export const store = configureStore({
    reducer: {},
    })
```
4. and import store and store provider in main.js
```
    import { store } from './redux/store'
    import { Provider } from 'react-redux'
```
5. npw wrap the portion you want to give permition of store
```
        <Provider store={store}> 
        <App />
        </Provider>
```
6. now make a slice file to write the state and its functions
```
counter/counterSlice.js
```
functions like increment, decrement, incrementByValue

7. tp use on a component
```
import { useSelector, useDispatch } from 'react-redux' // import 
const count = useSelector((state) => state.counter.value)  // getting the count from redux stpore
```