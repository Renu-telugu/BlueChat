# BlueChat

<div align="center">
  <img src="public/images/logo.png" alt="BlueChat Logo" width="100">
  <br>
  <h3>A simple, beautiful messaging application</h3>
</div>

## Overview

BlueChat is a lightweight messaging application built with Node.js, Express, MongoDB, and EJS templating. It features a clean, modern interface with a blue/teal color theme, allowing users to create, read, update, and delete messages in a familiar chat style environment.

## Features

- **Modern UI**: Clean, intuitive interface with responsive design
- **Real-Time Messaging**: Create and view messages instantly
- **CRUD Operations**: Full support for creating, reading, updating, and deleting messages
- **Mobile Responsive**: Works seamlessly across devices of all sizes
- **Confirmation Dialogs**: Prevents accidental message deletion

## Screenshots

<div align="center">
  <img src="screenshots/home.png" alt="Home Page" width="400">
  <img src="screenshots/chat.png" alt="Chat Page" width="400">
</div>

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Frontend**: EJS templates, CSS
- **UI Components**: Material Icons

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB

### Installation

1. **Clone the repository**

   ```
   git clone https://github.com/yourusername/bluechat.git
   cd bluechat
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Set up MongoDB**

   ```
   # Start MongoDB service
   mongod --dbpath /path/to/data/db
   ```

4. **Start the application**

   ```
   npm start
   ```

5. **Access the application**
   ```
   Open http://localhost:3000 in your browser
   ```

## Project Structure

```
bluechat/
├── models/            # Database models
│   └── chat.js        # Chat message schema
├── public/            # Static assets
│   ├── images/        # Images including logo
│   └── style.css      # CSS styling
├── views/             # EJS templates
│   ├── home.ejs       # Landing page
│   ├── index.ejs      # Messages list
│   ├── new.ejs        # Create message form
│   └── edit.ejs       # Edit message form
├── index.js           # Main application file
├── package.json       # Project dependencies
└── README.md          # Project documentation
```

## Future Enhancements

- User authentication and profiles
- Real-time messaging with Socket.io
- Message search functionality
- Media attachments
- Message reactions

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<div align="center">
  <p>Designed and developed with ❤️</p>
</div>
