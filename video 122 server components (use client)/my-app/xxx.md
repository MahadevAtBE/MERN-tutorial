# components
in next js every component is by default server component 

to use frontend hooks like usestate make a component clint side we have to declare it at the starting by writing
``
    "use client"
``

without "use client"
 console.log("this will render on server side terminal")

with "use client"
    console.log("this will log on clint side brouser")