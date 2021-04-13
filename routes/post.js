const router = require('express').Router();
const user = require('../model/user');
const verify = require('./verifyToken')

router.get('/',verify,(req,res) => {
    // res.json({post: {title:'my first post',description:'some randome private data'}})

    //accessing the user id from the payload, this data was sent from the middleware
    res.send(req.something);
    //getting the id from the data sent by the middleware(req.something) and querying the database for that user
    user.findOne( {_id:req.something});
});


module.exports = router;