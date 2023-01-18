// HTML Routes
// 
// By: Colton Wilson
//Layout taken from Module 11 lesson 1
const express = require('express');
const path = require("path");

const htmlRoute = express();

// GET request for notes page
htmlRoute.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// GET request for homepage
htmlRoute.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = htmlRoute;