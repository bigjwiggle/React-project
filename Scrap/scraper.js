const { type } = require("os");
const { start } = require("repl");
const { getJson } = require("serpapi");
const util = require('util');
require('dotenv').config();

const API_KEY = process.env.WEB_API_KEY;

getJson( {
    api_key: API_KEY,
    engine: "google_jobs",
    //will add location variable that is taken from user.
    q: "Tech jobs",
    hl: "en",
    gl: "us",
    location: "Richmond, VA, Virginia, United States",
    google_domain: "google.com",
    type: "search",
    // start: "20"

}, (results) => {
    results.jobs_results.forEach(result => {
        console.log(`${result.title} | ${result.company_name} | ${result.location} | ${result.extensions}`);

    });
    

});