# Wiki API - README

Welcome to the Wiki API documentation! This API allows you to access, add, edit, and delete information from the "wikiDB" database. Follow the instructions below to get started with using the API.

## Getting Started
Before you begin, make sure you have the following installed:

Node.js - The JavaScript runtime environment.
MongoDB - The NoSQL database.

Installation:
1. Clone this repository to your local environment:

git clone https://github.com/SOCRAMBLLE/RESTful-API-wikiDB.git

cd REPO_NAME


2. Install the required dependencies using npm:
npm install

Configuration:

Make sure you have MongoDB running on your machine or provide a valid connection URL in the app.js file.

Edit the app.js file to set up your database configuration, such as the database name and connection URL.


3. Run the API

Run the following command to start the API:

node app.js

or, if you prefer to use nodemon to automatically restart the server after changes:

nodemon app.js


## Usage Examples
Here are some examples of how to use the API using Postman or any other API testing tool:

- **GET /articles**: Retrieve all articles from the database.
- **GET /articles/ElementTitle**: Retrieve the article with the title "ElementTitle".
- **POST /articles**: Add a new article to the database. Send data in the request body in JSON format with "title" and "content" fields.
- **PUT /articles/ElementTitle**: Update the article with the title "ElementTitle". Send updated data in the request body in JSON format.
- **PATCH /articles/ElementTitle**: Update only the title or content of the article with the title "ElementTitle". Send data in the request body in JSON format with the fields you want to update.
- **DELETE /articles**: Delete all articles from the database.
- **DELETE /articles/ElementTitle**: Delete the article with the title "ElementTitle".

Remember to replace ElementTitle with the actual titles you want to access or manipulate.

## Contribution
If you'd like to contribute to this project, feel free to send a pull request or open an issue to discuss your ideas.