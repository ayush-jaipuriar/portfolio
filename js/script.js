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
      "RPA DEVELOPER",
      "4RD YEAR CSE STUDENT"
    ],
    typeSpeed: 25,

    startDelay: 1000,
    backSpeed: 25,
    backDelay: 2000,
    smartBackspace: true,
    loop: true,
    showCursor: false
  });
});
