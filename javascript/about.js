$(document).ready(function () {
  if ($(window).width() >= 576) {
    var newHeight = $('#description').height()
    $('.about-portrait').css('background-size', 'auto ' + newHeight + 'px')
    $('#about-img').height(newHeight)
  } else {
    $('.about-portrait').css('background-image', 'url("./media/about-mobile.jpg"')
    $('.about-portrait').css('background-size', 'auto ' + $(window).height() / 2 + 'px')
    $('.about-portrait').css('background-position', 'center center')

    $('#about-img').height($(window).height() / 2)
    $('#about-img').width($(document).width())

    $('#about-img-col').css('padding', '0 0')
  }
})
