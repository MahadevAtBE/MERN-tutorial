## to make a react folder structure we use vite

 ```
 npm create vite@letest
```

then give name, framewark, and variant info
then install nodemodules
```
npm i
```
now you can start the server
```
npm run dev
```
in scr/app.jsx is the main entry point to the page
here the function returns the main content
this is jsx(html+js) not html , and can return only one tag

### install thos extention to get help on snipits
```
ES7 React/Redux/GraphQL/React-Native snippets
```
### we can make our components like navbar on component folder
```    
rafce -> to get a export boiler plate of react
```
### to pass a variable from one jsx to another we use variable called PROPS
``
    to pass the variable
        <Card title="card 1" description="details of card one"/>
    to use them
        const Card = (props) => {   // to catch the props
        return (
            <div className='card'>
            <h1>{props.title}</h1>   // use them by destructring
            <p>{props.description}</p>
            </div>
        )
        }
    to use inline css
        <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="220" style={{border: "2px solid red"}} />
``