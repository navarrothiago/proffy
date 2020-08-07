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
- Migrations - version control of the database - CLI **knex** - We put everything we do in database
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
-  Install **cors** package - allow the frontend in 3000 port access the backend in port 3333 -  ```yarn add cors``` and ```yarn add @types/cors -D```

### Coding

- Create routes - Return JSON 
- Create app to listen a port
- Each route is a URL of our application
- HTTP: GET, POST, DELETE
- When you interect with the database, it is recommend to use a async function
- The database operations is the promisse in JS
- JS use short syntaxe

# Day 3

## Introduction

- Stack: NodeJs, React and ReactNative
- UberEats, Netflix, Instagram uses
- Unique library to deal with frontend, backend and mobile
- **State** - in React, if we need to handle value inside a component, we need to use state. Use ``` import { useState } from 'react'```. If you need to manage the variable, you must not manage direct with the list. The React use the **Imutability** concept. Example:
```
const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ])
  }
```
- After that, usually we define a onChange property to a arrow function in a element in order to call the **setXXXX** to update the value what we need, for instance:
```
<Input 
  type="time" 
  name="time" 
  label="Hora"
  value={time}
  onChange={e => {setTime(e.target.value)}}
></Input>
```
- **React declarative** - we can add a new element in screen. Different in HTML which we added a new element, it does not happen in React. Our interface is built from the informtation that is given for it

## Coding

- If you want to represent a block in a form, a tag **fildset** is used. The **legend** is a title in **fieldset**
- **InputHTMLAttribuites** - Interface from React that define all attributes of the input HTML element
- **Rest Operator** - JS - ```...rest```. Get the rest elements. 
- **Spread Operator** - Use the operator to save in variables
- The Spread operator lets you expand an iterable like a string, object or array into its elements while the Rest operator does the inverse by reducing a set of elemnts into one array
- The first element inside the map must have a unique key

## Connectiog Frontend and Backend

- Install **axios** with ```yarn add axios``` in the frontend of our application. It is useful in order to consume the APIs
- You must define ```baseURL``` with URL in uppercase all the letters
- **useEffet** from ```react```- Send a request when the page is load. Example:
```
useEffect(() =>{
    api.get('/connections').then(response => {
      const {total} = response.data;
      setTotalConnections(total);
    })
  }, [])
```
- The second element is the element when is changed (e.g. [likes]). So when this var change, the arrow function is executed.
- Avoid reload the page with submit with `e.preventDefault();`
- In order to handle state var array, we had to create the following code:
```
function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        // return the scheduleItem, replacing the `field` field 
        return { ...scheduleItem, [field]: value };
      }
      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }
```    
- So, this method update only the position in the scheduleItems. Note the `[``]` around the field. This represent a variable. 
- **Redirect user after an action**  - `import  {useHistory} from 'react-router-dom'` - `history.push('/');` - send user to Landing page

# Day 4

## Instalation

- [expo](https://expo.io/) - `yarn global add expo-cli` or `sudo npm install -g expo-cli` - wait a little bit
  - with expo tools, services, and react, you can build, deploy, and quickly iterate on native android, ios, and web apps from the same javascript codebase
  - caso a instalação da expo-cli como global no yarn apareça que ocorreu com sucesso mas ao tentar utilizar o expo diz que o comando não existe, verifique no linux e no macos se você adicionou a linha `export path="$path:`yarn global bin`"` ao arquivo de configuração do seu terminal.
- Create expo black template integrated with TS - `expo init mobile`
- After that, execute `yarn start` in `mobile` folder 
  - A new windown will be open. It seems lik a **webpack** in React
  - This screen is useful to see the logs, which mobile is connected in our screen
  - There will be ip address for testing
  - You need to download the **expo-client** in your smartphone 
  - After that, open the camera of your smarthphone
  - Scan the QR Code (a popup will be shown in order to open tha expo-client app)
  - Now you source and the app running in your mobile is sync. Try to change the App.tsx

## React Native x React JS

- We can reuse about 90% of the code
- The components is the same - function returning a XML-like (a.k.a JSX)
- In React Native, we dont use the HTML tag, like div, p, main. We use component of the React Native 
  - A block is a **View** and a text is a **Text**
- In Rect Native, we dont have a style like **CSS** files
  - A **StyleSheet** is a object of the JS
  - A inherits style does not exist (Exception **Text** component). You have to apply each style into a element
  - A **-** does not exist. Remove it as uppercase the next letter
- All elements have **display: flex** by default
- The **flexDirection** is column by default (because of the direction of the screen). In web, is row
- We have to declare to React Native the extesions, like png in a file `@type/inde.d.ts`: `declare module '*.png';`


## Coding

### Building Landing Page

- Density of images
- How to return two elements in React? 
  - Wrapping it with other element, like View (but you create another element)
  - Create a **fragment** ( a empty tag **<>** )
- Some padding is applied correct using image
  - It is beacause the image does not adapt the space available
  - We could apply a styles below:

```
  banner: {
    width: '100%',
    // Resize the image and all content must be available.
    resizeMode:'contain'
  },
 
```
- Fonts: `expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins`
- See https://github.com/expo/google-fonts to use it in our code
- **SplashScrenn** - `import {AppLoading} from 'expo';` 
- **TouchableOpacity** - when you press the button, it turns the opacity
- Diego does not like to work with variable to store the color value. We could also use **Styled Components**

### Navigation

#### Stack Navigation

- **[React Navigation](https://reactnavigation.org/docs/getting-started)** 
  - `npm install @react-navigation/native`
  - `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`
  - `npm install @react-navigation/stack`
- Create a routes folder. There will be two routes: 
  - one for stack navigation
    - one for tab navigation
- Good practice - `import { ReactButton } from 'react-native-gesture-handler';`
  - It will adapt the button according with the OS that is running

#### Tab Navigation

- Install - `npm install @react-navigation/bottom-tabs`
- Cascade navigation
- The `<NavigationContainer>` appears only once in our code and outter. See `AppStack`


#### GiveClasses Page

- **ImageBackground** - It must be pass a size of the image. 
  - The `resizeMode: 'contain'` can be declare inside the ImageBackground tag, not in style file
    - All the image fill the screen


