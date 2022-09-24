const rollDice = document.querySelector(".rolldice");
const AdviceNum = document.querySelector("#advice-num");
const AdviceText = document.querySelector("#advice-text");


function loadQuotes() {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            AdviceNum.textContent = response.slip.id;
            AdviceText.textContent = `"${response.slip.advice}"`;
        });
}

window.onload = loadQuotes
rollDice.addEventListener("click", loadQuotes);