function submit() {
  let värde = 0;

  let poäng = document.querySelectorAll("input[type='radio']:checked");

  for (let index = 0; index < poäng.length; index++) {
    värde += parseInt(poäng[index].value);
  }

  document.querySelector(".calculate").innerHTML = värde;

  document.querySelector(".result").classList.toggle("invisible");
  document.querySelector(".questions").classList.toggle("invisible");
}

function reset() {
  document.querySelector(".result").classList.toggle("invisible");
  document.querySelector(".questions").classList.toggle("invisible");

  document.querySelector(".questions").reset();
}

