const weddingDate = new Date("2025-07-06T00:00:00");
const countdownEl = document.getElementById("countdown-days");

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    countdownEl.innerText = `${days} Days To Go!`;
  } else {
    countdownEl.innerText = "It's Wedding Day!! 🎉";
  }
}

updateCountdown();
setInterval(updateCountdown, 86400000); // update daily
