
var phoneScreenIndex = 0;

var intervalId = setInterval(function() {
  var index = (phoneScreenIndex++) % 3;

  console.log(index);

  selectIndicator(index);
  showScreen(index);
  showTutorial(index);

}, 5000);

$(".indicators li").click(function() {
  var index = $(this).index();

  selectIndicator(index);
  showScreen(index);
  showTutorial(index);

  clearInterval(intervalId);
});

function selectIndicator(index) {
  $(".indicators li")
    .removeClass('active')
    .eq(index)
      .addClass('active');
}

function showScreen(index) {
  $(".phone")
    .removeClass("screen1 screen2 screen3")
    .addClass("screen" + (index + 1));
}

function showTutorial(index) {
  $("#tutorial")
    .removeClass("tutorial1 tutorial2 tutorial3")
    .addClass("tutorial" + (index + 1));
}
