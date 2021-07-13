const quotes = [
    {
      quote: "바보는 방황하고, 현명한 사람은 여행한다",
      author: "-풀러-",
    },
    {
      quote: "여행은 언제나 돈의 문제가 아니고 용기의 문제다",
      author: "- 파울로 코엘료-",
    },
    {
      quote:
        "여행은 사람을 순수하게, 그러나 강하게 만든다.",
      author: " -서양속담- ",
    },
    {
      quote: "세계는 한 권의 책이다. 여행하지 않는 자는 그 책의 단지 한 페이지만을 읽을 뿐이다.",
      author: "-성 아우구스티누스-",
    },
    {
      quote: "To Travel is to Live",
      author: "- 안데르센 -",
    },
    {
      quote: "행복하게 여행하려면 가볍게 여행해야한다",
      author: "- 앙투앙 드 생텍쥐베리-",
    },
    {
      quote: "목적지에 닿아야 행복해지는것이 아니라 여행하는 과정에서 행복을 느끼는것이다",
      author: "-엔드류 메튜-",
    },
    {
      quote: "1년중 한번은 당신이 단 한번도 가보지 못한 곳에 가 보아라",
      author: "- 달라이 라마 -",
    },
    {
      quote: "세상을 움직이고 싶은자는, 먼저, 본인부터 움직여야 한다",
      author: "-Socrates-",
    },
    {
      quote: "오늘 갈 여행을 내일로 미루지 마라",
      author: "-여행에 미치다-",
    },
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;