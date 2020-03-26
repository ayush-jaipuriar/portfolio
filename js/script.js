$(document).ready(function() {
  $("#slides").superslides({
    animation: "fade",
    play: 2000,
    pagination: false
  });

  var typed = new Typed(".typed ", {
    strings: [
      "ANDROID APP DEVELOPER",
      "FULL STACK WEB DEVELOPER",
      "3RD YEAR COMPUTER SCIENCE AND ENGINEERING STUDENT"
    ],
    typeSpeed: 25,
    fadeOut: true,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500,

    startDelay: 1000,
    backSpeed: 25,
    backDelay: 1000,
    smartBackspace: true,
    loop: true,
    showCursor: false
  });
});
