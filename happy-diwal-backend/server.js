const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../diwali")));

let nextId = 3;
const wishes = [
  {
    id: 1,
    title: "Happy Diwali",
    kicker: "Classic Wish",
    description: "Wishing you a bright and prosperous Diwali!",
    style: "classic",
  },
  {
    id: 2,
    title: "Happy Diwali",
    kicker: "Festival of Lights",
    description:
      "May every diya you light fill your home with warmth, your heart with peace, and the year ahead with prosperity, love, and new beginnings.",
    style: "modern",
  },
];

function findWish(id) {
  return wishes.find((wish) => wish.id === Number(id));
}

app.get("/api", (req, res) => {
  res.json({
    message: "Happy Diwali API is running",
    endpoints: {
      greeting: "GET /api/greeting",
      listWishes: "GET /api/wishes",
      getWish: "GET /api/wishes/:id",
      createWish: "POST /api/wishes",
      updateWish: "PUT /api/wishes/:id",
    },
  });
});

app.get("/api/greeting", (req, res) => {
  const name = req.query.name || "friend";
  res.json({
    greeting: `Happy Diwali, ${name}!`,
    festival: "Diwali",
    message:
      "May your home be filled with light, joy, and prosperity this Festival of Lights.",
  });
});

app.get("/api/wishes", (req, res) => {
  res.json(wishes);
});

app.get("/api/wishes/:id", (req, res) => {
  const wish = findWish(req.params.id);
  if (!wish) {
    return res.status(404).json({ error: "Wish not found" });
  }
  res.json(wish);
});

app.post("/api/wishes", (req, res) => {
  const { title, kicker, description, style } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      error: "title and description are required",
    });
  }

  const wish = {
    id: nextId++,
    title,
    kicker: kicker || "Festival of Lights",
    description,
    style: style || "modern",
  };

  wishes.push(wish);
  res.status(201).json(wish);
});

app.get("/api/wishes/:id/image", (req, res) => {
  const wish = findWish(req.params.id);
  if (!wish) {
    return res.status(404).json({ error: "Wish not found" });
  }
  res.sendFile(path.join(__dirname, "../diwali", wish.image));
});

app.get("/api/wishes/:id/audio", (req, res) => {
  const wish = findWish(req.params.id);
  if (!wish) {
    return res.status(404).json({ error: "Wish not found" });
  }
  res.sendFile(path.join(__dirname, "../diwali", wish.audio));
});
app.put("/api/wishes/:id", (req, res) => {
  const wish = findWish(req.params.id);
  if (!wish) {
    return res.status(404).json({ error: "Wish not found" });
  }

  const { title, kicker, description, style } = req.body;
  if (title !== undefined) wish.title = title;
  if (kicker !== undefined) wish.kicker = kicker;
  if (description !== undefined) wish.description = description;
  if (style !== undefined) wish.style = style;

  res.json(wish);
});

app.delete("/api/wishes/:id", (req, res) => {
  const index = wishes.findIndex((wish) => wish.id === Number(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: "Wish not found" });
  }

  const [deleted] = wishes.splice(index, 1);
  res.json({ message: "Wish deleted", wish: deleted });
});

app.listen(PORT, () => {
  console.log(`Happy Diwali API running at http://localhost:${PORT}`);
});
