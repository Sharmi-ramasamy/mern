const db = require("../models");
const User = db.user;
const jwt=require("jsonwebtoken")
exports.userSignup = (req, res) => {

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the users.",
      });
    });
};

exports.getAllUsers = (req, res) => {
   User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

exports.findUserById = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then((data) => {
      if (!data) res.status(404).send({ message: "Not found user with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving user with id=" + id });
    });
};


exports.updateuserById = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update cannot be empty!",
    });
  }

  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update user with id=${id}. Maybe user was not found!`,
        });
      } else res.send({ message: "User was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating user with id=" + id,
      });
    });
};

exports.deleteUserById = (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete user with id=${id}. Maybe user was not found!`,
        });
      } else {
        res.send({
          message: "User was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete user with id=" + id,
      });
    });
};

exports.deleteAllUsers = (req, res) => {
  User.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} User were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all user.",
      });
    });
};

// exports.findByUsername = async (req,res) =>{
//   const {email, password} = req.query;
//   const validUser = await User.findOne({email,password});
//   if(validUser)
//   {
//     const userDetails = await User.find({email,password});
//     return res.json({valid:true,...userDetails});
//   }
//   return res.json({valid:false});
// }

exports.userLogin = async(req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email});
  // console.log("data", user);

  if(user && (await password == user.password)){
    const token=jwt.sign({email:user.email},"Secret",{expiresIn: '6h'});
    return res.json ({
      token:token,
      _id:user._id, 
      email:user.email,
      // password:user.password,
    })
  }
  else {
    return res.status(404).json({msg:"Invalid Data...!!"})
  }  
}

