function updateDigitalClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const digitalClock = document.getElementById("digital-clock");
  digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateDigitalClock, 1000);
