# Express + PostgreSQL API Documentation

## Overview

This is a RESTful API built with **Express.js** and **PostgreSQL**, with **Swagger UI** for documentation.  
It supports managing users and serves static files from the `public` directory.

---

## Table of Contents

1. [Setup](#setup)  
2. [Environment Variables](#environment-variables)  
3. [Dependencies](#dependencies)  
4. [Server Configuration](#server-configuration)  
5. [Database Connection](#database-connection)  
6. [Routes](#routes)  
7. [Swagger Documentation](#swagger-documentation)  
8. [Running the Server](#running-the-server)  

---

## Setup

1. Clone the repository.  
2. Install dependencies:

```bash
npm install express pg js-yaml swagger-ui-express dotenv

Create a .env file in the root folder to configure database and server settings.

Environment Variables
Variable	Description
DB_HOST	PostgreSQL host
DB_PORT	PostgreSQL port
DB_USER	PostgreSQL username
DB_PASSWORD	PostgreSQL password
DB_NAME	PostgreSQL database name
PORT	Port for the server (default: 5000)

Example .env:

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=secret
DB_NAME=mydb
PORT=5000
Dependencies

express – Web framework for Node.js

pg – PostgreSQL client for Node.js

fs – Node.js file system module

js-yaml – YAML parser for JavaScript

swagger-ui-express – Swagger UI integration for Express

dotenv – Loads environment variables from .env

Server Configuration

Serves JSON requests via express.json().

Serves static files from the public directory.

Swagger UI documentation is served at /api-docs.

Database Connection

PostgreSQL connection pool:

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

Logs Connected to PostgreSQL on successful connection.

Handles errors if connection fails.

Routes
GET /

Description: Check API status.

Response:

200 OK – "API is running"

GET /users

Description: Retrieve all users.

Response:

200 OK – JSON array of users

500 Internal Server Error – On failure

Example Response:

[
  { "id": 1, "name": "Alice", "email": "alice@example.com" },
  { "id": 2, "name": "Bob", "email": "bob@example.com" }
]
POST /users

Description: Create a new user.

Request Body:

{
  "name": "Alice",
  "email": "alice@example.com"
}

Response:

201 Created – Returns the created user

500 Internal Server Error – On failure

Example Response:

{
  "id": 3,
  "name": "Alice",
  "email": "alice@example.com"
}
Swagger Documentation

Loaded from swagger.yaml and served at:

http://localhost:<PORT>/api-docs

Allows interactive testing of all API endpoints.

Running the Server

Ensure PostgreSQL is running and your database exists.

Start the server:

node index.js

Example console output:

Connected to PostgreSQL
Server running on port 5000
Swagger docs available at http://localhost:5000/api-docs