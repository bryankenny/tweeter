// use renderTweets function to loop through tweets in the data object and return/render them as we go through
// use .append to append the addeed class, added with .addClass, to the html element specified as a paramter to .append
// I found the logic for the time counter from stack overflow and changed it to be applicable to this program
// take out the values we used to hardcode the weet from befor andreplace it with the information from within the tweetData database
// use .attr to get the value of an attribute for the first element in the set of matched elements
// use .append to append each relavent html element and its children to $enterTweet
// using the .text jquery function automatically "escapes" the characters so the code is more secure

function createTweetElement(tweet) {

let $enterTweet = $("<article></article>").addClass("tweet-container");

   let $header = $("<header></header>");
   $enterTweet.append($header);

   $header.append($("<img/>").addClass("avatar").attr( "src", tweet["user"]["avatars"]["large"] ));
   $header.append($("<span></span>").addClass("username").text(tweet["user"]["name"]));
   $header.append($("<span></span>").addClass("handle").text(tweet["user"]["handle"]));

   let $tweetBody = $("<div></div>").addClass("tweet-body");
   $enterTweet.append($tweetBody);

   $tweetBody.append($("<p></p>").text(tweet["content"]["text"]));


   let $footer = $("<footer></footer");
   $enterTweet.append($footer);

   //this function below helps dtermine how long ago a tweet was tweeted. I found the logic on stack overflow and changed it to be applicable here

   let currentTime = new Date(Date.now());
   let createTime = new Date(tweet["created_at"]);
   let timeAgo = Math.floor((currentTime - createTime) / 1000);

   if (timeAgo < 60) {
     $footer.append($("<p></p>").text(timeAgo + " seconds ago"));

   } else if (timeAgo < 3600) {
     $footer.append($("<p></p>").text(Math.floor(timeAgo/60) + " minutes ago"));

   } else if (timeAgo < (3600 * 24)) {
     $footer.append($("<p></p>").text(Math.floor(timeAgo/3600) + " hours ago"));

   } else if (timeAgo < (3600 * 24 * 7)) {
     $footer.append($("<p></p>").text(Math.floor(timeAgo/3600/24) + " days ago"));

   } else {
     $footer.append($("<p></p>").text(createTime.toDateString()));
   }

   let $iconset = $("<span></span>").addClass("iconset");
   $footer.append($iconset);

    $iconset.append($("<img/>").attr("src", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8HBhAPBxAQDw8PEA8NDhARDQ8NDRAQFxEWFxUdFRUYHCggGholGxMTITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dFRktKysrKystKystLSwrKysrNys3LS0rKy0tKy0tKys3NzcrKystKys3LSsrKysrKysrK//AABEIAKcBLgMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAAAQMEBQYHAv/EADMQAQACAQMBBAgFBAMAAAAAAAABAgMEBREhBhIxQRMiUVJhcYHRFCNikbEkcqHBFRYy/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABkRAQEBAQEBAAAAAAAAAAAAAAABEQISIf/aAAwDAQACEQMRAD8A7gAqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMfuG9afb+me8d73Y6yIyA12vbDTzbrW8R7eI4ZfQ7nh19f6W8W+HhP7Bq7AFBYbhvGDb+movHPux1li/wDuGn73Wt4j28RwYmtjFnoN0w6+v9LeJnzjwmF4AAKAAAAAAAAAAAAAAAAAAAAAAAAA8Zr+jxTafKJkGu9qt9nRx6HST+ZaPWt7sfdpNp70zNpmZnrMz1mVXV551Wqvkv42tMz+6i6SY5W6fN7wZbYMsWw2mto8Jh4SrLf+zW9xuWHuZ+Iy18fZaPbC17UdoPwnOHRz+ZMevb3Y+7TtLqL6XPGTBPFq+EvGS85ck2yTza096Z+LPn616+Itab2mbzzM9ZmZ5mUJGmXrFkthyxbDM1tHWJhv/Zref+T0/dy9MtOO9+qPbDnq/wBi1U6Pdcdqz0m3dt8pTqa1LjpoRPMdBzdQAAAAAAAAAAAAAAAAAAAAAAABbbnHe0GSI9yVy85K9/HMT5xMf4Eclj7/AMitrMM6bWXx28a2mFF1ckggRKBIIAAVdLHOrx93x71VNkOz+m/E7xiiPK3fn5QVY6TjjjHHPsj+HoHJ2AAAAAAAAAAAAAAAAAAAAAAAAAAaR212/wBDq65qR6t/Vt/c1p1HdNFXcNFfHfzjp8J8nM9TgtpdRbHm6WrPEt81y6ikCWmUAAAANx7D6Du4rZ8kf+p7tPl5tZ2vQ23HW1x4/CZ5tPlFfN0zTYK6bT1pijiKxFY+jPVb5iqAw6AAAAAAAAAAAAAAAAAAAAAAAAAADXu1OyfjsXpdPH5tI6/qr92wglmuST0nr0nzhDc+03Z30/ObQx6/jenvfGPi02Y4txaJiY6THm6S65WYIEqiHvHjtlyRXHEza08REIx0tlyRXFE2tPhERzLe+zewRt1PSanic1o+lI+CW4smrns7tEbXpPW65L9bz/qGWBzdZAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAYLfOzmPcOb4OKZfbx6tvmzoJZrlut27NocnGppMfqiOaz9VTb9pz7heIwUmK+dpjivDpl6Rkji8RMfGOU1rFI4rERHsiOIa9M+GK2XYse105j18k+N5jr9GWBlqQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q=="));
    $iconset.append($("<img/>").attr("src", "https://maxcdn.icons8.com/app/uploads/2016/10/retweet.png"));
    $iconset.append($("<img/>").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-h4ZR9l3cqG7dfrKqR1mpV1e-vImi3ggtpOAmFOgYKAIYOODhdA"));

  return $enterTweet;
}

function renderTweets(tweetList) {
   $('article').remove();
   for (var i = tweetList.length-1; i >= 0; i--) {
    $('.tweet-list').append(createTweetElement(tweetList[i]));
  }
}

 $(document).ready( function() {
   $.ajax( {
    url: '/tweets',                          // makes a GET request to /tweets
    method: 'GET',                           // success: function passes in the object to cb
    success: function(obj) {                 // then we call render tweets to render the passedin object(tweet)
      renderTweets(obj);
    }
  });
});
