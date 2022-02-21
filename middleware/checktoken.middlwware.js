const jwt = require("jsonwebtoken");
checkToken = (req, res, next) => {
  if (req.headers.token) {
    let token = req.headers.token
    
    jwt.verify(token, 'secret', (err, decoded) => {
       
      if(err){
        res.send({error:true, message:"Invalid user token"})
      }else{
       req.user=decoded;
      // console.log(decoded) 
          next();
      } 
    })

  } else {
    res.send({ message: 'token missing' })
  }
}

module.exports = checkToken;