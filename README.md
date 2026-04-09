# 🚀 RBAC Demo System (Role-Based Access Control)

A simple yet powerful Role-Based Access Control (RBAC) system built using Node.js, Express, and a lightweight frontend.

---

## 🧠 Features

* 🔐 User Authentication (Login System)
* 👑 Role-Based Authorization (Admin & User)
* 🚫 Protected Admin Routes
* 🌐 Interactive Frontend (HTML, CSS, JS)
* ⚡ Lightweight & Fast (No heavy frameworks)

---

## ⚙️ Tech Stack

* Backend: Node.js, Express
* Frontend: HTML, CSS, JavaScript
* Data: In-memory (Demo purpose)

---

## 📁 Project Structure

```
rbac-demo/
│
├── backend/
│   ├── server.js
│   ├── middleware.js
│   └── data.js
│
├── frontend/
│   ├── index.html
│   ├── dashboard.html
│   ├── admin.html
│   └── main.js
│
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Install dependencies

```
npm install
```

### 2. Run server

```
node backend/server.js
```

### 3. Open frontend

Open `frontend/index.html` in browser

---

## 🔑 Demo Credentials

| Role  | Username | Password |
| ----- | -------- | -------- |
| Admin | admin    | 456      |
| User  | user     | 123      |

---

## 🔐 How It Works

1. User logs in
2. Server verifies credentials
3. Role is returned (admin/user)
4. Frontend redirects accordingly
5. Middleware protects routes based on role

---

## 🎯 API Endpoints

* GET /login → Authenticate user
* GET /profile → Get user info
* GET /admin → Admin-only access

---

## 🧪 Demo Flow

1. Login as user → Access dashboard
2. Try admin route → Access denied
3. Login as admin → Access admin panel

---

## 🧠 Learning Outcomes

* Authentication vs Authorization
* Middleware usage in Express
* Role-Based Access Control (RBAC)
* Client-server interaction

---

## ⚡ Future Improvements

* JWT Authentication
* MongoDB integration
* Password hashing (bcrypt)
* Advanced role hierarchy

---

## 🎯 Purpose

This project demonstrates core backend concepts in a simple and understandable way, focusing on security and system design.

---

## 👨‍💻 Author

Built as a backend learning project with focus on real-world architecture concepts.

---

## ⚡ Final Note

This is a demo system designed for learning and presentation purposes. It can be extended into a full production-ready application.
