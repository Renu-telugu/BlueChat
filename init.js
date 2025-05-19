const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

main()
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/whatsapp');
}

let allChats = [
    {
        from: 'John',
        to: 'Doe',
        msg: 'Hello Doe',
        created_at: new Date()
    },
    {
        from: 'amit',
        to: 'rani',
        msg: 'bring me some fruits',
        created_at: new Date()
    },
    {
        from: 'karan',
        to: 'priya',
        msg: 'hi priya, how are you?',
        created_at: new Date()
    },
    {
        from: 'tony',
        to: 'peter',
        msg: 'hey peter, are you coming to the party?',
        created_at: new Date()
    },
    {
        from: 'kiran',
        to: 'nidhi',
        msg: 'send me the report',
        created_at: new Date()
    }
];

Chat.insertMany(allChats);