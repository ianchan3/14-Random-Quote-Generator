const btn = document.querySelector(".get-quotes");

btn.addEventListener("click", getQuotes);
const numberOfQuotes = document.getElementById("number");

function getQuotes(e) {
  e.preventDefault();
  
  if (numberOfQuotes.value.length === 0) {
    return alert("Please enter a number");
  } else {
    const https = new XMLHttpRequest();

  https.open("GET", "https://type.fit/api/quotes", true)
  https.onload = function() {
    if (this.status === 200) {

      const response = shuffleQuotes(JSON.parse(this.responseText));
      let output = ""
        for (let i=0; i < response.length; i++) {
            if (i == numberOfQuotes.value) {
              break;
            } else {
            output += `
                <li>Quote:  ${response[i].text}</li>
                <li>Author: ${response[i].author}</li>
                <hr>
            `;
          }
        }
      

      document.querySelector(".quotes").innerHTML = output;
    }
  }

  https.send();
  }

}


function shuffleQuotes(quotes) {
  let CI = quotes.length, tempValue, randomIndex;

  while (CI > 0) {
    randomIndex = Math.floor(Math.random() * CI);
    CI--;
    tempValue = quotes[CI];
    quotes[CI] = quotes[randomIndex];
    quotes[randomIndex] = tempValue;

}
  return quotes;
}