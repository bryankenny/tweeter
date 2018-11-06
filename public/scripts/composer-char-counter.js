 $(document).ready( function() {

 $(".new-tweet").on("keypress", "textarea", function() {

// $ is used as a reference to jQuery
// element.closest, in this case (this).closest, returns the closest ancestor of the current element
// (".new-tweet") and (".counter") both refer to classes of elements defined in index.html
// $(this).val().length; is refering to the current value of the length of current element
// counterLabel.text(charsLeft); converts the remaining characters to text in the counterLabel
    const maxCharacterAmount = 140;
    let charsRemaining = maxCharacterAmount - $(this).val().length;
    let counterLabel = $(this).closest(".new-tweet").find(".counter");
    counterLabel.text(charsRemaining);
   });
});




