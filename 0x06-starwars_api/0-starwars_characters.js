#!/usr/bin/node
const argv = process.argv;
const request = require('request');

const url = `https://swapi-api.alx-tools.com/api/films/${argv[2]}/`;
request(url, async function (error, response, body) {
  if (error) {
    console.error('error:', error);
  } else {
    const characters = JSON.parse(body).characters;
    for (const character of characters) {
      const res = await new Promise((resolve, reject) => {
        request(character, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            resolve(JSON.parse(body).name);
          }
        });
      });
      console.log(res);
    }
  }
});
