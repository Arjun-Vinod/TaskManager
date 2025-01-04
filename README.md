# Task Manager Application

A simple Task Manager application that allows users to manage their tasks effectively. The app is built using React for the frontend, Node.js/Express for the backend, and MongoDB for the database.

---

## Features

- **View Tasks**: Display a list of all tasks with their statuses (completed or pending).
- **Add Tasks**: Form to create new tasks.
- **Edit Tasks**: Update task details (title, description, status).
- **Delete Tasks**: Remove tasks from the list.
- **Filter Tasks**: View tasks by completion status (e.g., completed, pending).

---

## Setup

### Prerequisites

- **Node.js** and **npm** installed.
- **MongoDB Atlas account** or a local MongoDB server.

---

### Backend Setup


- Navigate to the backend folder
cd backend

- Install dependencies
npm install

-Create a .env file and configure it
echo "MONGO_URI=<Your MongoDB Connection String>" >> .env
echo "PORT=5000" >> .env

-Start the backend server
npm start

---

### Frontend Setup

* Navigate to the frontend folder
cd ../frontend

* Install dependencies
npm install

* Start the React app
npm start

---

###Deployement

#Backend Deployment
-Deploy to Render or Heroku.
#Frontend Deployment
-Deploy to Netlify or Vercel.


