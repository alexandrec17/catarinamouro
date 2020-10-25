let mybutton
$(document).ready(function () {
  const footerHeight = $('#footer').height()
  $('#footer').width($(window).width())
  $('.content-wrap').css('padding-bottom', footerHeight + 50)

  mybutton = document.getElementsByClassName('myBtn')[0]

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () { scrollFunction() }

  $('a').click(function () {
    // close the menu after 0,5 seconds
    setTimeout(function () {
      $('#toggler').prop('checked', false)
    }, 500)
  })

  $('#submit').click(() => {
    window.open('mailto:catarinamouro.soprano@gmail.com?subject=' + getSubject() + '&body=' + getBody())
    $(this).closest('form').find('input[type=text], textarea').val('')
  })
})

function scrollFunction () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    if (screen.width <= 400) { setButtonHeight() }
    mybutton.style.display = 'block'
  } else {
    mybutton.style.display = 'none'
  }
}

function setButtonHeight () {
  $(mybutton).css('bottom', $('#footer').height() + 20)
}

// When the user clicks on the button, scroll to the top of the document
function topFunction () {
  const body = $('html, body')
  body.stop().animate({ scrollTop: 0 }, 500, 'swing')
  /*
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  */
}

function setActive (menuItem) {
  $('.active').removeClass('active')
  menuItem.addClass('active')
}

function getBody () {
  return $('#body').val()
}

function getSubject () {
  return $('#subject').val()
}
