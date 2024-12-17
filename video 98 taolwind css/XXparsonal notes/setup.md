## HOW TO SETUP TAILWAIND CSS

step 1:
Run the folowing command
```
npm install -D tailwindcss
npx tailwindcss init
```

step 2:
update tailwind.config.js to include this line
```
content: ["./src/**/*.{html,js}"]
```

step 3:
create src/input.css to include
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

step 4:
include the src/output.css file to index.html

step 5:
run the  following command
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```
this command will make the output.css file on its own

this will check on all the files recomenden in step 2 and compile only utility classes used on our html and update output.css