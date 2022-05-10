const { User } = require('../models/users.model');

const signup = async (req, res) => {
  
  try {
    const {name, password} = req.body
    const newUser= await User.create({name, password})

    res.status(201).json({
      status: "sucess!",
      newUser
    });

  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const {name, password} = req.body

    const user = await User.findOne({where: {name, password}})

    if(!user){
      res.status(401).json({
        status: "Name or password invalid"
      });
    }
    res.status(201).json({
       user
    });
  } catch (error) {
    console.log(error);
  }
};




module.exports = {
  signup,
  login
};
