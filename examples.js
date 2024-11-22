var firstsec = document.getElementById("section1");
var secondsec = document.getElementById("section2");
var thirdsec = document.getElementById("section3");
var fourthsec = document.getElementById("section4");
var lastScrollTop = 0;

window.onscroll = function () {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    secondsec.scrollIntoView({ behavior: "smooth" });
  } else if (st < lastScrollTop) {
    thirdsec.scrollIntoView({ behavior: "smooth" });
  } else {
    firstsec.scrollIntoView({ behavior: "smooth" });
  }
  lastScrollTop = st <= 0 ? 0 : st;
};
