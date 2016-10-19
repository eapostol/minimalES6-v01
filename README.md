# Shopping Cart using - minimalES6-v01

A minimal website that would be required to run ES6 type code. 

Version 1.1.


THIS GIT URL is at 

https://github.com/eapostol/project03cart

These files are based upon mirroring the repository found at

https://github.com/eapostol/minimalES6-v01 

Notes on how the package.json was setup (if you are going to do this on your own...in the future)

Make sure you create a repo for your projects that may use this repo!

Make sure you ran **npm init** to create your basic _package.json_ file.

Make sure webpack is globally installed, making it available to transpile
at your terminal. I discovered this issue through user testing with Ala.
My machine already has webpack installed globally.

_npm install -g webpack_

Next, I installed the following modules the order is referenced below,
using 

_npm install --save-dev nameOfModule_
 
as usual. 

Ignore the version numbers referenced below, I copied the module names 
from package.json. So at the terminal it would be like

_npm install --save-dev webpack
npm install --save-dev webpack-dev-server_

etc.

Not specifying at @latest installs the latest version anyway. But 
note that they updated BABEL (thanks to my interference lol).

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
 
Then create a file called .babelrc . You see the source file for the 
code in this repo. This makes babel use ES2015 for sure.

Then I modified the following in the scripts: property of package.json
to add build and start properties

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    "build": "webpack",
    "start": "webpack-dev-server"
  }
  
  the build property above tells npm what module is used to build the site.
  In this case, its webpack (as opposed to Node)
   
   the start property tells npm what to start. In this case, it's 
   the webpack dev server, used for testing (like an Apache server).
   You will likely explore Apache when you cover PHP and Wordpress.

  
 Create a file called webpack.config.js 
  - use my example web.config.js 
  - its commented, so review it. You don't have to master NODE to know
  the intricacies of what is happening, but be familiar with the basics 
  of webpack.config.js
  - a good starter video to learn webpack is at
   https://www.youtube.com/watch?v=TaWKUpahFZM
  

 FINALLY Create some sample ES6 classes. see the /src folder.
 
 There is index.js, and sample classes to be imported, called
 Person.js, and Car.js.
 
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
 
 
 
 
 
 