const express = require('express');
const router = express.Router();

// import the mail controller .. 
const MailController = require('../controllers/MailController');


// index route .. 
router.route('/')
   // get request => display forms ..
     .get(MailController.DisplayTheMailerForms)
   // post request => send email then display result .. 
     .post(MailController.SendTheEmail);


module.exports = router ;