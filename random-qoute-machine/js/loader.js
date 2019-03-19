import {arrayRandElement} from './utils';
import {domElements} from './dom-elements';

export const loader = () => {
  const SERVER_URL = `https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json`;

  const getQuote = () => {
    fetch(SERVER_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        showQuote(data);
      })
      .catch(() => {
        throw new Error(`Ошибка загрузки данных`);
      });
  };

  const showQuote = (quote) => {
    domElements.quoteText.textContent = arrayRandElement(quote).quote;
    domElements.quoteAuthor.textContent = arrayRandElement(quote).author;
    domElements.tweetButton.setAttribute(`href`, `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${arrayRandElement(quote).quote}`);
  };


  domElements.newQuoteButton.addEventListener(`click`, getQuote);

  getQuote();

};
