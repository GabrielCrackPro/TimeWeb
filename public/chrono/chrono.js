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
`;
const clockText = document.querySelectorAll(".clock-container p");

clockText.forEach((text) => {
  text.classList.add("fw-bold");
});
