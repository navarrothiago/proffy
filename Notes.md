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



