const btn = document.querySelector(".get-quotes");
btn.addEventListener("click", getQuotes);
const numberOfQuotes = document.getElementById("number");
const URL = "https://type.fit/api/quotes";


function getQuotes(e) {
  e.preventDefault();

  if (numberOfQuotes.value.length === 0) {
    return alert("Please enter a number");
  } else {
    fetch(URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      data = shuffleQuotes(data);
      let output = "";
      
      for (let i=0; i < data.length; i++) {
        if (i == numberOfQuotes.value) {
          break;
        }
        output += `
            <li>Quote:  ${data[i].text}</li>
            <li>Author: ${data[i].author}</li>
            <hr>
        `;
        }
        document.querySelector(".quotes").innerHTML = output;
      })
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
  }