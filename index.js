#!/usr/bin/env node

const https = require('https');
const config = require("./config.js");
const sumID = process.argv[2];

https.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/RiotSchmick?api_key=${config.apiKey}`, (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
    
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

