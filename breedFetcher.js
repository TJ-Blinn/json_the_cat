/*
command line app to query this dataset. Users can provide any breed name, causing our application
 to fetch the information from the API and print out a short description of that breed.
*/

const request = require("request");
// const options = { method: "GET", url: "https://api.thecatapi.com/v1/breeds/search", headers: { "x-api-key": "da4d9753-2242-4e4e-9fe1-5b4f4985cb53" } };

const fetchBreedDescription = function (cmdBreed, cb) {
  //const url = `https://api.thecatapi.com/v1/breeds/search?q=${cmdBreed}`;

  const options = {
    method: "GET",
    url: `https://api.thecatapi.com/v1/breeds/search?q=${cmdBreed}`,
    headers: { "x-api-key": "da4d9753-2242-4e4e-9fe1-5b4f4985cb53" },
  };

  // *** HTTP GET request function | handle incoming data from the server (homepage as a response)
  request(options, (error, response, body) => {
    // *** deserialization: convert the string version of it into an object first. ***
    const data = JSON.parse(body);

    //console.log({ error });

    if (data.length === 0 || error) {
      //console.log("Reponse ---------", response);
      const message = new Error(error);

      cb(null, null);
    } else {
      if (data.message) {
        return cb(`error ${data.message}`, null);
      }
      return cb(null, data[0].description); // string description for a valid breed, via callback
      // console.log(data);
      // console.log("Typeof: ----------", typeof data);
      // console.log("First entry print out: ++++++", data[0].description);
      // const data = JSON.parse(body);
      // cb(error, data[0].description);

      // console.log(`Your results:
      // Breed name: ${data[0].name}
      // Breed Description: ${data[0].description}.`);
    }
  });
};

module.exports = { fetchBreedDescription };

//**************************************************************************

// asyncBreeds.js

// const fs = require("fs");

// const breedDetailsFromFile = function (breed, functionToRunWhenThingsAreDone) {
//   fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
//     if (!error) functionToRunWhenThingsAreDone(data);
//   });
// };

// const printOutCatBreed = (breed) => {
//   console.log("Return Value: ", breed);
// };
// // CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
// breedDetailsFromFile("Bombay", printOutCatBreed);
