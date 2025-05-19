# BlueChat

<div align="center">
  <img src="/public/images/logo.png" alt="BlueChat Logo" width="80">
  <h3>A simple, beautiful messaging application</h3>
</div>

## Overview

BlueChat is a lightweight messaging app built with Node.js, Express, MongoDB, and EJS. It lets users create, read, update, and delete messages with a clean, responsive interface.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Frontend**: EJS, CSS

## Getting Started

1. **Clone the repository**

   ```
   git clone https://github.com/yourusername/bluechat.git
   cd bluechat
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Start MongoDB**

   ```
   mongod
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

## License

This project is licensed under the MIT License.

---

<div align="center">
  <p>Designed and developed with ❤️</p>
</div>
