let quotes = [
    "Learn from yesterday, live for today, hope for tomorrow.",
    "The best preparation for tomorrow is doing your best today.",
    "What you do today can improve all your tomorrows.",
    "Never give up.",
    "Someone is sitting in the shade today because someone planted a tree a long time ago.",
    "Today, be the real you!",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "The way to get started is to quit talking and begin doing. -Walt Disney",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
    "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. -John Lennon"

]

function getQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length)
    document.getElementById('newQuoteSection').innerHTML = quotes[randomNumber];
}