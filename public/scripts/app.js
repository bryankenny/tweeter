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
   $iconset.append($("<img/>").attr("src", ""));
   $('.tweet-list').append($newTweet);
}
 createTweetElement();
 // function renderTweets(tweetsList) {
 //   for (var i = 0; i < tweetList.length; i++) {
 //   }
// }