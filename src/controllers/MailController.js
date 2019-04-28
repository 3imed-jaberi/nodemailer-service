 
"use strict";


require('dotenv').config();


const MailController = {};


// render the index page with forms .. 

MailController.DisplayTheMailerForms = (req,res) => {
  res.render('index',{title:process.env.TITLE, displayForms : true , result:true});          
}

// send the email then render the result .. 

MailController.SendTheEmail = async (req,res,next) => {
  // import modules .. 
  const nodemailer = require("nodemailer");
  const ConfigOpts = require("../config/config");  


  try {
        // put the personal data here .. 
        ConfigOpts.Setup.auth.user = req.body.from ; 
        ConfigOpts.Setup.auth.pass = req.body.password ; 
        
        // create the transporter with his configuration .. 
          let transporter = nodemailer.createTransport(ConfigOpts.Setup);
        //get all data from the froms request .. 
          ConfigOpts.ClientData.from = req.body.from ;
          ConfigOpts.ClientData.to = req.body.to ;
          ConfigOpts.ClientData.subject = req.body.subject ;
          ConfigOpts.ClientData.text = req.body.message ;
        // send the email .. 
        let result = await transporter.sendMail(ConfigOpts.ClientData) ; 
              // display the result of the sending .. 
                console.log(result);
          // response request .. 
          res.render('index',{title:process.env.TITLE ,displayForms : false });     
      }catch(error){
          res.render('index',{title:process.env.TITLE ,displayForms : true , result: false});     
  };

};

module.exports = MailController ;






