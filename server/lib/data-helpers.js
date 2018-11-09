// saveTweet was modified to use insertOne so that new tweets are logged into the mongo database
// took away async delay simulation because mongo does real async
// using .find() to get tweets upon submission

"use strict";

module.exports = function makeDataHelpers(db, collection) {
  return {

    // Saves a tweet to the given db and collection
    saveTweet: function(newTweet, callback) {

      db.collection(collection).insertOne(newTweet, callback);
    },
     // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {

      db.collection(collection).find().sort("created_at", 1).toArray(callback);
    }
   };
};

