/*
NOTE: npx is a fancier, more modern way of running installed packages like mocha
*/

const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      //we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      //compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it("invalid/non-existent breed is passed in", (done) => {
    fetchBreedDescription("husky", (err, desc) => {
      //error expected here
      assert.equal(err, null);

      // console.log("error description ----------", err);
      // console.log("description", desc);

      //compare returned description
      assert.equal(null, desc);

      done();
    });
  });
});
