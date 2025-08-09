function restricToLoggedinUserOnly(req, res, next) {
  console.log('Auth middleware called');
  
  if (!req.cookies || !req.cookies.uid) {
    console.log('No session found, redirecting to login');
    return res.redirect('/login');
  }

  console.log('Session found, allowing access');
  next();
}

module.exports = restricToLoggedinUserOnly;