# 🩸 Blood Bank Management System (MERN Stack)

## 📌 Overview

The **Blood Bank Management System** is a web-based MERN stack application designed to simplify blood donation and management.
It allows **admins, hospitals, and donors** to efficiently handle blood inventory, donations, and requests in real time.

---

## 🚀 Tech Stack

| Layer               | Technology                                            |
| ------------------- | ----------------------------------------------------- |
| **Frontend**        | React.js, HTML5, CSS3, JavaScript, Bootstrap/Tailwind |
| **Backend**         | Node.js, Express.js                                   |
| **Database**        | MongoDB (Mongoose ORM)                                |
| **Version Control** | Git & GitHub                                          |
| **Tools**           | VS Code, Postman, npm                                 |

---

## ✨ Features

### 👤 User Features

* Register/Login as **Donor**, **Hospital**, or **Organization**
* Request or donate blood units
* View available blood groups
* Update personal information

### 🏥 Admin Features

* Manage donors, hospitals, and organizations
* View all transactions and requests
* Monitor blood stock levels in real time

### 💉 Blood Management

* Add and update blood inventory
* View donation and request history
* Track blood availability per group (A+, O-, etc.)

---

## 🧩 Folder Structure

```
Blood-Bank-Mern-Stack-Project/
│
├── backend/              # Express server files
│   ├── config/           # Database connection
│   ├── controllers/      # Business logic
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   └── server.js         # Main server file
│
├── frontend/             # React app
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.js
│       └── index.js
│
├── .env                  # Environment variables
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 🔧 Prerequisites

* Node.js and npm installed
* MongoDB running locally or on Atlas

### 🪜 Steps

```bash
# Clone the repository
git clone https://github.com/Krishna-201/Blood-Bank-Management-System.git

# Navigate into the project folder
cd Blood-Bank-Mern-Stack-Project

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Create .env file in backend folder and add:
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key

# Run backend
cd ../backend
npm start

# Run frontend
cd ../frontend
npm start
```

Then open:
👉 **Frontend:** [http://localhost:3000](http://localhost:3000)
👉 **Backend API:** [http://localhost:5000](http://localhost:5000)

## 🤝 Contributing

Contributions are welcome!
If you’d like to improve the system or fix a bug:

1. Fork the repo
2. Create a new branch (`feature/new-feature`)
3. Commit your changes
4. Push and create a pull request







