// API Routes
// 
// 
// 
// 
// 
// By: Colton Wilson
const apiRoute = require(`express`).Router();


// Promise version of fs.readFile
//Example on Module 11 lesson 21
// Function to write data to the JSON file given a destination and some content
const fs = require(`fs`);
const util = require(`util`);
const readFromFile = util.promisify(fs.readFile);

//taken from module 11 lesson 21 write to file with error
const writeToFile = (destination, content) =>
  fs.writeFile(destination, content, (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );



// GET Route for notes
//Similar to get in module 11 lesson 21
apiRoute.get(`/notes`, (req, res) => {
    //Console log to confirm
    console.info(`${req.method} request received for note route`);
    //Get the notes to display
    readFromFile(`./db/db.json`, `utf8`).then((data) =>
    res.json(JSON.parse(data)));
});


// POST Route for notes
//Similar to post in module 11 lesson 21
apiRoute.post(`/notes`, (req, res) => {
    //Console log to confirm
    console.info(`${req.method} request received to add a note`);
    //Get current saved Notes
    readFromFile(`./db/db.json`, `utf8`).then(function (data) {
    // Parse data to get an array of objects
    let noteArray = JSON.parse(data);
    // Destructuring assignment for the items in req.body
    const {title, text} = req.body;
    // If all the required properties are present
    if(title && text){
      // Variable for the object we will save
      const newNote = {
        title,
        text,
      }

      // Add new note to the note array
      noteArray.push(newNote);

      // Convert the array to a string so we can save it
      noteArray = JSON.stringify(noteArray);
      //Call the writeToFile function from above to save 
      writeToFile(`./db/db.json`, noteArray);
    }else{
      res.json('Error in posting feedback');
    }
    
    
     // sends a JSON response. according to geeksforgeeks to add notes to page
     res.json(noteArray);
  });
});


// Delete Note for extra points -- Extra Credit

module.exports = apiRoute;