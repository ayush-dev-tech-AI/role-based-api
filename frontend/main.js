const BASE_URL = "http://localhost:3000";

// AUTO REDIRECT
const role = localStorage.getItem("role");
if (window.location.pathname.includes("index")) {
  if (role === "admin") window.location.href = "admin.html";
  if (role === "user") window.location.href = "dashboard.html";
}

// LOGIN
async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();

  if (!data.username) {
    document.getElementById("msg").innerText = "Invalid credentials ❌";
    return;
  }

  localStorage.setItem("username", data.username);
  localStorage.setItem("role", data.role);

  if (data.role === "admin") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "dashboard.html";
  }
}

// PROFILE
async function loadProfile() {
  const username = localStorage.getItem("username");

  const res = await fetch(`${BASE_URL}/profile`, {
    headers: { username }
  });

  const data = await res.json();

  document.getElementById("info").innerText =
    `Welcome ${data.username} (Role: ${data.role})`;
}

// ADMIN PANEL
async function loadAdmin() {
  const username = localStorage.getItem("username");

  const res = await fetch(`${BASE_URL}/admin`, {
    headers: { username }
  });

  const text = await res.text();

  document.getElementById("adminData").innerText = text;
}

// LOGOUT
function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

// AUTO LOAD
if (window.location.pathname.includes("dashboard")) {
  loadProfile();
}

if (window.location.pathname.includes("admin")) {
  loadAdmin();
}