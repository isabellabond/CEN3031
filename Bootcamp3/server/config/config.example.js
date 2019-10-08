//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: ''//place the URI of your mongo database here.
  }, 
  openCage: {
    key: '' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};

//4698173b178547ff84cf110b4de8582c