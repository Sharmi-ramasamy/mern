const jwt = require("jsonwebtoken");
require("dotenv").config()

function authenticate(req,res,next){
    const token=req.headers.authorization
    // console.log("done",jwt.decode(token))
    jwt.verify(token,"Secret",(err,response) => {
        if(err) {
            res.status(401).send("Unauthorized");
        }
        else {
        next()
        }
    })
}

module.exports=authenticate;