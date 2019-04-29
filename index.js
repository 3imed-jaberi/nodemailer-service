require('dotenv').config();
const http = require('http');

// express application .. 
const app = require('./src/app');

// create the HTTP server .. 
const server = http.createServer(app);

// get the port ..
const PORT = process.env.PORT ;

// run the server .. 
server.listen(PORT , () => {
  console.log(`server is runnig on port ${PORT} ...`);      
});