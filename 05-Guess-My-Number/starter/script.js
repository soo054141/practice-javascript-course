"use strict";

// console.log(document.querySelector(".message").textContent);

let answer = Math.floor(Math.random() * (21 - 1) + 1);
let score = 20;
let highScore = 0;
// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".number").textContent = 13;

const reset = () => {
  answer = Math.floor(Math.random() * (21 - 1) + 1);
  score = 20;
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
};

const clickedCheckBtn = () => {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess || guess < 0 || guess > 20) {
    return alert("1~20 사이의 숫자를 입력하세요");
  }

  if (answer > guess) {
    document.querySelector(".message").textContent = "UP 👍";
    score--;
  }
  if (answer < guess) {
    document.querySelector(".message").textContent = "DOWN 👎";
    score--;
  }
  if (answer === guess) {
    if (highScore < score) highScore = score;
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = answer;
    document.querySelector(".highscore").textContent = highScore;
  }
  document.querySelector(".score").textContent = score;
};

const onClickAgainBtn = () => {
  reset();
};

document.querySelector(".check").addEventListener("click", clickedCheckBtn);
document.querySelector(".again").addEventListener("click", onClickAgainBtn);
