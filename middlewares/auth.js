const isLogin = (req, res, next) => {
  if (req.cookies.user || req.session.user) {
    next();
  } else {
    req.flash("alertMessage", "Login First!!");
    req.flash("alertStatus", "danger");
    res.redirect("/admin/signin");
  }
};

module.exports = isLogin;
