function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; // Convert 0 -> 12 for 12 AM
  const timeString = `${hours}:${minutes}:${seconds} ${period}`;

  document.getElementById("clock").textContent = timeString;
}

// Initial call + interval
updateClock();
setInterval(updateClock, 1000);
