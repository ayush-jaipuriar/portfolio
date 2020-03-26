$(document).ready(function() {
  $("#slides").superslides({
    animation: "fade",
    play: 3000,
    pagination: false
  });

  var typed = new Typed(".typed ", {
    strings: [
      "ANDROID APP DEVELOPER",
      "FULL STACK WEB DEVELOPER",
      "COMPUTER SCIENCE AND ENGINEERING 3RD YEAR STUDENT"
    ],
    typeSpeed: 25,
    fadeOut: false,
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
