## useMemo 
in react every time a state got change it rerender the hole component . if a state have a havy computation we would like to prevent its 
rerendaring by remembaring its value.
useMemo hook uses to prevent any expensive computation on every rerendaring 
it computs once and remember the value until the given condition change.
between rerender it prevent a computation that givs same value

import useMemo
```
import { useMemo } from 'react'
```
wrape the function in this
```
const magical = useMemo(() => function, [dependensi array])
```