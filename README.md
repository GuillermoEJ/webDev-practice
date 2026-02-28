# User Manager - MERN Stack

A practice project to learn how to build full-stack web applications with **MongoDB, Express, React, and Node.js**.

A simple yet functional app where you can create, view, and delete users. It's my first serious MERN project and I'm proud to showcase it.

## Stack & Technologies

**Frontend:**
- React 18 (hooks, local state)
- Axios (HTTP requests)
- CSS3 (responsive design)

**Backend:**
- Node.js + Express.js
- MongoDB + Mongoose (ODM)
- CORS (frontend-backend communication)
- Nodemon (development)

## How to Run

**Backend:**
```bash
cd server
npm install
npm start
```
Runs on `http://localhost:3001`

**Frontend:**
```bash
cd client
npm install
npm start
```
Opens on `http://localhost:3000`

## Project Structure

```
├── client/
│   └── src/
│       ├── components/        # UserForm, UserList, UserItem
│       ├── App.js
│       └── App.css
└── server/
    ├── models/
    │   └── Users.js           # Mongoose Schema
    └── index.js               # Routes & Server
```

## What I Learned

- Connecting frontend and backend with axios
- Creating schemas with Mongoose and MongoDB
- Form data validation (client-side)
- How React hooks work (useState, useEffect)
- Basic HTTP routes (GET, POST, DELETE)
- Modern CSS styling with gradients and hover effects
- Building reusable components in React

## Features

- Create users (name, age, username)
- View all users in a list
- Delete users with confirmation
- Form data validation
