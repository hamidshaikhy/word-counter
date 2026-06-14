const textareaEl = document.querySelector(".textarea");
const NumberOfCharachter = document.querySelector(".characters");
const Words = document.querySelector(".word");
const Twitter = document.querySelector(".twitter");
const Facebook = document.querySelector(".facebook");

const InputHandler = () => {
  let NumberOfWords = textareaEl.value.split(' ').length;
  const NumberOfCharachterEl = textareaEl.value.length;
  const TwitterCharachterLeft = 280 - NumberOfCharachterEl;
  const FacebookCharachterLeft = 2200 - NumberOfCharachterEl;

  if (TwitterCharachterLeft < 0) {
    Twitter.classList.add("state-number-limit");
  } else {
    Twitter.classList.remove("state-number-limit");
  }
  if (FacebookCharachterLeft < 0) {
    Facebook.classList.add("state-number-limit");
  } else {
    Facebook.classList.remove("state-number-limit");
  }
  NumberOfCharachter.textContent = NumberOfCharachterEl;
  Twitter.textContent = TwitterCharachterLeft;
  Facebook.textContent = FacebookCharachterLeft;
  Words.textContent = NumberOfWords;
};

textareaEl.addEventListener("input",InputHandler);
