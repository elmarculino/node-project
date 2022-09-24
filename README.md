# Nodejs Test Project

# Pre-requisites
- Install [Node.js](https://nodejs.org/) 

# Getting started
- Clone the repository
```
git clone https://github.com:elmarculino/node-project.git
```
- Install dependencies
```
cd <project_name>
npm install
```
- Run the project
```
npm start
```
  Will call the functions and print the results. 


## Project Structure
The folder structure of this app is explained below:

| Name             | Description                                         |
|------------------|-----------------------------------------------------|
| **node_modules** | Contains all npm dependencies                       |
| **src**          | Contains the source code                            |
| **test**         | Contains the tests source code                      |
| index.ts         | File responsible for the application's statup       |
| package.json     | Contains npm dependencies as well as [init scripts] |
|                  |                                                     |

### Running the code
All the different steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script | Description                                    |
|------------|------------------------------------------------|
| `start`    | Runs index.js. Can be invoked with `npm start` |
| `test`     | Runs tests using mocha                         |
|            |                                                |

## Testing
The tests are written in Mocha

```
"mocha": "^10.0.0"
```
### Running tests using NPM Scripts
````
npm run test
````
Test files are created under test folder.
