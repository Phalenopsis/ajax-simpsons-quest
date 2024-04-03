function fetchSimpsonsQuoteJSON() {
    const url = `https://thesimpsonsquoteapi.glitch.me/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data; // response.data instead of response.json() with fetch
      })
      .then(function(data) {
        console.log('data decoded from JSON:', data[0]);
  
        // Build a block of HTML
        
        const simpsonsQuoteHtml = `
          
          <blockquote>${data[0].quote}
          <p class="right"><strong>${data[0].character}</strong></blockquote></p>
          <img src="${data[0].image}" />
        `;
        document.querySelector('#simpsons').innerHTML = simpsonsQuoteHtml;
        
      });
  }
  
  fetchSimpsonsQuoteJSON();

  const search = document.getElementById("search");
  search.addEventListener('click', fetchSimpsonsQuoteJSON);