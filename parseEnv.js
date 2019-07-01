//This file allows for the reading, parsing, and organization of system environment variables

const envObjectParser = require('env-object-parser'); //allows for the searching of specific ENVs
var converter = require('number-to-words'); //Used for Conversion of 1s and 2s to "One"s and "Two"s
require('dotenv').config();

/**
 * Pulls all ENVs with the prefix "ENV"
 */
const envs = envObjectParser(process.env, {
    prefix: 'ENV'
});

/**
 * Total number of slides used for adding to the final array
 * @type {number}
 */
var envsLength = Object.keys(envs).length;

/**
 * 2-D array containing the Slide URLs and Times each URL (Slide) remains on the screen
 * @type {Array}
 */
var arr = [];

/**
 * Adds all slides to the array in the first "Row"
 * Adds all times to the array in the corresponding "Column" in the second "Row"
 */
for(var i = 1; i <= envsLength; i++){
    var value = converter.toWords(i);
    arr[i-1] = eval("envs." + value);
}

/**
 * Prints the array (Just for confirmation of working concept)
 */
console.log(arr);

