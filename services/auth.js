const jwt = require('jsonwebtoken');
const secretKey = 'secretKey@135';

function setUser(user) {
  return jwt.sign({
    id : user._id,
    email : user.email,
  }, secretKey);
}

function getUser(token) {
  if(!token) return null;
  try{
    return jwt.verify(token , secretKey);
  } catch (error){
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};