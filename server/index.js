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
  res.status(200).send(randomCompliment);
});

  app.get('/api/fortune', (req, res) => {
    const fortunes = ['A lifetime friend shall soon be made', 'A person is never too old to learn', 'A truly rich life is full of happiness', 'all will go well with your new project', 'A faithful friend is a strong defense',];

    let someIndex = Math.floor(Math.random() * fortunes.length);
    let someFortune = fortunes[someIndex];

    res.status(200).send(someFortune);

  });


const motivationList = [
  {
    id: 1,
    motivation: 'you can do this, you can do anything!'
    
  },
  {
    id: 2,
    motivation: 'this aint nothin for you!!!'
  }

];

app.get('/api/motivation', (req, res) => {
  res.status(200).send(motivationList)
})

app.delete('/api/motivation/:id', (req, res) => {
  let {id} = req.params

  const index = motivationList.findIndex(item => +item.id === +id)

  motivationList.splice(index, 1)

  res.status(200).send(motivationList)
})

app.listen(4000, () => console.log("Server running on 4000"));
