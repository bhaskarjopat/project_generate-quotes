function generate() {
    var quotes = {
        "– William Shakespeare" : "To be, or not to be, that is the question.",
        "– Albert Einstein" : "In the middle of difficulty lies opportunity.",
        "– Mahatma Gandhi" : "You must be the change you wish to see in the world.",
        "– Franklin D. Roosevelt" : "The only thing we have to fear is fear itself.",
        "– Nelson Mandela" : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "– Eleanor Roosevelt" : "If life were predictable it would cease to be life, and be without flavour.",
        "– John Lennon" : "Life is what happens when you’re busy making other plans.",
        "– Friedrich Nietzsche" : "That which does not kill us makes us stronger.",
        "– René Descartes" : "I think, therefore I am."
    }

    let authors = Object.keys(quotes);
    console.log(authors);
    let author = authors[Math.floor(Math.random()*authors.length)];
    console.log(author);

    let quote = quotes[author];
    console.log(quote);

    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
}