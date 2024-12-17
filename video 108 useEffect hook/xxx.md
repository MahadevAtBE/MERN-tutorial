**use code -r {directry name}  to change the crunt warking dirwctry in vs code

## useEffict

### it is a rect hooke that use to get side effects

#### useEffect syntext
```
    useEffect(() => {
        alert("count changed")  // effects on a change occurd
    }, [count]) // the changes it will look for
```
** All alerts are running two times due to the strict mood is on at main.jsx. to prevent this make them comment  on delet them