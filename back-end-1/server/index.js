const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/users", (req, res) => {
    let friends = ["Kent", "Niq", "Jeff", "Idris", "Lauren"];
    res.status(200).send(friends);
  });
    
  app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
  });

app.listen(4000, () => console.log("Server running YEET on 4000"))