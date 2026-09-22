const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const amPm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;
  const formattedHours = String(hours).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  if (timeElement) {
    timeElement.textContent = `${formattedHours}:${minutes}:${seconds}`;
  }

  if (dateElement) {
    dateElement.textContent = `${now.toLocaleDateString([], {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    })} · ${amPm}`;
  }
}

updateClock();
setInterval(updateClock, 1000);
