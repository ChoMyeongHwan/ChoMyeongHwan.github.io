const quotes = [
  {
    quote:
      "A great secret of success is to go through life as a man who never gets used up.",
    author: "Albert Schweitzer",
  },
  {
    quote: "We know what we are, but not what we may be.",
    author: "William Shakespeare",
  },
  {
    quote: "Nothing is permanent in this wicked world - not even our troubles.",
    author: "Charlie Chaplin",
  },
  {
    quote:
      "Indolence is a delightful but distressing state; we must be doing something to be happy.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Nothing great in the world has been accomplished without passion.",
    author: "Georg Wilhelm",
  },
  {
    quote: "I'd rather be hated for who I am than be loved for who I'm not.",
    author: "Kurt Cobain",
  },
  {
    quote: "I'm as proud of what we don't do as I am of what we do.",
    author: "Steve Jobs",
  },
  {
    quote: "Life is either a daring adventure or nothing.",
    author: "Helen Keller",
  },
  {
    quote: "True life is lived when tiny changes occur.",
    author: "Leo Tolstoy",
  },
  {
    quote: "Time is the most valuable thing a man can spend.",
    author: "Theophrastus",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
