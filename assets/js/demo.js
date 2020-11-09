// images loaded
$('.coidea-3d-carousel').imagesLoaded({
  background: true
}, function () {

  // hide loader
  $('.loader').addClass('is-loaded');

  // variables
  var timeline = new TimelineMax(),
    carousel = $(".coidea-3d-carousel"),
    boxes = $(".item"),
    stage = $(".stage"),
    $nav = $("#nav"),
    angle = 360 / 3;

  // set stage
  TweenMax.set(stage, {
    css: {
      perspective: "86vw",
      transformStyle: "preserve-3d"
    }
  });
  if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
    TweenMax.set(stage, {
      css: {
        perspective: "8000px",
        transformStyle: "preserve-3d"
      }
    });
  }

  // set data rotation for each item
  boxes.each(function (index, element) {
    TweenMax.set(element, {
      css: {
        rotationY: index * angle
      }
    });
    element.dataset.rotationY = index * angle;
  });

  // click on next item
  $nav.on("click", "#next", function () {

    timeline
      .staggerTo($(boxes).find('.description-target'), 0.5, {
        cycle: {
          yPercent: function (index, element) {
            return "100%";
          }
        },
        ease: Circ.easeOut
      }, 0)
      .staggerTo($(boxes).find('.headline-target'), 0.5, {
        cycle: {
          yPercent: function (index, element) {
            return "100%";
          }
        },
        ease: Circ.easeOut
      }, 0, '-=0.5')
      .staggerTo($(boxes).find('.discover-more-target'), 0.5, {
        cycle: {
          yPercent: function (index, element) {
            return "100%";
          }
        },
        ease: Circ.easeOut
      }, 0, '-=0.5')
      .staggerTo(boxes, 0.5, {
        cycle: {
          width: function (index, element) {
            return "80%";
          },
          height: function (index, element) {
            return "80%";
          },
          top: function (index, element) {
            return "10%";
          },
          right: function (index, element) {
            return "10%";
          },
          bottom: function (index, element) {
            return "10%";
          },
          left: function (index, element) {
            return "10%";
          }
        },
        ease: Circ.easeOut
      }, 0)
      .staggerTo(boxes, 1, {
        cycle: {
          rotationY: function (index, element) {
            var y1 = +element.dataset.rotationY;
            var y2 = y1 - angle;
            element.dataset.rotationY = y2;
            return y2;
          }
        },
        ease: Expo.easeInOut
      }, 0, '+=0.25')
      .staggerTo(boxes, 0.5, {
        cycle: {
          width: function (index, element) {
            return "100%";
          },
          height: function (index, element) {
            return "100%";
          },
          top: function (index, element) {
            return "0%";
          },
          right: function (index, element) {
            return "0%";
          },
          bottom: function (index, element) {
            return "0%";
          },
          left: function (index, element) {
            return "0%";
          }
        },
        ease: Circ.easeOut
      }, 0, '+=0.3')
      .staggerTo($(boxes).find('.description-target'), 0.5, {
        cycle: {
          yPercent: function (index, element) {
            return "0%";
          }
        },
        ease: Circ.easeOut
      }, 0)
      .staggerTo($(boxes).find('.headline-target'), 0.5, {
        cycle: {
          yPercent: function (index, element) {
            return "0%";
          }
        },
        ease: Circ.easeOut
      }, 0, '-=0.5')
      .staggerTo($(boxes).find('.discover-more-target'), 0.5, {
        cycle: {
          yPercent: function (index, element) {
            return "0%";
          }
        },
        ease: Circ.easeOut
      }, 0, '-=0.5')
  });


  // click on prev item
  $nav.on("click", "#prev", function () {

    timeline
      .staggerTo($(boxes).find('.description-target'), 0.5, {
        cycle: {
          yPercent: function (index, element) {
            return "-100%";
          }
        },
        ease: Circ.easeOut
      }, 0)
      .staggerTo($(boxes).find('.headline-target'), 0.5, {
        cycle: {
          yPercent: function (index, element) {
            return "-100%";
          }
        },
        ease: Circ.easeOut
      }, 0, '-=0.5')
      .staggerTo($(boxes).find('.discover-more-target'), 0.5, {
        cycle: {
          yPercent: function (index, element) {
            return "-100%";
          }
        },
        ease: Circ.easeOut
      }, 0, '-=0.5')
      .staggerTo(boxes, 0.5, {
        cycle: {
          width: function (index, element) {
            return "80%";
          },
          height: function (index, element) {
            return "80%";
          },
          top: function (index, element) {
            return "10%";
          },
          right: function (index, element) {
            return "10%";
          },
          bottom: function (index, element) {
            return "10%";
          },
          left: function (index, element) {
            return "10%";
          }
        },
        ease: Circ.easeOut
      }, 0)
      .staggerTo(boxes, 1, {
        cycle: {
          rotationY: function (index, element) {
            var y1 = +element.dataset.rotationY;
            var y2 = y1 + angle;
            element.dataset.rotationY = y2;
            return y2;
          }
        },
        ease: Expo.easeInOut
      }, 0, '+=0.25')
      .staggerTo(boxes, 0.5, {
        cycle: {
          width: function (index, element) {
            return "100%";
          },
          height: function (index, element) {
            return "100%";
          },
          top: function (index, element) {
            return "0%";
          },
          right: function (index, element) {
            return "0%";
          },
          bottom: function (index, element) {
            return "0%";
          },
          left: function (index, element) {
            return "0%";
          }
        },
        ease: Circ.easeOut
      }, 0, '+=0.3')
      .staggerTo($(boxes).find('.description-target'), 0.5, {
        cycle: {
          yPercent: function (index, element) {
            return "0%";
          }
        },
        ease: Circ.easeOut
      }, 0)
      .staggerTo($(boxes).find('.headline-target'), 0.5, {
        cycle: {
          yPercent: function (index, element) {
            return "0%";
          }
        },
        ease: Circ.easeOut
      }, 0, '-=0.5')
      .staggerTo($(boxes).find('.discover-more-target'), 0.5, {
        cycle: {
          yPercent: function (index, element) {
            return "0%";
          }
        },
        ease: Circ.easeOut
      }, 0, '-=0.5');
  });

});

// Music background
var myAudio = document.getElementById("myAudio");
  
var isPlaying = false;
  function togglePlay() {
	  myAudio.play();
	};
  
  function togglePause() {
	  myAudio.pause();
	};

// countdown
function animation(span) {
  span.className = "turn";
  setTimeout(function () {
    span.className = ""
  }, 700);
}

function Countdown() {

  setInterval(function () {

    var hari = document.getElementById("days");
    var jam = document.getElementById("hours");
    var menit = document.getElementById("minutes");
    var detik = document.getElementById("seconds");

    var deadline = new Date("Nov 10, 2020 12:10:59");
    var waktu = new Date();
    var distance = deadline - waktu;

    var days = Math.floor((distance / (1000 * 60 * 60 * 24)));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days < 10) {
      days = '0' + days;
    }
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    hari.innerHTML = days;
    jam.innerHTML = hours;
    menit.innerHTML = minutes;
    detik.innerHTML = seconds;
    //animation
    animation(detik);
    if (seconds == 0) animation(menit);
    if (minutes == 0) animation(jam);
    if (hours == 0) animation(hari);

  }, 1000);
}

Countdown();