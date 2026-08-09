# 🎓 College Club Portal Pro

A modern full-stack college club management web application built to help students discover clubs, join communities, register for events, and manage their college activities through a centralized platform.

🌐 **Live Demo:** [College Club Portal Pro](https://college-club-portal-pro.vercel.app)

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

```text
src/
│
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
