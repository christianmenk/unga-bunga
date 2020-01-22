#! /usr/bin/env node

require('manakin').global;
var cb = require("copy-paste");
const readline = require("readline");

const snippets = require("./snippets")
const snippetKeys = Object.keys(snippets)
let input = process.argv[2]

if (input) {
    input = input.toLowerCase()
    let UNGA_MATCH  = snippets[input]
    if (UNGA_MATCH) {
        printSnippet(input, UNGA_MATCH)
    } else {
        giveMeNames(input)
    }
} else {
    giveMeNames()
}

function giveMeNames(input) {
    let matchedSnippets = []
    if (input) {
        for (let key of snippetKeys) {
            if (key.includes(input)) {
                matchedSnippets.push(key)
            }
        }
        if(matchedSnippets.length == 1){
            printSnippet(matchedSnippets[0], snippets[matchedSnippets[0]])
        } else {
            printMatches(matchedSnippets)
        }
    } else {
        printMatches(snippetKeys)
    }
}

function printMatches(matches){
    console.info(matches.join("    "))
}

function printSnippet(input, UNGA_MATCH){
        console.info(input)
        console.warn(UNGA_MATCH)
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question("Unga bunga copy code? (y/n): ", function (copy) {
            if (copy == "y") {
                cb.copy(UNGA_MATCH)
                console.success("Unga bunga copied code.")
            } 
            rl.close()
        });
}