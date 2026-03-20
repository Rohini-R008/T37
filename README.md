# Workout Buddy (MERN Stack)

This is a simple Workout Tracker application built using the MERN stack (MongoDB, Express, React, Node.js).

## Features

* Add a new workout (title, load, reps)
* View all workouts
* Delete workouts
* Shows time since workout was created
* Responsive UI (works on mobile and desktop)

## Tech Stack

* Frontend: React (Context + useReducer)
* Backend: Node.js + Express
* Database: MongoDB Atlas

## Folder Structure

```
workout-buddy/
  ├── backend/
  ├── frontend/
```

## How to Run

### Backend

```
cd backend
npm install
node server.js
```

### Frontend

```
cd frontend
npm install
npm start
```

## API Endpoints

* GET /api/workouts
* POST /api/workouts
* DELETE /api/workouts/:id

## Notes

* Backend runs on port 5000
* Frontend runs on port 3000
* MongoDB Atlas is used for database
