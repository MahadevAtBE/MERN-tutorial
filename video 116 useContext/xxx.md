## useContext
usecontext is a hook in react that halps user to send a prop from a parent component to its child's child without prop driling.

The folder structure we hav
```
app.jsx -> navbar.jsx -> button.jsx -> component.jsx
```
i want to send the counter value of app.jsx to the component.jsx
 
 ### to use useContext
 import , make a useContext, export
 ```
we will make a file on src/context/context.js
import { createContext } from "react";

export const counterContext = createContext(0) // making an context with initial value 0 and exporting it
```
imoort counterContext on main component
```
import { counterContext } from './context/context' // importing that countrContext
```
wrape app children component 
```
<counterContext.Provider value={{count,setCount}}> 
    all children
</counterContext.Provider> 
```

## to use the variable
import counterContext on the component
```
import { counterContext } from '../context/context'
```
extrect the value
```
const value = useContext(counterContext)
    <div>
      {value.count}
    </div>
```