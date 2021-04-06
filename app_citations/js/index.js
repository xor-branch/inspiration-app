const quote = document.getElementById('quote_content');
const author = document.getElementById('quote_author');
const picture = document.getElementById('pic');

const getQuote = () => {
    fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
          quote.innerHTML = data.content
          author.innerHTML = data.author
    });

};

quote.addEventListener('click', () => getQuote());
getQuote();

