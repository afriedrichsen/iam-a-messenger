# IAM Messenger
[![Build Status](https://travis-ci.org/afriedrichsen/iam-a-messenger.svg?branch=master)](https://travis-ci.org/afriedrichsen/iam-a-messenger)

## Overview

The following application is a mock up of a customer notification system.

For testing purposes, the customer "notifications" are simple alert output or JSON output (if using the REST service).

## Features
* ExpressJS REST API
* "Simple" ReactJS frontend.
* Redux state management.
* mongoose for ORM and data storage.
* Docker build
* Mocha, Chai and Sinon for server testing framework.
* ES2017 asynchornous web calls (async/await)
* REST API Documentation with apidoc
* Travis for CI integration

## Installation
1.) Clone the repository.

2.) Run the project one of the following ways.

   ### Standalone (development)
   a.) Change to project directory and copy the .env.example file. Edit the copied file with your relevant environment variables.
   
        cd iam-a-messenger
        
        cp .env.example
        
        nano .env
        
        npm run start:dev:full

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



##Future Features

If I had more time I would need to adjust the following:

* Fix the UI upload screen(s) (Redux state flow is incorrect).
* Introduce an access and authentication strategy (e.g. Passport.js) to restrict who can log into the UI and who can use the web service
* Additional UI test cases. 
        
## Authors
* Alex Friedrichsen