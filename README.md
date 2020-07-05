# Timestamp-prototype frontend test

## Table of content

- Getting started
  - Basic learnings
    - HTML
    - CSS
    - Javascript
    - Advanced javascript
    - Javascript i didnt told about
    - Compilers/bundlers
    - The DOM
    - Node.js
  - Resources
  - Framework & Tooling
  - Revision control
- Sharing is caring
- Pre requisits
- Start the project

## Getting started

This project consist of a series of packages & helpers to make all of this happen

#### Basic learnings

**HTML**

Here we are defining the elements that needs to appear on the screen, on the face of the surfaces it doesn't do anything but there are some built in features that might be worth looking into further down the line.

**CSS**

Is defining the layout of the page, so you might have box, but to define if its green, or are positioned differently is css. Everything Color, Font, Positioning, Sizes are handled in this layer.

In CSS world we have always wanted more features than css comes with out of the box, so here a few clever guys invented SASS/SCSS this is a compiler that gives us some neat features like varibles for colors and padding and much more, not relevant for the stage your in atm.

**Javascript**

Is defining the functionality, so if you click an element you can catch that event with javascript, or hover something or need to create new elements or remove elements. This is where javascript is your friend. We need to understand the basics of javascript to build any meaningful application in the world as it is today.

I took the liberty to give small list of important Need to know things, before diving further into building applications, when this "makes sense" it will be much easier to grasp many of the other things we build.

- **Variables**: This is the base that makes up all the great stuff javascript have to offer
- **Types**: in javascript are simpler than other languages but also different lets focus on understanding what is a types before we get rolling with, classes and other nice stuff
- **Types extended**: Objects & Arrays.
- **Conditionals**: if this then that
- **Loops**: for each element i my array do something.
- **Scopes**: This can be understood while learning many of the other things, its about which variables can we overwrite and how does the program select varibles over others.
- **Classes**: Here we starting to build scoped functionality

From here we are starting to getting the hang of it

**Advanced Javascript**

Deep dive into javascripts functionalities

- **Promises**: Javascript is a syncrones indevor so we have promises to make it asyncrones, what is ment by this is that its read and executed from top to bottom, but if we make an event that takes 3seconds we might not want to wait for it to finish before we move on
- **Async/Await**: Powerful syntax to utilize promises
- **Http requests**: Call other servers to do stuff

**Javascript i didnt tell about**

- Functions: There exist functions and other neat features in javascript but they are not relevant anymore to build applications when we have our compilers, and we are moving forward.
- Observables: Here is some very neat features but way out of scope for now.
- Browser compatablity: Lets get started then we can talk about where it needs to run then we can go from here.

**Compilers/Bundlers**

Javascript is evolving so fast, due to the big community behind javascript that browsers and places its used doesnt support the latest and greatest features. So therefor we have compilers which help us write in the modern javascript way with all the features it brings along with it, but they "downgrade" the code so it can be run everywhere.

**The DOM**

Is not the same as HTML but its a treestructual representation of the HTML that is presented to it. But it can be manipulated by javascript after the initial injection of html. This is what the browser use to define which elements exist in the page.
https://bitsofco.de/what-exactly-is-the-dom/

**Node.js**

Its javascript on the backend, written in the same way as on the frontend but with some access to the file system and other features that are "server relative"

#### Resources

- Learning Javascript: i have spend some good hours using codecademy, but it can also be anywhere else (https://www.codecademy.com/learn/introduction-to-javascript)
- Learning CSS: you can go for a course but could also argue that we need to get the features in and then we search to find solutions here google is your friend. But for css codecademy link: https://www.codecademy.com/learn/learn-css
- Learning HTML: Use google if your in doubt this part is pretty simple

#### Framework & Tooling:

- Angular - is the big driver behind this project, this is where many of the functionalities come from that many people normally spend days, weeks, months on just having in their application.
- Webpack - this handle the reloading of the browser on file changes (this is built into the package that angular-cli comes with)
- Node.js - Our backend language, its javascript but for the backend
- NPM - comes out of the box with Node.js and is the package manager

#### Revision control

Git is your friend here, to learn about git you can go here:
https://guides.github.com/introduction/git-handbook/

Github is a website that make it possible to publicly or private have code in the cloud for revision control, but the underlying logic is git that runs it.

## Sharing is caring

In the development community people gladly share all of their work for free so there is so much learning material, and premade packages that can be picked up without much work and be used.

## Pre requisits

- Node v14.x

## Start the project

```
// Fork the repo

// Clone the project
git@github.com:YOUR_GITHUB_USER/timestamp-prototype.git

// Change directory into project directory
cd timestamp-prototype

// Install the project
npm i

// Run the application
npm start
```
