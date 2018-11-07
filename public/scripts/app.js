const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function renderTweets(tweetsList) {
   for (var i = 0; i < tweetList.length; i++) {
    return renderTweets;
   }
}

// use renderTweets function to loop through tweets in the data object and return/render them as we go through
// use .append to append the addeed class, added with .addClass, to the html element specified as a paramter to .append
//


function createTweetElement() {

  let $newTweet = $("<article></article>").addClass("tweet-container");

  let $header = $("<header></header>");
    $newTweet.append($header);
    $header.append($("<img/>").addClass("avatar").attr("src", "https://r.hswstatic.com/w_907/gif/tesla-cat.jpg"));
    $header.append($("<span></span>").addClass("username").text("BK KILLA"));
    $header.append($("<span></span>").addClass("handle").text("@bryguy"));

  let $tweetBody = $("<div></div>").addClass("tweet-body");
    $newTweet.append($tweetBody);
    $tweetBody.append($("<p></p>").text("Bryan kenny is a verycool guy, all the example tweets say so"));

  let $footer = $("<footer></footer");
    $newTweet.append($footer);
    $footer.append($("<p></p>").text("1000000000 years ago"));


  let $iconset = $("<span></span>").addClass("iconset")
    $footer.append($iconset);
    $iconset.append($("<img/>").attr("src", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8HBhAPBxAQDw8PEA8NDhARDQ8NDRAQFxEWFxUdFRUYHCggGholGxMTITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dFRktKysrKystKystLSwrKysrNys3LS0rKy0tKy0tKys3NzcrKystKys3LSsrKysrKysrK//AABEIAKcBLgMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAAAQMEBQYHAv/EADMQAQACAQMBBAgFBAMAAAAAAAABAgMEBREhBhIxQRMiUVJhcYHRFCNikbEkcqHBFRYy/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABkRAQEBAQEBAAAAAAAAAAAAAAABEQISIf/aAAwDAQACEQMRAD8A7gAqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMfuG9afb+me8d73Y6yIyA12vbDTzbrW8R7eI4ZfQ7nh19f6W8W+HhP7Bq7AFBYbhvGDb+movHPux1li/wDuGn73Wt4j28RwYmtjFnoN0w6+v9LeJnzjwmF4AAKAAAAAAAAAAAAAAAAAAAAAAAAA8Zr+jxTafKJkGu9qt9nRx6HST+ZaPWt7sfdpNp70zNpmZnrMz1mVXV551Wqvkv42tMz+6i6SY5W6fN7wZbYMsWw2mto8Jh4SrLf+zW9xuWHuZ+Iy18fZaPbC17UdoPwnOHRz+ZMevb3Y+7TtLqL6XPGTBPFq+EvGS85ck2yTza096Z+LPn616+Itab2mbzzM9ZmZ5mUJGmXrFkthyxbDM1tHWJhv/Zref+T0/dy9MtOO9+qPbDnq/wBi1U6Pdcdqz0m3dt8pTqa1LjpoRPMdBzdQAAAAAAAAAAAAAAAAAAAAAAABbbnHe0GSI9yVy85K9/HMT5xMf4Eclj7/AMitrMM6bWXx28a2mFF1ckggRKBIIAAVdLHOrx93x71VNkOz+m/E7xiiPK3fn5QVY6TjjjHHPsj+HoHJ2AAAAAAAAAAAAAAAAAAAAAAAAAAaR212/wBDq65qR6t/Vt/c1p1HdNFXcNFfHfzjp8J8nM9TgtpdRbHm6WrPEt81y6ikCWmUAAAANx7D6Du4rZ8kf+p7tPl5tZ2vQ23HW1x4/CZ5tPlFfN0zTYK6bT1pijiKxFY+jPVb5iqAw6AAAAAAAAAAAAAAAAAAAAAAAAAADXu1OyfjsXpdPH5tI6/qr92wglmuST0nr0nzhDc+03Z30/ObQx6/jenvfGPi02Y4txaJiY6THm6S65WYIEqiHvHjtlyRXHEza08REIx0tlyRXFE2tPhERzLe+zewRt1PSanic1o+lI+CW4smrns7tEbXpPW65L9bz/qGWBzdZAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAYLfOzmPcOb4OKZfbx6tvmzoJZrlut27NocnGppMfqiOaz9VTb9pz7heIwUmK+dpjivDpl6Rkji8RMfGOU1rFI4rERHsiOIa9M+GK2XYse105j18k+N5jr9GWBlqQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q=="));
    $iconset.append($("<img/>").attr("src", "https://maxcdn.icons8.com/app/uploads/2016/10/retweet.png"));
    $iconset.append($("<img/>").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-h4ZR9l3cqG7dfrKqR1mpV1e-vImi3ggtpOAmFOgYKAIYOODhdA"));




  $('.tweet-list').append($newTweet);
}
 createTweetElement();

