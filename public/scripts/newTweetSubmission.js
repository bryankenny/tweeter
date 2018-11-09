 console.log("I am submit-tweet.js");
 console.log(this);

  $(document).ready( function() {
  $('#nav-bar').on('click', '.compose', function() {
  $('.new-tweet').slideToggle();
  $('.new-tweet').find('textarea').select();
});

  $('.new-tweet').on('submit', 'form', function(event) {
    event.preventDefault();
    let userTweet = $(this).find('textarea').val();

// above we are defining userTweet as the value of what is being submitted into the new-tweet text-area box
// above that we are calling the slideToggle function on the form with the .compose class when it is clicked

        if (!userTweet) {
         $(this).find('.userTweetForm').text("Empty Tweet!").addClass("error-form");
         return;

      } else if (userTweet.length > 140) {
         $(this).find('.userTweetForm').text("Too Many Characters").addClass("error-form");
         return;
      }

  $(this).find('.userTweetForm').text("Tweet'd!").addClass("working-form");

//in the event of too many characters or an empty text field we will change the html elements class so we can appropriately style it to make the error clear

    $.ajax({
      url: '/tweets/',
      data: $(this).serialize(),
      method: 'POST',
      success: function () {
         console.log('tweet submit OK');
    $.ajax( {
      url: '/tweets',
      method: 'GET',
      success: function(obj) {
      renderTweets(obj);
          }
        });
      }
    });
    $(this).find('textarea').val("");
    $(this).find('textarea').trigger('input');
  });
 });

 // look into complete/ turning ajax into a function
 //in this context this is referring to to <form action = "/tweets" method=POST></form>
 // event.preventDefault prevents the default action of whichever event the method is being called on
 // .find = Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
 // .val = Get the current value of the first element in the set of matched elements or set the value of every matched element. in this context, current value of the current object in /tweets, represented by this
 // the .ajax logic is uded to perform an asynchronous http request, so we can do things like have new elements load on a page without it reloading
 // The .serialize() method creates a text string in standard URL-encoded notation. It can act on a jQuery object that has selected individual form controls. its purpose here is to save the state of an object so it can be recreated when needed.
 // In this case we are serializing the json data that is being referenced iby this, which is the array of tweet objects found at /tweets
 //ewe
