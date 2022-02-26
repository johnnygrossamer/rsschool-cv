"use strict";

function testWebp() {
  var webP = new Image();
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

  webP.onload = webP.onerror = function () {
    if (webP.height === 2) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  };
}

document.addEventListener("DOMContentLoaded", function () {
  testWebp();
}, false);

function animatePage() {
  var animateItems = document.querySelectorAll('._anim');
  if (animateItems.length === 0) return;
  window.addEventListener('scroll', function () {
    return animateOnScroll(animateItems);
  }, false);
  setTimeout(function () {
    return animateOnScroll(animateItems);
  }, 300);
}

function animateOnScroll(animateItems) {
  for (var i = 0; i < animateItems.length; i++) {
    var element = animateItems[i],
        elementHeight = element.offsetHeight,
        elementOffset = offset(element).top,
        animateStart = 4;
    var elementPoint = window.innerHeight - elementHeight / animateStart;

    if (elementHeight > window.innerHeight) {
      elementPoint = window.innerHeight - window.innerHeight / animateStart;
    }

    if (pageYOffset > elementOffset - elementPoint && pageYOffset < elementOffset + elementHeight) {
      element.classList.add('_complete');
    } else {
      if (element.classList.contains('_anim-repeat')) {
        element.classList.remove('_complete');
      }
    }
  }
}

function offset(el) {
  var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
}

document.addEventListener("DOMContentLoaded", function () {
  animatePage();
}, false);