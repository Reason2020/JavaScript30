function playSound(e) {
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"`); //Selects the audio with the appropriate keyCode
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  if (!audio) return; //Stops the function from running all together
  audio.currentTime = 0; //rewind to the start
  audio.play(); //Plays the audio with the appropriate keyCode
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip if it's not a transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
window.addEventListener("keydown", playSound);
