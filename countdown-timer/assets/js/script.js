function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { total, days, hours, minutes, seconds };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const days = clock.querySelector(".days");
  const hours = clock.querySelector(".hours");
  const minutes = clock.querySelector(".minutes");
  const seconds = clock.querySelector(".seconds");

  function updateClock() {
    const t = getTimeRemaining(endtime);

    days.textContent = t.days.toString().padStart(2, "0");
    hours.textContent = t.hours.toString().padStart(2, "0");
    minutes.textContent = t.minutes.toString().padStart(2, "0");
    seconds.textContent = t.seconds.toString().padStart(2, "0");

    if (t.total <= 0) {
      clearInterval(timeinterval);
      days.textContent =
        hours.textContent =
        minutes.textContent =
        seconds.textContent =
          "00";
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

// Example deadline: 7 days from now
const deadline = new Date(Date.parse(new Date()) + 7 * 24 * 60 * 60 * 1000);
initializeClock("clock", deadline);
