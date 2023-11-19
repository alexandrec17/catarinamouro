let scrollTopButton, scrollDownButton
$(document).ready(function () {
  const footerHeight = $('#footer').height()
  $('#footer').width($(window).width())
  $('.content-wrap').css('padding-bottom', footerHeight + 50)

  scrollTopButton = document.getElementById('scroll-top-btn')
  scrollDownButton = document.getElementById('scroll-down-btn')

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () { scrollFunction() }

  $('a').click(function () {
    // close the menu after 0,5 seconds
    setTimeout(function () {
      $('#toggler').prop('checked', false)
    }, 500)
  })

  $('#submit').click(() => {
    window.open('mailto:catarinamouro.soprano@gmail.com?subject=' + getEmailSubject() + '&body=' + getEmailBody())
    $(this).closest('form').find('input[type=text], textarea').val('')
  })

  $("#gallery-mobile-btn").click(() => switchGalleryMobileSubMenu())
})

function switchGalleryMobileSubMenu(){
  const element = document.getElementById("gallery-mobile-sub-menu");

  if(element && element != null) 
  {
    if(element.classList.contains('hide'))
      element.classList.remove('hide');
    else
      element.classList.add('hide')
  }

}

function scrollFunction () {
  if(scrollDownButton && scrollDownButton != null)
  {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      scrollDownButton.style.display = 'none'
    } else {
      scrollDownButton.style.display = 'table'
    }
  }
  
  if(scrollTopButton && scrollTopButton != null)
  {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      if (screen.width <= 400) { 
        setButtonHeight() 
      }
      scrollTopButton.style.display = 'block'

    } else {
      scrollTopButton.style.display = 'none'
      
    }
  }
}

// When the user clicks on the scroll bot button, scroll to the top of the info section
function scrollToInfo() {
  const body = $('html, body')
  body.stop().animate({
    scrollTop: $("#info-container").offset().top
  }, 2000, 'swing');
}

// Set the button position to be above footer
function setButtonHeight () {
  $(scrollDownButton).css('bottom', $('#footer').height() + 20)
}

// When the user clicks on the scroll top button, scroll to the top of the document
function topFunction () {
  const body = $('html, body')
  body.stop().animate({ scrollTop: 0 }, 500, 'swing');
}

function setActive (menuItem) {
  $('.active').removeClass('active')
  menuItem.addClass('active')
}

function getEmailBody () {
  return $('#body').val()
}

function getEmailSubject () {
  return $('#subject').val()
}
