
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

$('.screen').on('swipe', function() {
  clearInterval(intervalId);
  next();
});

$('[data-target="#video"]').on('click', function (evt) {
  evt.preventDefault();
  var $target = $(evt.currentTarget),
  videoSrc = $target.data('video'),
  $modal = $("#video");

  $modal.modal('show');
  $modal
  .find('iframe').attr('src', videoSrc)
  .end()
  .on('hide.bs.modal', function () {
    $(this)
    .off('hide.bs.modal')
    .find('iframe').attr('src', '');
  })
  .modal('show');
});

$('button.arrow').click(function(e) {
  var form = $(this).parent('form');
  if ($('input[type=email]', form).val() === '') {
    e.preventDefault();
    $('input[type=email]', form).focus();
    return false;
  }
});

$(window).scroll(function () {
  var scrolled = $(window).scrollTop();
  var o1 = $('#header-title').offset().top;

  if(scrolled > o1) {
    $('#second-section')
      .find('.feature-image')
        .removeClass('invisible')
        .addClass('animated fadeInLeft');

    $('#second-section')
      .find('.copy')
        .removeClass('invisible')
        .addClass('animated fadeInRight');

  }  
});
