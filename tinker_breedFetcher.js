const net = require("net");

//const request = require("request");

//const pageFetcher = require("..page-fetcher1/pageFetcher");

// ************************** HTTP GET request

const conn = net.createConnection({
  host: "https://api.thecatapi.com/v1/breeds/search?q=sib",
  port: 80,
});
conn.setEncoding("UTF8");

// ************************** HTTP 1.1 request
conn.on("connect", () => {
  console.log(`Connected to server!`);

  conn.write(`GET / HTTP/1.1\r\n`);
  conn.write(`Host: https://api.thecatapi.com/v1/breeds/search?q=sib\r\n`);
  conn.write(`\r\n`);
});

/**
 * HTTP Response
 * After request is made, the HTTP server should send us HTTP data via our TCP connection
 * Print the data to the screen, and end the connection
 */

conn.on("data", (data) => {
  console.log(data);
  conn.end();
});

// *** HTTP GET request function | handle incoming data from the server (homepage as a response)
// request("https://api.thecatapi.com/v1/breeds/search?q=sib", (error, response, body) => {
//   console.log("error:", error); // Print the error if one occurred
//   console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
//   console.log("body Siberian results:", body); // Print the HTML for the homepage.
// });
