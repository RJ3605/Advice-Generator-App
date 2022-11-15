import FetchWrapper from "./fetch-wrapper.js";

const reroll = document.querySelector("#dice");
const idNumber = document.querySelector(`#title`);
const text = document.querySelector(`#text`);
const API = new FetchWrapper(`https://api.adviceslip.com`);

const newAdvice = () =>
  API.get(`/advice`).then((data) => {
    text.textContent = `"${data.slip.advice}"`;
    idNumber.textContent = `ADVICE # ${data.slip.id}`;
  });

newAdvice();

reroll.addEventListener(`click`, () => {
  newAdvice();
});
