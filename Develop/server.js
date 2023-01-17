const htmlRoutes = require('./routes/html');
const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');
const PORT = 3001;

// Folder to retrieve CSS and JS Files
app.use(express.static("public"));

// Middleware to parse the JSON data
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// PORT
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});

module.exports = app;