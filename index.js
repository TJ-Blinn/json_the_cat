const { fetchBreedDescription } = require("./breedFetcher");

const cmdBreed = process.argv[2];

// fetchBreedDescription('Siberian', (error, description) => {
fetchBreedDescription(cmdBreed, (error, desc) => {
  //console.log(`error: ${error}, desc: ${desc}`);
  if (error) {
    console.log("The requested breed is not found. Please try again:", error);
  } else {
    console.log(desc);
  }
});

module.exports = { fetchBreedDescription };
