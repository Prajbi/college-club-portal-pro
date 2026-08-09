# 🎓 College Club Portal Pro

A modern full-stack college club management web application built to help students discover clubs, join communities, register for events, and manage their college activities through a centralized platform.

🌐 **Live Demo:** https://college-club-portal-pro.vercel.app

---

## 🚀 Features

### 🔐 Authentication

- Student registration and login using Firebase Authentication
- Protected routes for authenticated users
- Secure logout functionality

### 👥 Club Management

- Browse available college clubs
- Join clubs with a single click
- Joined club data stored in Cloud Firestore
- Joined status persists after refresh

### 🎉 Event Management

- View upcoming college events
- Register for events
- Track event registrations

### 📊 Student Dashboard

- View joined clubs
- Track registered events
- Track certificates and participation

### 👨‍💼 Admin Dashboard

- Admin dashboard interface
- Club management section
- Event creation section
- Attendance reporting section

### 📷 Additional Modules

- QR-based attendance module
- Certificate section
- Notification center
- Responsive navigation and sidebar

---

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- Tailwind CSS
- React Icons

### Backend & Database

- Firebase Authentication
- Cloud Firestore

### Deployment & Tools

- Git
- GitHub
- Vercel
- Firebase Console
- VS Code

---

## 📂 Project Structure

src/
├── components/
│   ├── Navbar.js
│   ├── Sidebar.js
│   ├── ClubCard.js
│   ├── EventCard.js
│   ├── ProtectedRoute.js
│   └── QRGenerator.js
│
├── context/
│   └── AuthContext.js
│
├── pages/
│   ├── Home.js
│   ├── Login.js
│   ├── Register.js
│   ├── ClubListing.js
│   ├── EventsPage.js
│   ├── StudentDashboard.js
│   ├── AdminDashboard.js
│   ├── Certificates.js
│   ├── Notifications.js
│   └── QRAttendance.js
│
├── services/
│   └── firebase.js
│
├── App.js
└── index.js

---

## ⚙️ Installation

### 1. Clone the repository

git clone https://github.com/Prajbi/college-club-portal-pro.git

### 2. Navigate to the project

cd college-club-portal-pro

### 3. Install dependencies

npm install

### 4. Start the application

npm start

The application will run locally at:

http://localhost:3000

---

## 🔥 Firebase Integration

This project uses Firebase for:

- 🔐 User Authentication
- ☁️ Cloud Firestore database
- 👥 Persistent club membership data

Firebase configuration is available in:

src/services/firebase.js

---

## 🌐 Deployment

The application is deployed on Vercel.

**Live Application:** https://college-club-portal-pro.vercel.app

Every new push to the `main` branch can trigger a new deployment.

---

## 🎯 Future Improvements

- 🔒 Role-based authentication
- 🔔 Real-time notifications
- 📊 Event analytics
- 🏆 Automatic certificate generation
- 📈 Advanced admin reports
- 📱 Further mobile UI improvements
- 🗓️ Admin event creation with Firestore
- 📷 Fully functional QR attendance tracking

---

## 👨‍💻 Developer

**Prajwal Biradar**

AI & ML Engineering Student

---

## ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub!
