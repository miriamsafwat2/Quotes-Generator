function generateQuotes() {
  let url = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";
  fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      let txtQuote = document.getElementById("txtQuote");
      console.log(data);
      txtQuote.innerHTML = '<span><i class="fas fa-quote-left"></i></span> '
			+ data.quotes[0].text
			+ " ~" + data.quotes[0].author;
    })
    .catch(function(error) {
      console.log(error);
    });
}

function tweet(){
  let twitterLink = document.getElementsByClassName("twitter-share-button")[0];
  let txtQuote = document.getElementById("txtQuote");
  twitterLink.href += txtQuote.innerText;
}
