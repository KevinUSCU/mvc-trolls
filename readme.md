# MVC Trolls!
> A simple Express server built with MVC concept for interacting with data about trolls.

## Setup
1. Run `npm install`
1. Run the server in development mode with `npm run dev` or run it in production mode with `npm start`

## Usage
Available routes:
* get /trolls - returns array of all trolls
* get /trolls/id - returns troll object with the provided id
* post /trolls - adds a new troll
* post /trolls/random/number - randomly generates and adds the `number` of trolls provided
* put /trolls/id - updates info for the given troll
* delete /trolls/id - deletes the troll with the given id

Troll objects have the following fields:
* id
* name
* type
* color
* numBridges (the number of bridges the troll watches over)

## Project Requirements
Time to bring it all together! Build a RESTful API according to an MVC architecture for a single resource based on your choosing. For example, if you were going to build an API for a Snack resources your routes might look like:

GET /snacks   
GET /snacks/:id   
POST /snacks   
PUT /snacks/:id   
DELETE /snacks/:id   
Your resource should have at least four fields. Each resource must, in addition, include an id that is unique across every existing resource.