# 🚀 Role-Based Access Control API

A scalable and modular REST API implementing Role-Based Access Control (RBAC) using Node.js, Express, and SQLite.

---

## 🧠 Features

* 🔐 JWT-based Authentication
* 👑 Role-Based Authorization (Admin & User)
* 📦 Modular Architecture (MVC + Middleware)
* 🔎 Search Users (username, email, role)
* 🛡️ Protected Routes
* ⚡ Clean and Scalable Structure

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* SQLite
* JWT (jsonwebtoken)
* bcrypt

---

## 📁 Project Structure

```
role-based-api/
│
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── utils/
├── database/
├── app.js
└── server.js
```

---

## 🔐 Authentication Flow

1. User registers or logs in
2. Server generates JWT token
3. Token is sent in request headers
4. Middleware verifies token
5. Role middleware checks access

---

## 🚪 API Endpoints

### Auth Routes

* POST /auth/register
* POST /auth/login

### User Routes

* GET /users/profile
* GET /users/search?q=
* GET /users/all (Admin only)

---

## 🧪 Testing

Use Postman or Thunder Client:

```
Authorization: Bearer <your_token>
```

---

## 🛡️ Role System

| Role  | Access Level   |
| ----- | -------------- |
| Admin | Full access    |
| User  | Limited access |

---

## 🚀 Getting Started

```bash
npm install
node server.js
```

---

## 🧠 Architecture

```
Client → Routes → Middleware → Controller → Service → Model → Database
```

---

## 🌟 Future Improvements

* Database migration (MongoDB / PostgreSQL)
* Refresh tokens
* Rate limiting
* Advanced logging
* Role hierarchy (Admin, Moderator, User)

---

## 👨‍💻 Authors

* Backend Architecture & Security
* API Development & Testing

---

## 🎯 Purpose

This project demonstrates real-world backend design patterns including authentication, authorization, and scalable API structuring.

---

## ⚡ Final Note

This is not just an API — it's a foundation for building production-ready backend systems.
