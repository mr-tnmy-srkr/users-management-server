const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const users = [
  {
    id: 1,
    name: "Sabana",
    email: "sabana@gmail.com",
  },
  {
    id: 2,
    name: "Sabnoor",
    email: "sabnoor@gmail.com",
  },
  {
    id: 3,
    name: "Sabila",
    email: "sabila@gmail.com",
  },
];

app.get("/", (req, res) => {
  res.send("User management server running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
