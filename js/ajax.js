const btn = document.querySelector("get-quotes");

btn.addEventListener("click", getQuotes);

function getQuotes(e) {
  e.preventDefault();
  
  const https = new XMLHttpRequest();

  https.open("GET", "https://type.fit/api/quotes", true)
  https.onload = function() {

  }

  https.send();
}