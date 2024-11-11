#!/usr/bin/node
const request = require('request');

// A Javascript module that consumes a given API
// it also uses the process.argv to receive an arg of type int
if (!process.argv[2] || !Number.isInteger(process.argv[2])) { console.log('Must include a number'); }
request.get(`https://swapi-api.alx-tools.com/api/films/${process.argv[2]}/`,
  (error, response, body) => {
    if (!error && response.statusCode === 200) {
      if (error) { return error; }
      const bulkCharacterObject = JSON.parse(body).characters;
      for (const character of bulkCharacterObject) {
        request.get(character, (error, response, body) => {
          if (error) { return error; }
          const singleCharacter = JSON.parse(body).name;
          console.log(singleCharacter);
        });
      }
    }
  }
);
