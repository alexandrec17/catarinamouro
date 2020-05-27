
$(document).ready(function () {
  $('a').click(function () {
    // close the menu after 0,5 seconds
    setTimeout(function () {
      $('#toggler').prop('checked', false)
    }, 500)
  })

  $('#submit').click(() => {
    window.open('mailto:mouro.catarina@gmail.com?subject=' + getSubject() + '&body=' + getBody())
    $(this).closest('form').find('input[type=text], textarea').val('')
  })
})

function eventFire (el, etype) {
  if (el.fireEvent) {
    el.fireEvent('on' + etype)
  } else {
    var evObj = document.createEvent('Events')
    evObj.initEvent(etype, true, false)
    el.dispatchEvent(evObj)
  }
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
