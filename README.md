# Clinic website with square appointments

![Screenshot 2021-12-20 213353](https://user-images.githubusercontent.com/82341009/146866888-6d00f3d9-31c7-4273-a27c-a118991d1749.png)

This project was built with React, Bootstrap5, and Square appointments, deployed on Netlify.

#### Video Demo

https://youtu.be/wkPxBze_fKc

#### Live Demo

https://the-clinic.netlify.app

#### Description

This single-page application was built with React, Bootstrap5, and Square appointments, deployed on Netlify, can be used as a medical or massage clinic website.
React is a JavaScript front-end framework, it has several features like easy to learn and use, reusable components, SEO friendly, and have many supported JavaScript libraries.
It's easy to use bootstrap to build a decent front end UI.
Square appointments is an third-party online booking service, it provides a variety of useful features, like choose and employee, choose appointment data and time, email and text notification, and more. 
The reason I choose to build this web app is because I found some local clinic's website is not good enough, some use out-of-date UI, some didn't provide needed functions like appointment booking system.
Since I started my CS50x study in October 2021, I have to finish the course before December 31, 2021, so I didn't have enough time to build a customize booking system. So I choose an third-party one - 
Square appointments. I will try to replace it with my own app.

PS: For account safety reasons, the booking system will be only shortly showed in the live demo.

#### Introduce the file structure and content:

public: static files like index.html and favicon.ico 
src: builded components and images, index.js-main enternce, app.js-import conponents, and index.css-style the whole site along with bootstrap.
node_modules: It contains all dependencies and sub-dependencies specified in package.json used by React app.
.gitignore: This file is tells Git which files or folders to ignore in a project, so the files/folders list in this file won't be updata to github repo.
package.json: It is a JSON file used for managing the project’s dependencies, scripts, version.
package-lock. json: It is automatically generated for any operations where npm modifies either the node_modules tree or package.json. 
It helps while a team is working on private apps to ensure that they are working on the same version of dependencies and sub-dependencies. 
It also maintains a history of changes done in package.json so, that at any point of time, when required previous changes can be looked back in the package-lock.json file.
readme.md: Project introduce and instructions.


## How to use this project

1. Clone this repository.

2. Run "npm install".

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
