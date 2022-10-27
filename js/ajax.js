const btn = document.querySelector(".get-quotes");

btn.addEventListener("click", getQuotes);

function getQuotes(e) {
  e.preventDefault();
  
  const https = new XMLHttpRequest();

  https.open("GET", "https://type.fit/api/quotes", true)
  https.onload = function() {
    if (this.status === 200) {

      const response = JSON.parse(this.responseText);
      let output = ""
      response.forEach(function(quote) {
        output += `
            <li>Quote: ${quote.text}</li>
            <li>Author: ${quote.author}</li>
            <hr>
        `
      })
      document.querySelector(".quotes").innerHTML = output;
    }
  }

  https.send();
}