 $(document).ready( function() {
 $(".new-tweet").on("input", "textarea", function() {

    const maxCharacterAmount = 140;
    const charsRemaining = maxCharacterAmount - $(this).val().length;
    let counterNums = $(this).closest(".new-tweet").find(".counter");
console.log(this)
      counterNums.text(charsRemaining);

    if (charsRemaining < 0) {
      counterNums.addClass("tooManyCharacters")
    }
    else {
      counterNums.removeClass("tooManyCharacters")
    }
  });
});

// $ is used as a reference to jQuery
//in this context this is referring to textarea
// element.closest, in this case (this).closest, returns the closest ancestor of the current element
// (".new-tweet") and (".counter") both refer to classes of elements defined in index.html
// $(this).val().length; is refering to the current value of the length of current element
// counterLabel.text(charsLeft); converts the remaining characters to text in the counterLabel. using .text also protects against cross site scripting
// The if/else statement creates a new class if there are more than 140 characters, creating this new classs allows us to style it in css
