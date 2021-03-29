const feeds = document.querySelector(".feed"),
  feedArticles = feeds.querySelectorAll(".feed__article"),
  media = document.querySelector("#media1"),
  wavesClass = "article__content_waves";

function toggleContent(array, className) {
  array.forEach((e) => {
    e.classList.remove("feed__article_onclick"),
      e.classList.contains(className)
        ? (e.classList.remove("hidden"),
          e.querySelector(".bookmark_checked") &&
            setTimeout(() => e.classList.add("feed__article_onclick"), 100))
        : e.classList.add("hidden");
  });
}

feedArticles.forEach((e) =>
  e.addEventListener("click", function () {
    e.classList.add("feed__article_onclick");
    let t = e.querySelector(".article__content");
    t.classList.add(wavesClass),
      setTimeout(() => e.classList.remove("feed__article_onclick"), 500),
      setTimeout(() => t.classList.remove(wavesClass), 900),
      setTimeout(
        () =>
          e
            .querySelector(".feed__article_bookmark")
            .classList.toggle("bookmark_checked"),
        300
      );
  })
);

const feedsChildren = [...feeds.children],
  buttonToggle1 = document.getElementById("btn-1"),
  buttonToggle2 = document.getElementById("btn-2"),
  buttonToggle3 = document.getElementById("btn-3"),
  buttonToggle4 = document.getElementById("btn-4"),
  footer = document.querySelector(".footer"),
  audio = document.querySelector(".audio__container");

buttonToggle2.addEventListener("click", function () {
  media.play(),
    toggleContent(feedsChildren, "feed__article_audio"),
    footer.classList.add("hidden"),
    audio.classList.remove("hidden");
});

buttonToggle3.addEventListener("click", function () {
  media.pause(),
    toggleContent(feedsChildren, "feed__article_video"),
    footer.classList.add("hidden"),
    audio.classList.remove("hidden");
});

buttonToggle4.addEventListener("click", function () {
  media.pause(),
    toggleContent(feedsChildren, "feed__article_event"),
    footer.classList.add("hidden");
});

buttonToggle1.addEventListener("click", function () {
  media.pause(),
    footer.classList.remove("hidden"),
    feedsChildren.forEach((e) => {
      e.classList.remove("hidden", "feed__article_onclick");
    }),
    audio.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  (27 !== e.which && 32 !== e.which) || media.pause();
});

const playButton = document.getElementById("playButton"),
  stopButton = document.getElementById("stopButton");

playButton.addEventListener("click", function () {
  media.play();
});

stopButton.addEventListener("click", function () {
  media.pause();
});
