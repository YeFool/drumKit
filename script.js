const sounds = {
  q: boomAudio,
  Q: boomAudio,
  w: clapAudio,
  W: clapAudio,
  e: hiHatAudio,
  E: hiHatAudio,
  r: kickAudio,
  R: kickAudio,
  t: openHatAudio,
  T: openHatAudio,
  y: rideAudio,
  Y: rideAudio,
  u: snareAudio,
  U: snareAudio,
  i: tinkAudio,
  I: tinkAudio,
  o: tomAudio,
  O: tomAudio,
};

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (sounds[key]) {
    sounds[key].play();
  }
});


const buttons = document.querySelectorAll("button")

buttons.forEach(button => {
    buttonBoom.addEventListener("click", () => {
      boomAudio.play();
    });
    buttonClap.addEventListener("click", () => {
        clapAudio.play();
      });
      buttonHiHat.addEventListener("click", () => {
        hiHatAudio.play();
      });
      buttonKick.addEventListener("click", () => {
        kickAudio.play();
      });
      buttonOpenHat.addEventListener("click", () => {
        openHatAudio.play();
      });
      buttonRide.addEventListener("click", () => {
        rideAudio.play();
      });
      buttonSnare.addEventListener("click", () => {
        snareAudio.play();
      });
      buttonTink.addEventListener("click", () => {
        tinkAudio.play();
      });
      buttonTom.addEventListener("click", () => {
        tomAudio.play();
      });
  });


  