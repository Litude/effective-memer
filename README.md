# Imgur image retriever and viewer
Node.js based Imgur image retriever and viewer.

This project consists of a Node.js based API, which retrieves image metadata for the 100 most viral Imgur images through the Imgur API when started and stores it in a local MongoDB database. It then serves this metadata through simple searching.

There is also a simple React.js based web client which can be used to perform searches through the API and the client uses the retrieved information to display the images.

## Prerequisites
This requires MongoDB and Node.js. Other dependenices can be acquired through the npm package manager.

## Running
### First-time setup
1. Install MongoDB and Node.js
2. Clone the repository
3. Navigate to the cloned directory and run `npm install` to install the required dependencies

### Running the API service
1. Make sure the MongoDB service is running (`service mongod start`)
2. Run `server.js` with the command `node.js`, defaults to port 8081

### Running the Image viewer
1. Make sure the API service is running
2. Run `npm run build` to convert the React stuff to plain HTML/JS
3. Run `npm run start` to start the client
