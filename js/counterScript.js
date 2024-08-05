const counter = document.querySelector('.counter-number');

async function updateCounter() {
    let response = await fetch('https://npc62a67a3u2nwq734pqkhi2fq0baike.lambda-url.us-east-1.on.aws/')
    let data = await response.json();
    counter.innerHTML = data
}

updateCounter()