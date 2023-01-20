// Helper Code layout taken from module 11 lesson 22-23
// 
// 
// 
// 
// By: Colton Wilson

const express = require('express');

// Helper method for generating unique ids
const htmlRoutes = require('./routes/html');
const apiRoutes = require('./routes/api');
//Port number Shout out to Jonny for this line
const PORT = process.env.PORT || 3001;
//express application
const app = express();



// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

//When see /api use apiRoutes, if not use an html Route
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listening PORT was shown in all lessons
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
//Export app with express
module.exports = app;