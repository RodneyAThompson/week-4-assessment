const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  app.get('/api/fortune', (req, res) => {
    const fortunes = ['A lifetime friend shall soon be made', 'A person is never too old to learn', 'A truly rich life is full of happiness', 'all will go well with your new project', 'A faithful friend is a strong defense',];

    let someIndex = Math.floor(Math.random() * fortunes.length);
    let someFortune = fortunes[someIndex];

    res.status(200).send(someFortune);

  });

  res.status(200).send(randomCompliment);
  
});

app.listen(4000, () => console.log("Server running on 4000"));
