const clockContainer = document.querySelector(".clock-container");

clockContainer.innerHTML = `
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

const updateClock = () => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  hoursNumber = hours;
  minutesNumber = minutes;
  secondsNumber = seconds;

  clockContainer.querySelector(".hours-number").textContent = hours;
  clockContainer.querySelector(".minutes-number").textContent = minutes;
  clockContainer.querySelector(".seconds-number").textContent = seconds;
};

setInterval(updateClock, 1000);
