let button = document.querySelector("button");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");


const fetchQuote = async() => {
    const response = await fetch('https://quotable.io/random')
    const data = await response.json();
    const quote = data.content;
    const author = data.author
    h1.innerText = quote;
    p.innerText = author;
}

button.addEventListener("click" , fetchQuote)