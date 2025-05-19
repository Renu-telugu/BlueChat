require('dotenv').config();
const mongoose = require('mongoose');
const Chat = require('./models/chat');

// Set the MongoDB URI - replace with your actual connection string
const MONGODB_URI = 'mongodb+srv://telugurenuka40:renu2005@cluster0.uae7tsf.mongodb.net/whatsapp?retryWrites=true&w=majority';

async function testConnection() {
  console.log('Starting MongoDB connection test...');
  
  try {
    // Connection options
    const options = {
      serverSelectionTimeoutMS: 60000,
      socketTimeoutMS: 60000,
      family: 4
    };
    
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI, options);
    console.log('Successfully connected to MongoDB');
    
    // Try to fetch chats
    console.log('Attempting to fetch chats...');
    const chats = await Chat.find();
    console.log(`Found ${chats.length} chats:`);
    console.log(JSON.stringify(chats, null, 2));
    
    // Create a test chat if none exists
    if (chats.length === 0) {
      console.log('No chats found, creating a test chat...');
      const newChat = new Chat({
        from: 'Test User',
        to: 'Another User',
        msg: 'This is a test message',
        created_at: new Date()
      });
      
      await newChat.save();
      console.log('Test chat created successfully');
      
      // Fetch again to verify
      const updatedChats = await Chat.find();
      console.log(`Now there are ${updatedChats.length} chats`);
    }
    
  } catch (error) {
    console.error('Error during test:', error);
  } finally {
    // Close the connection
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
}

testConnection(); 