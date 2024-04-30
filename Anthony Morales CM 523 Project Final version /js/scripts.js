

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function navigateRandom() {
    // Generate a random number between 0 and 99
    var randomNumber = getRandomInt(0, 99);
    console.log("aslashjdasljd")
    // Redirect to the appropriate page based on the random number
    if (randomNumber < 33) {
        window.location.href = 'gutter.html';
    } else if (randomNumber < 66) {
        window.location.href = 'medium.html';
    } else {
        window.location.href = 'strike.html';
    }
}

document.getElementById('randomButton').addEventListener('click', navigateRandom);
