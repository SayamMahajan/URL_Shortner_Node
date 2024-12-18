const { getUser } = require('../services/auth');

async function validateUUid(req, res, next){
  const userUid = req.cookies?.token;
  if (!userUid) return res.redirect('/login');
  const user = getUser(userUid);

  if (!user) return res.redirect('/login');

  req.user = user;
  next();
}

async function checkAuth(req, res, next){
  const userUid = req.cookies?.token;
  const user = getUser(userUid);
  req.user = user;
  next();
}

module.exports = {
  validateUUid,
  checkAuth,
}