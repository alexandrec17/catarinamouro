// Gallery modal
function removePortraitAndLandscapeStyles (elem) {
  elem.classList.remove('landscape')
  elem.classList.remove('portrait')
}
// Get the image and insert it inside the modal - use its "alt" text as a caption
function openModal (currentElem) {
  // Get the modal
  var modal = document.getElementById('myModal')

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = currentElem
  var modalImg = document.getElementById('modalImg')
  var captionText = document.getElementById('caption')

  removePortraitAndLandscapeStyles(modalImg)
  captionText.classList.remove('landscape')
  if (currentElem.classList.contains('portrait')) {
    modalImg.classList.add('portrait')
  } else {
    modalImg.classList.add('landscape')
    captionText.classList.add('landscape')
  }
  modal.style.display = 'block'

  modalImg.src = img.src
  captionText.innerHTML = img.alt

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('close')[0]

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none'
  }
}

var slideIndexJS = 1
showSlides(slideIndexJS)

function changeSlides (currentElem, n) {
  showSlides(currentElem, slideIndexJS += n)
}

function currentSlide (currentElem, n) {
  showSlides(currentElem, slideIndexJS = n)
}

function showSlides (currentElem, n) {
  /* var i
  var slidesJS = document.getElementsByClassName('my-slides')
  if (n > slidesJS.length) { slideIndexJS = 1 }
  if (n < 1) { slideIndexJS = slidesJS.length }
  for (i = 0; i < slidesJS.length; i++) {
    $(slidesJS[i]).css('display', 'none')
  }
  $(slidesJS[slideIndexJS - 1]).css('display', 'block') */
}
