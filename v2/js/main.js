
/**
 * Phone with sliding screens
 */

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

/**
 * To show youtube video
 */

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

/**
 * Section marker in body and sticky navbar
 */

var bodyEl = $("body");
var navbarHeight = $('.navbar-static-top').height();
var _closed = true;

$(window).on("scroll", function() {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > (navbarHeight + 10)) {
      if (_closed) {
        $('.navbar-fixed-top')
          .removeClass('closed');

        _closed = false;
      }
    } else if (!_closed) {
      $('.navbar-fixed-top')
        .addClass('closed');

      _closed = true;
    }

    var classes = {}; 
    $("section").each(function() {
        var el = $(this),
            className = el.attr("id");

        if (!classes[className] && 
            el.offset().top < scrollTop) {

            classes[className] = 1;
            bodyEl.addClass(className);  
        } else {
            delete classes[className];
            bodyEl.removeClass(className);
        }

    });
});

/**
 * Hack to make videos loop
 */

$("video").each(function() {
  if (typeof this.loop == 'boolean') {
      this.loop = true;
  } else {
    this.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);

    this.play();
  }
});
