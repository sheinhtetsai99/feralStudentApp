const express = require("express");
const notes = require("./data/notes");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get('/api/notes/:id', (req,res) =>{
    const note = notes.find((n) => n.id == req.params.id)
})


app.listen(8080, console.log("Server started"));
