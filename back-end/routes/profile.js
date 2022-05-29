const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');



router.get('/profile', auth.verifyToken, async (req, res) => {
   
    // i will just return a simple data here, you can try yourself to return data from the database

    res.send( { status: 1, data: {userName: 'rasyue', userWebsite: 'https://rasyue.com'} ,message: 'Successful'} )
});



module.exports = router;