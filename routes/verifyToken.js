const jwt = require('jsonwebtoken');

//Middleware function
module.exports = function auth(req,res,next) { 
    const token = req.header('auth-token');
    //401 is resource not available
    if(!token) return res.status(401).json({error:'Access denied!!'});

    try{
        //here we get our payload back
        const verified = jwt.verify(token,'blabla');
      //sending the payload(user id) with the request so i can access it directly from my request when ever i want it after i logged the user in
       req.something = verified;

        next();
    }catch(err){
        res.status(400).json({msg:'Invalid Token'});
    }
    
}