## useState
useState renders the hole component when it get updats. 
normal variables forgot there updation due to rerendaring,
to prevent the compnents rendaring we use useRef.
```
    const ref = useRef(0)
    console.log(`the value of ref is ${ref.current}`) 
```
it remembers its value updation even after the hole component got reredars

**as the useState the component not got rernderd when we change the useRef value
so its not god to use inside displaying on the component due to ita not rerendaring behaviouur