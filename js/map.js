  const mapHeader = document.getElementById("map")
  const toHide = document.getElementById("to-hide");
  const hiddenToShow = document.getElementById("hidden1")
  const main = document.querySelector(".feed");
  const figure = document.getElementById("transform1");
  const titleEvent = document.querySelectorAll(".title-event");
  const checkBoxes = document.querySelectorAll(".temple input[type=checkbox]");
  const label = document.querySelector("#check2 + label")
  const authors = document.querySelectorAll(".author");
  const eventsBtn = document.getElementById("events");
  const searchBtn = document.getElementById("search");
  const button1 = document.getElementById("button1");
  const feedTranslate = document.querySelector(".feed");
  const capital = document.getElementById("capital");
  
  
  function toggle() {
    toHide.classList.toggle("hidden");
    hiddenToShow.classList.toggle("hidden");

    if (eventsBtn.checked == 1) {
       label.classList.add("add");
       figure.classList.add("figure-add");
       feedTranslate.classList.add("translate")
    } else {
       label.classList.remove("add");
       figure.classList.remove("figure-add");
       feedTranslate.classList.remove("translate")
    }
            
    let lastDate = 13; 

    for (let i = 0; i <  authors.length; i++) {
      if (eventsBtn.checked == 1) { 
      authors[i].classList.add('author-transform');
      authors[i].textContent = '13 October'
      titleEvent[i].classList.add("title-event-transform");
      checkBoxes[i].checked = true
    } else {
      authors[i].classList.remove('author-transform');
      authors[i].textContent = lastDate + ' October';
      checkBoxes[i].checked = false;
      titleEvent[i].classList.remove("title-event-transform");
      lastDate--
       }
    }  
 }
 
searchBtn.addEventListener('click', function () { 
      toggle();
      titleEvent[0].classList.add("title-event-special")
      checkBoxes[1].checked =true;
      capital.textContent = "Amsterdam";
      capital.classList.remove("capitalChange")
           });

eventsBtn.addEventListener('click', function () { 
             toggle();
             titleEvent[0].classList.remove("title-event-special")
             capital.textContent = "Events"; 
             capital.classList.add("capitalChange")
        });

button1.addEventListener('click', function () { 
                toggle()
           });