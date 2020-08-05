# Day 1

## Getting Start

### Create Project

Yarn - ```yarn create react-app web --template typescript```  
Npm - ```npx create react-app web --template typescript```


### Files

- Package.json - JS packages
- react-scripts - Scripts for older browsers to run React
- tscript.json - tsscript config
- yarn.lock - all depedencies which are installed in our project
- App.tsx - contains components which are functios that return HTML

### Folders

- src - Source code
- components - React components

### React 

- Front-end library. The interface is created in runtime
- ReactDOM - React library to handle with DOM
- React is driven by **components**. For instance, the box which has the professor, picture, value, icon
- All components start with capilaze letter in order to avoid mix with HTML tags
- Always import React in *.tsx
- JSX - JavaScript + XML - HTML dentro do JS
- react-router-dom: react module to navigate using DOM. Control the active component based on the address in which the user is accessing. 

--- 

### Coding Notes

- Fonts downloaded from Google fonts
- Font size default is 16px -> our app has ```16px x 0.6 = 9.6px = 1rem```
- Rem font size unit - get font size and increase x% (e.g. 1.6rem increase 60%). It is good beacuse if you want to change to size of the font overall the app, you can just change the font size in global.css
- This rem unit is good because we can adapt the font size according to the size of the screen. And if the user want to interect with the font size, you can use this feature 
- Big screen has font size  16 x 0.625 = 10px 
- Creating Landing page
- When you import a index.tsx, you do not need to explicit the index.tsx  
- The configuration (JSON preferences) above is used to quick start the div tags:

``` 
 "emmet.syntaxProfiles": { "javascript": "jsx" },
 "emmet.includeLanguages": { "javascript": "javascriptreact" }, 
```
- Examples: 

```
Input: div#page-landing <enter>
Output: <div id="page-landing"></div>
```
```
Input: div#page-landing-content.container
Output: <div id="page-landing-content" className="container"></div>
```
```
Input: div.logo-container
Output: <div className="logo-container"></div>
```
- Using React, it is not possible to pass the image path as we did in HTML. Instead, we can import the img inside the component file
- The valeu of some styles attribuites is got from layout. Basically, you have to try and match the output with the layout
- Breakpoint: the point in which is change the state of the screen (e.g. the width -> mobile to desktop)
- The properties is attributes that are passed to components
- Hint to check if the page is downloading all components again:
  - Go to browser -> Network -> Clear
  - F5 (Reload the page)
  - Check if the elements were downloaded
- Use Link component in React DOM to avoid this -> **Single page application - SPA**
- In order to declare typeage of the **property**, you must change the fuction (Component) to const function, for instance:

```
function PageHeader() { 
const PageHeader: React.FunctionComponent<PageHeaderProps> = () => {
```
- **interface** - the JS concept used to format of the component object to receive **properties**: 

```
interface PageHeaderProps {
  title: string;
}
```
- The ```{<obj>.children}``` is a JS property (default) used to pass the content of the component.
- Pseudo-class - focus:within, verify if the div has some element that has the property focus. The example above styles a pseudo-element. The after insert a pseudo-element in input-block, when the input is focused. The property ```content:``` is mandatory. Without this, nothing happens
```
#search-teachers .input-block:focus-within::after {
  content: '';
```

# Day 2


## Theory

- Mobile (React Native, Kontlin, Swift, Flutter)
- Avoid send all HTML file again to front-end
- RestAPI
- HTML x JSON 
- ReactJS - Streaming and Worker

## Creating Server

### First Steps

- In server folder, run ```yarn init -y```
- Package.json is createad. We will not follow any boilerplate, like front-end in the day 1
- Create file ```server.ts```
- Install the typescript in order to develop the API with Node - ```yarn add typescript -D``` (developer dependency)
- Create typescript config - ```yarn tsc --init``` or ```npx tsc --init```
- Change the "target": "es5", to "target": "es2017". The NodeJS only suport this of the typescript, for while.
- Install the ts-node-dev with ```yarn add ts-node-dev -D```. Execute the server and listen if there is any modification in the server sources. If so, the server will be reloaded. 
- Add the config below in package.json file:
```
"scripts": {
    "start": "tsnd src/server.ts"
  },
```
  - The flag ```transpile-only``` only compile the typescript to javascript. Error is not check
  - The flag ```ignore-watch node_module```. Avoid to convert the node_module folder
  - The flag ```respawn``` is used to run the server without finish it
- Install **Express** micro framework - ```yarn add express```
- The error when import some package, sometimes you have to install the package with @type. In express case, we can run ```yarn add @types/express -D```
- insomnia.rest - test POST, DELETE
- Request Body - request.body - body of the request - default do not understand JSON. It must import a express.json
- Route Params: Identify which resource we want to update or delete
- Query Params: Page, filter, sort
- SQL - Relational DB - SQLite 
- Migrations - version control of the database - CLI knex - We put everything we do in database
- Knex execute with JS - so you have to create a file ```knexfile.ts```
- Redefine the knex commands to execute migrations - See package.json
```
"scripts": {
    "start": "tsnd --transpile-only --ignore-watch node_module --respawn src/server.ts",
    "knex:migrate": "knex --knexfile knexfile.ts migrate:latest",
    "knex:migrate:rollback": "knex --knexfile knexfile.ts migrate:rollback"
  },
```
- Create files with numeric sort (see migrations folder)
- Check migration API in knex website
- Execute ```yarn knex:migrate``` to fill the table in db
- Knex - Write SQL using JS - ```yarn add knex sqlit3```
- Install SQLite vscode extension
- The knex has table (**knex_migrations knex_migrations_lock**) in order to track the modifications that was applied in our database
- 

### Coding

- Create routes - Return JSON 
- Create app to listen a port
- Each route is a URL of our application
- HTTP: GET, POST, DELETE
- When you interect with the database, it is recommend to use a async function
- The database operations is the promisse in JS
- JS use short syntaxe
