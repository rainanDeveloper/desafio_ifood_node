# Candidate test project

This is a simple node.js project to demonstrate my skills for a Backend Analyst position.

## Overview
As defined on the [Original Github Contest page](https://github.com/githubanotaai/new-test-backend-nodejs) the project uses:

- Node.js
- Express for the REST API
- MongoDB for the database
- Docker to containerize the database
- AWS SQS and SNS for the message queue

## Getting Started

To run this project:

1. Clone the repository
2. Run `npm install` to install dependencies
3. Make sure MongoDB is installed, or install it with docker compose using `docker compose up -d`
4. Copy the .env.example file to a .env file and change the values to match your environment
5. Run `npm run build` to build the project
6. Run `npm start` to start the server
7. The API will be available at http://localhost:8080 or at `PORT` enviroment variable numeric value

## Next Steps

Some ideas for improvements:

- Add a basic documentation with Swagger
- Add unit tests
- Implement authentication and authorization

## Contact

Author: Rainan Miranda de Jesus <rainan.jesus@pm.me> 