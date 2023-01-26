# Calculator

The Calculator is a simple mathematical expression calculator that can evaluate expressions using basic arithmetic operations such as addition, subtraction, multiplication, and division. It is built using Express and Typescript, and it has been implemented with the commonjs configuration.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

You will need to have Node.js and npm (or yarn) installed on your machine to run the application. You can download Node.js from the official website: https://nodejs.org/

## Installing

To install the dependencies, navigate to the root of the project and run:

npm install

## Running the application

To run the application, navigate to the root of the project and run:

npm start

This will start the application on port 3000.

## Testing the application

To run the tests, navigate to the root of the project and run:

npm test

This will run the tests using Jest and provide the test results.

## Using the Calculator

The Calculator has a single POST endpoint that receives a mathematical expression and returns the result of the calculation. The endpoint is located at http://localhost:3000/calculate.

You can use a tool like Insomnia to make a POST request to the endpoint with the following JSON payload:

{
"expression": "2+(3\*4)/2"
}

The response will be a JSON object with the following format:

{
"result": 10
}

## Limitations

The Calculator has the following limitations:

    It only supports basic arithmetic operations such as addition, subtraction, multiplication, and division.
    It assumes that the input is a well-formed equation with at least one term.
    The only term separator is the ().

Author

    Jennifer Merino
