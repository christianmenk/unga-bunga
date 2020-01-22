#! /usr/bin/env node

require('manakin').global;
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let bungas = require("./bungas")
let unga = process.argv[2]

if (unga) {
    let UNGA_ATTEMPT = null;
    UNGA_ATTEMPT = bungas[unga.toLowerCase()]
    console.log(Object.keys(bungas))
    if (UNGA_ATTEMPT) {
        console.info(unga)
        console.warn(UNGA_ATTEMPT)
        rl.question("Unga bunga copy code? (y/n): ", function (copy) {
            if(copy == "y"){
                console.success("Copied to Clipboard.")
                
            } 
            rl.close()
        });
    } else {
        console.log("giveMeNames")
    }
} else {
    console.log("giveMeNames")

}
