


$("#btn-3").click( function () {
       $(".feed, footer").addClass("hidden");
       $("#media1")[0].pause()
     });

  $("#btn-2").click( function () {
      $(".feed").removeClass("hidden");
      $("footer").addClass("hidden");
      $(".feed ul li:nth-of-type(2)").nextAll().addClass("hidden");
      $(".feed ul li:nth-of-type(2) figure").addClass("addfigure");
      $(".feed ul li:nth-of-type(2) figure figcaption").addClass("addfigcaption");
      $("#check1 + label").addClass("add");
      $("#audio").removeClass("hidden")
      $("#media1")[0].play();
             })   

  $("#btn-1").click( function () {
      $(".feed, footer").removeClass("hidden");
      $(".feed ul li:nth-of-type(2)").nextAll().removeClass("hidden");
      $(".feed ul li:nth-of-type(2) figure").removeClass("addfigure");
      $(".feed ul li:nth-of-type(2) figure figcaption").removeClass("addfigcaption");
      $("#check1 + label").removeClass("add");
      $("#media1")[0].pause();
      $("#audio").addClass("hidden")
     });
 
const audio = document.getElementById("media1");
console.log(audio);

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27 || evt.keyCode === 32 ) {
    stop()
  }
})

function play() {
  audio.play();
}

function stop() {
  audio.pause();
  }
