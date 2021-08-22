/*
command line app to query this dataset. Users can provide any breed name, causing our application
 to fetch the information from the API and print out a short description of that breed.
*/

const request = require("request");

// *** HTTP GET request function | handle incoming data from the server (homepage as a response)
request("https://api.thecatapi.com/v1/breeds/search?q=sib", (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body Siberian results:", body); // Print the HTML for the homepage.

  // deserialization: convert the string version of it into an object first.
  const data = JSON.parse(body);
  console.log(data);
  console.log("Typeof: ----------", typeof data);
  console.log("First entry print out: ++++++", data[0].description);
});

// deserialization: convert the string version of it into an object first.

// console.log(data);
// console.log(typeof data);
