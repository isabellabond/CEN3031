var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);

  /*
    Your request handler should send listingData in the JSON format as a response if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 
  */

  // check and see if GET request is sent to the '/listings' path
  if(parsedUrl.pathname == '/listings'){
    //send listingData as a response
    response.write(listingData);
    response.end();
  }
  // send a 404 error
  else{
    response.type('text/plain');
    response.status(404);
    response.write('404 error');
    response.end();
  }

};

// this is readinglistings.json
// either will send what is in this file to the function as data or produce an error err
fs.readFile('listings.json', 'utf8', function(err, data) {
  
  // check for errors
  // use err to check
  if(err){
    console.log('There was an error reading the listings.json file');
    return;
  }
  // save the sate in the listingData variable already defined
  // if there is no error then save the data in listingData
  else{
    listingData = data;
  }

  // create the server
  var server = http.createServer(requestHandler);

  // start the server
  server.listen(port, function() {
  	console.log('Server listening on: http://127.0.0.1:' + port);
  });

});
