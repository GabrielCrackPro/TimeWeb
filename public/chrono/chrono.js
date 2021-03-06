const chronoContainer = document.querySelector(".chrono-container");

chronoContainer.innerHTML = `
<div class="hours p-2">
<p class="hours-number text-center">0</p>
<p class="hours-text">Hours</p>
</div>
<div class="minutes p-2">
<p class="minutes-number text-center">0</p>
<p class="minutes-text">Minutes</p>
</div>
<div class="seconds p-2">
<p class="seconds-number text-center">0</p>
<p class="seconds-text">Seconds</p>
</div>
<div class="chrono-buttons d-flex position-absolute">
<button class="btn btn-light  play-btn">Play</button>
<button class="btn btn-light stop-btn">Stop</button>
<button class="btn btn-light reset-btn">Reset</button>
</div>
`;
const chronoText = document.querySelectorAll(".chrono-container p");
const chronoButtons = document.querySelectorAll(".chrono-buttons button");

chronoText.forEach((text) => {
  text.classList.add("fw-bold");
});
chronoButtons.forEach((button) => {
  button.classList.add("me-2");
});
