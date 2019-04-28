
const ConfigOpts = {} ; 

// setup information for nodemailer stmp server .. 
ConfigOpts.Setup = {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    service: 'gmail',
    auth: {
      user: '', 
      pass: '' 
    }
};

// all client data model ..
ConfigOpts.ClientData = {
    from: '', // sender address
    to: '', // list of receivers
    subject: '', // Subject line
    text: '', // plain text body
   // html: '' // html body
};


module.exports = ConfigOpts ;