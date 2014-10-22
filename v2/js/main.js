
var phoneScreenIndex = 0;


function next() {
  var index = (phoneScreenIndex++) % 3;

  selectIndicator(index);
  showScreen(index);
}

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

var intervalId = setInterval(next, 5000);

$(".indicators li").click(function(e) {
  var index = $(this).index();

  e.preventDefault();
  e.stopPropagation();

  selectIndicator(index);
  showScreen(index);

  clearInterval(intervalId);
});

$('.screen').click(function() {
  clearInterval(intervalId);
  next();
});

