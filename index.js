AOS.init();
// 
gsap.from('.main-home img', {duration: 1, y: -100, opacity: 0 });
gsap.from('.tulisan-home1', {duration: 1, x: -50, opacity: 0, delay: 0.5, });
gsap.from('.tulisan-home2', {duration: 1, x: -100, opacity: 0, delay: 0.5, });

gsap.registerPlugin(TextPlugin);
gsap.to('.tulisan-home3', {duration: 2.5, delay: 1.5, text: '"Menciptakan bunga yang tidak hanya indah dipandang, tetapi juga penuh makna dan tahan lama. Karena keindahan tidak harus sementara."' });

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    if ($(this).scrollTop() > $nav.height()) {
      $nav.addClass("scrolled");
      $nav.removeClass("navbar-dark");
      $nav.addClass("navbar-light");
    } else {
      $nav.removeClass("scrolled");
      $nav.addClass("navbar-dark");
      $nav.removeClass("navbar-light");
    }
  });
});

// scrol button
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// kepercayaan

// icon berjalan

function hourglass() {
  var a;
  a = document.getElementById("div1");
  a.innerHTML = "&#xf251;";
  setTimeout(function () {
    a.innerHTML = "&#xf252;";
  }, 1000);
  setTimeout(function () {
    a.innerHTML = "&#xf253;";
  }, 2000);
}
hourglass();
setInterval(hourglass, 3000);

function smile() {
  var a;
  a = document.getElementById("div2");
  a.innerHTML = "&#xf118;";
  setTimeout(function () {
    a.innerHTML = "&#xf11a;";
  }, 1000);
  setTimeout(function () {
    a.innerHTML = "&#xf119;";
  }, 2000);
  setTimeout(function () {
    a.innerHTML = "&#xf11a;";
  }, 3000);
}
smile();
setInterval(smile, 4000);

function ratestar() {
  var a;
  a = document.getElementById("div3");
  a.innerHTML = "&#xf006;";
  setTimeout(function () {
    a.innerHTML = "&#xf123;";
  }, 1000);
  setTimeout(function () {
    a.innerHTML = "&#xf005;";
  }, 2000);
}
ratestar();
setInterval(ratestar, 3000);

// testiminial



// testiminial


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}