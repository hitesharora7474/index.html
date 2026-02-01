function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s =>
    s.classList.remove("active")
  );
  document.getElementById(id).classList.add("active");
}

document.getElementById("yesBtn").onclick = () =>
  showScreen("screen-yes");

document.getElementById("nextBtn").onclick = () =>
  showScreen("screen-final");

document.getElementById("restartBtn").onclick = () =>
  showScreen("screen-ask");

// No button moving
const noBtn = document.getElementById("noBtn");
const playArea = document.getElementById("playArea");

let count = 0;

noBtn.addEventListener("mouseenter", () => {
  count++;

  let maxX = playArea.clientWidth - noBtn.offsetWidth;
  let maxY = playArea.clientHeight - noBtn.offsetHeight;

  let x = Math.random() * maxX;
  let y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  if (count > 8) {
    noBtn.innerText = "Fine 😒";
    noBtn.style.position = "static";
  }
});
