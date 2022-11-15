//setup variable to route back to the login page if not logged in
const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
