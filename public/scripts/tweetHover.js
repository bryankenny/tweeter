$(document).ready (function() {
  $(".tweet-list").on("mouseover", ".tweet-container", function(event) {
  $(this).addClass("highlight");
    console.log(this);
    event.stopPropagation();
   });

    $(".tweet-list").on("mouseleave", ".tweet-container", function(event) {
     console.log("bye mouse");
    $(this).removeClass("highlight");
      event.stopPropagation();
  })
})


// the $(document).ready fires when the DOM is ready, preventing things from happening before everything is rendered on the page
// .addClass adds the specified class to each element in the set of matched elemnts, in this case this, which is referencing article with the class "tweet-container highlight"
// (tweet-list).on("mouseLeave") and the .removeClass afterwards are whats responsible for the highlight going away on mouseleave
// event.stopPropagation prevents the event from "bubbling" up the DOM tree preventing any parent handlers from being notified of the event