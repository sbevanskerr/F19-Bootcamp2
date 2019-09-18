/* Add all the required libraries*/

/* Connect to your database using mongoose - remember to keep your key secret*/

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

mongoose.connect(config.db.uri);


var findLibraryWest = function () {
    /* 
      Find the document that contains data corresponding to Library West,
      then log it to the console. 
     */
    Listing.find({ code: 'LBW' }, function (err, Listing) {
        if (err) throw err;

        console.log(Listing);
    });
};
var removeCable = function () {
    /*
      Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
      on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
      and remove this listing from your database and log the document to the console. 
     */
    Listing.find({ code: 'CABL' }, function (err, Listing) {
        if (err) throw err;


       

        }).remove(function (err) {
            if (err) throw err;

            console.log(Listing);
    });
};
var updatePhelpsLab = function () {
    /*
      Phelps Lab address is incorrect. Find the listing, update it, and then 
      log the updated document to the console. 
      
      Correct Address: 1953 Museum Rd, Gainesville, FL 32603
  
     */

    Listing.findOneAndUpdate({ address : '701 N Broadway, Sleepy Hollow, NY 10591, United States' }, { address : '1953 Museum Rd, Gainesville, FL 32603' }, function (err, Listing) {
        if (err) throw err;

        console.log(Listing);
    });

   
};
        var retrieveAllListings = function () {
            /* 
              Retrieve all listings in the database, and log them to the console. 
             */
            // get all the users
            Listing.find({}, function (err, Listing) {
                if (err) throw err;

                // object of all the users
                console.log(Listing);
            });
        };

        findLibraryWest();
        removeCable();
        updatePhelpsLab();
        retrieveAllListings();
