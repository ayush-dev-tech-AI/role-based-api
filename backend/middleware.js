function auth(req, res, next) {
  const username = req.headers.username;

  const user = req.app.locals.users.find(
    u => u.username === username
  );

  if (!user) {
    return res.send("Unauthorized ❌");
  }

  req.user = user;
  next();
}

function adminOnly(req, res, next) {
  if (req.user.role !== "admin") {
    return res.send("Access denied 🚫");
  }
  next();
}

module.exports = { auth, adminOnly };