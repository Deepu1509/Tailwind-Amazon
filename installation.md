## How to setup Tailwind CSS

### Step 1: Write the following commands

```
npm install -D tailwindcss
npx tailwindcss init
```

### Step 2. Configure your template paths
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
### Step 3. Create src/input.css to include:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### Step 4. Add the Tailwind directives to your CSS
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```
### Step 5. Add this command to package.json file in script object: 
```
 "start": "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"
```