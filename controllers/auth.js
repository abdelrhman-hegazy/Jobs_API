const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
// const jwt = require("jsonwebtoken");

// register
const register = async (req, res) => {
  const { name, username, password } = req.body;
  console.log(username);
  
  const checkUser = await User.find({username});
  console.log(checkUser.);
  
  if(!checkUser){
    throw new BadRequestError("This Email Used")
  }
  
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

// login
const login = (req, res) => {
  res.send("login");
};

module.exports = {
  register,
  login,
};
