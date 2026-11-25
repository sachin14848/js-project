const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Product Management System</h1>");
});

app.get("/welcome/:username", (req, res) => {
  const name = req.params.username;
  const role = req.query.role;
  res.send(`<h1>Welcome ${name}, Your role is ${role}</h1>`);
});

app.get("/products", (req, res) => {
  res.send("<h1>Here is the list of all products.</h1>");
});

app.post("/products", (req, res) => {
  res.send("<h1>A new product has been added.</h1>");
});

app.get("/categories", (req, res) => {
  res.send("<h1>Here is the list of all categories.</h1>");
});

app.post("/categories", (req, res) => {
  res.send("<h1>A new category has been added.</h1>");
});

// app.all('/{*splat}', (req, res)=> {
//     console.log('First Middleware');
//     res.status(404).json({ error: 'Page not found' });
// });

app.get("/{*splat}", (req, res) => {
  console.log("First Middleware");
  res.status(404).json({ error: "Page not found" });
});

// app.use('*', (req, res)=> {
//     console.log('First Middleware');
//     res.status(404).json({ error: 'Page not found' });
// });

app.listen(4000, () => {
  console.log(`Server is running on http://localhost:4000`);
});
