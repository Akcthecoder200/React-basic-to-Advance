Lecture Notes
Creating a Custom React
Getting Started: Begin by creating a folder named "custom-react" and adding an index.html file with a root element, similar to how Vite sets up a project.

Custom React Script: Create a JavaScript file, e.g., "customreact.js," to build your custom React functionality.

Understanding React Elements: React compiles elements into a tree structure. For example, when you return an anchor tag in your code, React translates it into an object with properties such as type and props.

Creating a Rendering Function: You'll need a function that takes these React elements and injects them into the root element.

Rendering Elements: To create this function, start by selecting the root element using const mainContainer = document.querySelector('root');.

Creating DOM Elements: Create a variable named domElement and create an element in it using document.createElement(re.type).

Adding Content: Populate the element by setting its innerHTML to re.children.

Setting Attributes: Set attributes using domElement.setAttribute(re.props.key, re.props.target).

Appending to Container: Finally, add the created element to the container using container.append(domElement).

Enhancing with Loops: Make this function more versatile by using loops to handle various properties of React elements.

JSX and React Syntax
Introduction to Vite: To better understand how React elements are rendered, let's explore Vite, a modern development build tool. In Vite, "main.jsx" renders "app.jsx," which is essentially a function.

JSX Syntax: You can use JSX syntax, like <MyApp />, to render elements. This syntax is enabled by a bundler, like Babel, which converts elements inside functions into a tree structure.

Alternative Syntax: Instead of <MyApp />, you can also write it as MyApp(). However, it's best practice to use JSX syntax.

Passing React Elements: You can directly pass a variable that returns a React element, but not a React element that you manually set up as a tree with custom keys and objects. React uses its own syntax and functions.

React.createElement: React provides the createElement function for creating elements. It takes the HTML tag as the first parameter and an object for properties as the second parameter. The third parameter is used for text content.

Injecting Variables: To inject JavaScript variables into JSX, declare a variable within the function and use curly braces {variable} to include it. This syntax is called an evaluated expression.

Evaluated Expressions: Curly braces {} are used for evaluated expressions. You can't perform operations like conditionals (e.g., {if(true) username}) inside these braces.

Object Conversion: Texts enclosed in curly braces get converted into objects in the final expression. The variables are injected into the tree as key-value pairs, and the text is used as the value.