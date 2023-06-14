var neira = document.getElementById("neiravid");
var joris = document.getElementById("jorisvid");
var caroline = document.getElementById("carolinevid");
var diar = document.getElementById("diarvid");
var close = document.getElementById("close");
var herovideo = document.getElementById("myVideo");
var herosec = document.getElementById("herovideo");
var text = document.getElementById("textvideo");
var logo = document.getElementById("logovideo");

$("#audio-control").click(function () {
  if ($(".myVideo").prop("muted")) {
    $(".myVideo").prop("muted", false);
    $(this).text("MUTE");
  } else {
    $(".myVideo").prop("muted", true);
    $(this).text("UNMUTE");
  }
});

window.onload = function () {
  var element1 = document.getElementById("c1");
  var element2 = document.getElementById("c2");
  setTimeout(hidevidtext, 8500);

  window.addEventListener("scroll", function () {
    if (window.innerWidth > 900 && window.pageYOffset > 700) {
      element1.style.left = "25px";
      element2.style.right = "25px";
      element1.style.transition = "left 1s ease-in-out";
      element2.style.transition = "right 1s ease-in-out";
    } else if (window.innerWidth < 900 && window.pageYOffset > 100) {
      element1.style.left = "25px";
      element2.style.right = "25px";
      element1.style.transition = "left 1s ease-in-out";
      element2.style.transition = "right 1s ease-in-out";
    }
  });
};

function hidevidtext() {
  text.style.opacity = "0";
  text.style.transition = "2s";
  logo.style.opacity = "0";
  logo.style.transition = "2s";
  document.querySelector("#audio-control").style.opacity = "50%";
  document.querySelector("#audio-control").style.transition = "2s";
}
herosec.addEventListener("click", () => {
  herosec.style.opacity = "0%";
  herosec.style.transition = "2s";
  document.querySelector("#audio-control").style.opacity = "0%";
  document.querySelector("#audio-control").style.transition = "2s";
  setTimeout(hidevideohero, 2000);
});
function hidevideohero() {
  document.getElementById("audio-control").classList.add("hidden");
  herosec.classList.add("hidden");
  document.querySelector("body").style.overflow = "visible";
  $(".myVideo").prop("muted", true);
}

neira.addEventListener("click", () => {
  document.getElementById("popup").style.visibility = "visible";
  document.getElementById("neira").style.visibility = "visible";
  document.querySelector("body").style.overflow = "hidden";
});

joris.addEventListener("click", () => {
  document.getElementById("popup").style.visibility = "visible";
  document.getElementById("joris").style.visibility = "visible";
  document.querySelector("body").style.overflow = "hidden";
});

caroline.addEventListener("click", () => {
  document.getElementById("popup").style.visibility = "visible";
  document.getElementById("caroline").style.visibility = "visible";
  document.querySelector("body").style.overflow = "hidden";
});

diar.addEventListener("click", () => {
  document.getElementById("popup").style.visibility = "visible";
  document.getElementById("diar").style.visibility = "visible";
  document.querySelector("body").style.overflow = "hidden";
});

close.addEventListener("click", () => {
  document.getElementById("popup").style.visibility = "hidden";
  document.getElementById("neira").style.visibility = "hidden";
  document.getElementById("joris").style.visibility = "hidden";
  document.getElementById("caroline").style.visibility = "hidden";
  document.getElementById("diar").style.visibility = "hidden";
  document.querySelector("body").style.overflow = "visible";
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 3,
      },
    },
    center: true,
    loop: true,
    margin: 20,
    center: true,
    nav: false,
    dots: false,
    startPosition: 1,
  });

  $("#prev-btn").click(function () {
    $(".owl-carousel").trigger("prev.owl.carousel");
  });
  $("#next-btn").click(function () {
    $(".owl-carousel").trigger("next.owl.carousel");
  });
  $("#prev-btn2").click(function () {
    $(".owl-carousel").trigger("prev.owl.carousel");
  });
  $("#next-btn2").click(function () {
    $(".owl-carousel").trigger("next.owl.carousel");
  });
});
