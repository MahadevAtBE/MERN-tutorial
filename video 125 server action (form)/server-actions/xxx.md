# server action

to separet the "use client" and "use server" for data safty we make separet components of them 
1. make aaction/form.js to handle backend actions of a form
2. make the function and export it

3. in frontend form  import it
```
import { submitAction } from "@/actions/form";
```
4. make the form action as the fucnction
```
<form action={submitAction}>
```
5. inout fild must have the name attribute
```
 <input name="name" id="name" type="text"  className="text-black"/>
 ```
 6. in backend you can access its value by
 ```
 {e.get("name-attribute")}
 ```