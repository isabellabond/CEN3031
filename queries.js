/* Add all the required libraries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database using mongoose - remember to keep your key secret*/

mongoose.connect(config.db.uri, {useNewUrlParser: true});

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  // finding a listing with the name Library West and logging it to the console
  Listing.findOne({ name: 'Library West' }, function (err, listing) {console.log(listing)});

};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */

   // find the listing with the code CABL, delete it, and log it
  Listing.findOneAndDelete({ code: 'CABL' }, function (err, listing) {console.log(listing)});

};
var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
    
    Correct Address: 1953 Museum Rd, Gainesville, FL 32603

   */

   // find where the listing Phleps Lab is and update the address associated with it, then log it to the console
  var query = { name: 'Phelps Lab' };
  Listing.findOneAndUpdate(query, { address: '1953 Museum Rd, Gainesville, FL 32603' }, function (err, listing) {console.log(listing)});
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  
   // using the find function without specifying something to find to return all of the listings
   Listing.find({}, function (err, listing) {console.log(listing)});

};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
