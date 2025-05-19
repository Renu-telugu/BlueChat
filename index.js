const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = mongoose.models.Chat || require('./models/chat.js');
const methodOverride = require('method-override');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

// Global variable to store the database connection
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  
  try {
    // Connection options for better reliability
    const options = {
      serverSelectionTimeoutMS: 60000, 
      socketTimeoutMS: 60000,
      family: 4
    };
    
    // Connect to the MongoDB database
    await mongoose.connect(MONGODB_URI, options);
    console.log('Connected to MongoDB');
    
    cachedDb = mongoose.connection;
    return cachedDb;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    // Return null but don't throw - this lets the API still respond with an error instead of crashing
    return null;
  }
}

app.get("/chats", async (req, res) => {
  try {
    await connectToDatabase();
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
  } catch (err) {
    console.error("Error fetching chats:", err);
    res.status(500).render("error.ejs", { error: "Failed to load chats. Please try again later." });
  }
});

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats", async (req, res) => {
  try {
    await connectToDatabase();
    let { from, to, msg } = req.body;
    let newChat = new Chat({
      from: from,
      to: to,
      msg: msg,
      created_at: new Date()
    });
    await newChat.save();
    console.log("Chat saved");
    res.redirect("/chats");
  } catch (err) {
    console.error("Error saving chat:", err);
    res.status(500).render("error.ejs", { error: "Failed to save chat. Please try again later." });
  }
});

app.get("/chats/:id/edit", async (req, res) => {
  try {
    await connectToDatabase();
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
  } catch (err) {
    console.error("Error fetching chat for edit:", err);
    res.status(500).render("error.ejs", { error: "Failed to load chat. Please try again later." });
  }
});

app.put("/chats/:id", async (req, res) => {
  try {
    await connectToDatabase();
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
      id, 
      {msg: newMsg}, 
      { runValidators: true, new: true }
    );
    console.log(updatedChat);
    res.redirect("/chats");
  } catch (err) {
    console.error("Error updating chat:", err);
    res.status(500).render("error.ejs", { error: "Failed to update chat. Please try again later." });
  }
});

app.delete("/chats/:id", async (req, res) => {
  try {
    await connectToDatabase();
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
  } catch (err) {
    console.error("Error deleting chat:", err);
    res.status(500).render("error.ejs", { error: "Failed to delete chat. Please try again later." });
  }
});

app.get('/', (req, res) => {
  res.render("home.ejs");
});

// Connect on startup to initialize the connection
connectToDatabase()
  .then(() => {
    console.log('Initial MongoDB connection established');
  })
  .catch(err => {
    console.error('Failed to establish initial MongoDB connection:', err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});