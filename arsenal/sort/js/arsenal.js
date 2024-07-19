/*
MIT License

Copyright (c) 2024 Seungeun Lee

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

function preloadImages(players) {
    players.forEach(player => {
        const img = new Image();
        img.src = player.img;
    });
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let shuffledPlayers = shuffle(players);

let options1 = shuffledPlayers.slice();
let options2 = [];
let step = 1;
let step2 = 0;
const results = {};
let currentClicks = 0;
const totalClicks = 25;

window.addEventListener('load', () => {
    preloadImages(players);
    showNextPlayers();
});

function handler(player) {
    selectWinner(player);
    currentClicks++;
    updateProgressBar();
}


function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const progressPercent = Math.round((currentClicks / totalClicks) * 100);
    progressBar.style.width = progressPercent + '%';
    progressBar.textContent = progressPercent + '%';
}

function showNextPlayers() {
    const player1Button = document.getElementById('player1-button');
    const player2Button = document.getElementById('player2-button');
    const player1Image = document.getElementById('player1-image');
    const player1Name = document.getElementById('player1-name');
    const player2Image = document.getElementById('player2-image');
    const player2Name = document.getElementById('player2-name');
    let player1 = options1.pop();
    let player2 = options1.pop();

    if (!player1) {
        if (options2.length === 1) {
            showResult(options2[0]);
            return;
        }

        step++;
        options1 = options2.slice();
        options2 = [];
        return showNextPlayers();
    }

    if (!player2) {
        options2.push(player1);
        return showNextPlayers();
    }

    if (!player1 || !player2) {
        if (options2.length === 1) {
            results.winner = options2[0].name;
            results.winnerImage = options2[0].img;
            showResult(options2[0]);
            return;
        }

        step++;
        step2 = 0;
        options1 = [...options2];
        options2 = [];

        // console.log('options1', options1);
        // console.log('options2', options2);

        player1 = options1.pop();
        player2 = options1.pop();
    }

    player1Image.src = player1.img;
    player1Name.textContent = player1.name;
    player2Image.src = player2.img;
    player2Name.textContent = player2.name;

    player1Button.onclick = () => handler(player1);
    player2Button.onclick = () => handler(player2);

    updateProgressBar();
}

function selectWinner(winner) {
    options2.push(winner);
    showNextPlayers();
}

function showResult(winner) {
    window.location.href = `result.html?winner-image=${encodeURIComponent(winner.img)}&winner-name=${encodeURIComponent(winner.name)}`;
}

showNextPlayers();