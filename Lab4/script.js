// 2-	On the same page, Make a button (Start clock),
//  that showing alert saying “Clock Started”
// and displays clock with current time
//  in local format (time only without date) in a div updated every second.
// a.	Handle the onclick event of the (start clock)
//  button using JavaScript (Not in the input tag).
// b.	Stop the clock when user clicks (alt + w) letter, and show alert saying “Clock stopped”.

let clockInterval = null;

// Start clock button
document.getElementById("clockBtn").onclick = function () {
  alert("Clock Started");

  // prevent starting multiple clocks
  if (clockInterval !== null) return;

  clockInterval = setInterval(() => {
    const time = new Date().toLocaleTimeString();
    document.getElementById("clockContent").innerText = time;
  }, 1000);
};

// Stop clock using Alt + W
document.addEventListener("keydown", function (event) {
  if (event.altKey && event.key.toLowerCase() === "w") {
    if (clockInterval !== null) {
      clearInterval(clockInterval);
      clockInterval = null;
      alert("Clock stopped");
    }
  }
});

// 5-	Make a link that on its onClick event opens new advertising window after 3 seconds,
//  and write long paragraphs on it.
//  Also, make another link that closes this page.
//  (Note that the browser may block the opening of the new window;
//  make sure that you allow this page to open popups in your browser)

document.getElementById("openAdLink").onclick = function() {
  setTimeout(() => {
    window.open("./ad.html", "_blank");
  }, 3000);
};

document.getElementById("closeAdLink").onclick = function() {
  window.close();
};