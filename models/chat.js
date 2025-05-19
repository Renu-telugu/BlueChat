const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    from : {
        type: String,
        required: true,
    },
    to : {
        type: String,
        required: true,
    },
    msg: {
        type: String,
        maxLength: 50,
    },
    created_at: {
        type: Date,
        required: true,
    }
});

// Explicitly set the collection name to match what's in MongoDB Atlas
const Chat = mongoose.model('Chat', chatSchema, 'chats');

module.exports = Chat;