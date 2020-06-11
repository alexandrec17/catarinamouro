$(document).ready(function ($) {
  console.log('width', $(window).width())
  if ($(window).width() < 600) {
    console.log('fancybox', $('.fancybox'))
    $('.fancybox').fancybox({
      // API options
      helpers: {
        buttons: {
          tpl: '<div id="fancybox-buttons"><ul>' +
                    '<li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li>' +
                    '<li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li>' +
                    '<li><a class="btnClose" title="Close" href="javascript:;"></a></li>' +
                '</ul></div>'
        }
      }
    }) // fancybox
  }
}) // ready

/*
// Gallery modal
function removePortraitAndLandscapeStyles (elem) {
  elem.classList.remove('landscape')
  elem.classList.remove('portrait')
}

// Get the image and insert it inside the modal - use its "alt" text as a caption
function openModal (currentElem) {
  // Get the modal
  var modal = document.getElementById('myModal')

  var img = currentElem
  var modalImg = document.getElementById('modalImg')
  var captionText = document.getElementById('caption')

  var prev = document.getElementById('prev')
  var next = document.getElementById('next')
  var span = document.getElementsByClassName('close')[0]

  removePortraitAndLandscapeStyles(modalImg)
  removePortraitAndLandscapeStyles(next)
  removePortraitAndLandscapeStyles(prev)
  captionText.classList.remove('landscape')

  if (currentElem.classList.contains('portrait')) {
    modalImg.classList.add('portrait')
    prev.classList.add('portrait')
    next.classList.add('portrait')
  } else {
    modalImg.classList.add('landscape')
    captionText.classList.add('landscape')
    prev.classList.add('landscape')
    next.classList.add('landscape')
  }
  modal.style.display = 'block'

  modalImg.src = img.src
  captionText.innerHTML = img.alt

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none'
  }

  prev.onclick = function () {
    changeSlides(-1)
  }
  next.onclick = function () {
    changeSlides(1)
  }
}

var slideIndexJS = 1
// showSlides(slideIndexJS)

function changeSlides (n) {
  showSlides(slideIndexJS += n)
}

function currentSlide (n) {
  showSlides(slideIndexJS = n)
}

function showSlides (n) {
  var slidesJS = document.getElementsByClassName('gallery-image')

  if (n > slidesJS.length) { slideIndexJS = 1 }
  if (n < 1) { slideIndexJS = slidesJS.length }

  var modal = document.getElementById('myModal')
  modal.style.display = 'none'

  openModal(slidesJS[slideIndexJS - 1])
}
*/
