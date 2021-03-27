const mapHeader = document.getElementById("map"),
  toHide = document.getElementById("to-hide"),
  hiddenToShow = document.getElementById("hidden1"),
  titleEvent = document.querySelectorAll(".title-event"),
  eventsBtn = document.getElementById("events"),
  searchBtn = document.getElementById("search"),
  button1 = document.getElementById("button1"),
  capital = document.getElementById("capital"),
  feedMap = document.querySelector(".feed"),
  feedArticlesMap = feedMap.querySelectorAll(".feed__article");
let newEvents = document.querySelectorAll(".bookmark_event-new").length;
const linkNumberOfNewEvents = document.getElementById("counter-events-footer"),
  buttonNumberOfNewEvents = document.getElementById("counter-events-header");
function toggleMap() {
  toHide.classList.toggle("hidden"), hiddenToShow.classList.toggle("hidden");
}
document.addEventListener("DOMContentLoaded", () => {
  feedArticlesMap.forEach((e) => {
    e.querySelector(".feed__article_bookmark").classList.add(
      "bookmark_event-new"
    );
  }),
    (newEvents = feedArticlesMap.length),
    (linkNumberOfNewEvents.textContent = newEvents),
    (buttonNumberOfNewEvents.textContent = newEvents);
}),
  feedArticlesMap.forEach((e) =>
    e.addEventListener("click", function () {
      e.querySelector(".bookmark_event-new")
        .classList.remove("bookmark_event-new"),
        newEvents > 0 && newEvents--,
        (linkNumberOfNewEvents.textContent = newEvents),
        (buttonNumberOfNewEvents.textContent = newEvents);
    })
  );
const contentDescription = document.querySelectorAll(
    ".content__description_event"
  ),
  contentDate = document.querySelectorAll(".event-date");
let eventLocation = "Buenos Aires, Argentina";
searchBtn.addEventListener("click", function () {
  toggleMap(),
    (capital.textContent = "Amsterdam"),
    capital.classList.remove("capitalChange");
  let date = 13;
  for (let i = 0; i < feedArticlesMap.length; i++)
    (contentDescription[t].firstChild.textContent = ""),
      (contentDate[t].textContent = date + " October"),
      date--;
}),
  eventsBtn.addEventListener("click", function () {
    toggleMap(),
      (capital.textContent = "Events"),
      capital.classList.add("capitalChange");
    for (let i = 0; i < feedArticlesMap.length; i++)
      contentDescription[i].prepend(eventLocation),
        (contentDate[i].textContent = "13 October");
  }),
  button1.addEventListener("click", function () {
    toggleMap();
  });
