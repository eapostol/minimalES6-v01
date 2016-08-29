# minimalES6-v01
A minimal website that would be required to run ES6 type code. version 1

THIS GIT
https://github.com/eapostol/minimalES6-v01.git

I created the repo on the git website, then cloned it into a local
directory with a similar name as the repo.

In the subdirectory I created for the project, I invoked git init from 
the terminal.

I filled in the information to initialize the repo as required.

Then I installed the following modules the order is referenced below,
using npm install --save-dev nameOfModule as usual.

    1. "webpack": "^1.13.2",
    2. "webpack-dev-server": "^1.15.0"
    3. "babel-cli": "^6.14.0",
    4. "babel-core": "^6.14.0",
    5. "babel-loader": "^6.2.5",
    6. "babel-preset-es2015": "^6.14.0",
    7. "file-loader": "^0.9.0",
    8. "node-libs-browser": "^1.0.0",
    9. "node-sass": "^3.8.0",
    10. "sass-loader": "^4.0.0",
    11. "css-loader": "^0.24.0",
    12. "style-loader": "^0.13.1",


No warnings at this point... 
 
Created a file called .babelrc . see the source file for the code.
This makes babel use ES2015 for sure.

Then I modified the following in the scripts: property of package.json
to add build and start properties

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    "build": "webpack",
    "start": "webpack-dev-server"
  }
  
 Create a file called webpack.config.js 
  * use my example web.config.js 
  * its commented, so review it. You don't have to master NODE,
  * but be familiar with the basics of webpack.config.js
  * a good starter video is https://www.youtube.com/watch?v=TaWKUpahFZM
  
   
   
 FINALLY Create some ES6 classes. see the /src folder.
 There is index.js, and sample classes to be imported, called
 Person.js, and Car.js
 
 -index.js is 'linked' to index.html and becomes the 'launcher' for
 the app. It brings all the code together.
 -index.js uses imports to include the other classes
 -The other classes are marked as export.
 -most of the script is up to ES6 compliancy.
 
 at the terminal, run 

webpack
 
^ the above should transpile file .js files accordingly.

then run

npm start

^ which launches the dev testing server in hot module replacement mode.
This means changes in your code on the fly will automatically refresh
the browser.
 
 
 DO THIS STUFF with CARE! It's subject to change. As always, slack me
 with questions or e-mail me at edward.apostol@redacademy.com.
 
 I am here to help!
 
 
 
 
 
 