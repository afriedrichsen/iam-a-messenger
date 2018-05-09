# IAM Messenger
[![Build Status](https://travis-ci.org/afriedrichsen/iam-a-messenger.svg?branch=master)](https://travis-ci.org/afriedrichsen/iam-a-messenger)

Mock customer notification system built on the MERN stack.

## Overview

The following application is a mock up of a customer notification system.

For testing purposes, the customer "notifications" are simple alert output or JSON output (if using the REST service).


## Design

The application is divided into 3 objects:

* Guests
* Companies (hotels/locations etc.)
* Message templates


Examples of each object (as well as the message "request" that is sent) can be found at ``app/server/data``



The following files/code are of particular interest:

* ``app/server/utils/timeGreeting.js`` - JavaScript function that creates a personalized greeting based on the time of day (uses Moment.js).

* ``app/server/controllers/message.controller.js`` - The Express.js controller file that contains the logic for sending the customer notification.

## Features
* ExpressJS REST API
* CORS enabled
* Request validation with [joi](https://github.com/hapijs/joi)
* Uses [helmet](https://github.com/helmetjs/helmet) to set some HTTP headers for security
* "Simple" ReactJS frontend.
* Linting with [eslint](http://eslint.org)
* Redux state management.
* mongoose for ORM and data storage.
* Docker build
* Mocha, Chai and Sinon for server testing framework.
* ES2017 asynchornous web calls (async/await)
* REST API Documentation with apidoc
* Code coverage with [istanbul](https://istanbul.js.org) and [coveralls](https://coveralls.io)
* Git hooks with [husky](https://github.com/typicode/husky) 
* Logging with [morgan](https://github.com/expressjs/morgan)
* API documentation geratorion with [apidoc](http://apidocjs.com)
* Continuous integration support with [travisCI](https://travis-ci.org)


## Installation
1.) Clone the repository.

2.) Run the project one of the following ways.

   ### Standalone (development)
   a.) Change to project directory and copy the .env.example file. Edit the copied file with your relevant environment variables.
   
        cd iam-a-messenger
        
        cp app/server/.env.example app/server/.env
        
        nano app/server/.env
   
   b.) Install packages.
   
        cd iam-a-messenger
   
        npm install
        
        cd client
        
        npm install
   
   c.)  Run the Web Service and Client
        
        npm run dev:server
        
        cd client
        
        npm start

A separate instance of MongoDB will need to be set up (either locally or remote).
  
   ### Docker Mode
        cd iam-a-manager
        
        docker-compose up
        
        OR 
        
        docker stack deploy -c docker-compose.yml 
               
The Docker service contains the necessary MongoDB container.

## Usage


1.) In order to load data into the database you must either navigate to ``http://localhost:2112/initialize`` or use the corresponding UI upload screens.


2.) Proceed to ``http://localhost:3000/`` . Adjust the 3 pull down menus as you see fit.

3.) Click "Send" to testing "sending" a message to a selected user and company.



Interfacing with the application can be done at the UI endpoint (``http://localhost:3000``) or through the REST API (``http://localhost:2112``)



## Future Features

If I had more time I would need to adjust the following:

* Fix the UI upload screen(s) (Redux state flow is incorrect).
* Introduce an access and authentication strategy (e.g. Passport.js) to restrict who can log into the UI and who can use the web service
* Additional UI test cases. 
        
## Authors
* Alex Friedrichsen