window.onload = () => {
  tsParticles.load("tsparticles", {
    particles: {
      shape: {
        type: "image",
        image: {
          src: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
          width: 20,
          height: 20
        }
      },
      color: {
        value: "#ff4d6d"
      },
      number: {
        value: 100,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "top",
      },
      opacity: {
        value: 0.6,
      },
      size: {
        value: 12,
      }
    }
  });
};

const yesBtn = document.getElementById("yesBtn");
const loveBox = document.getElementById("loveBox");
const buttons = document.querySelector(".buttons");

yesBtn.addEventListener("click", () => {
  buttons.style.display = "none";
  loveBox.classList.add("show");
});

const noBtn = document.getElementById("noBtn");

let scaleYes = 1;

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  scaleYes += 1;
  yesBtn.style.transform = `scale(${scaleYes})`;
});

const question = document.getElementById("question");

yesBtn.addEventListener("click", () => {
  buttons.style.display = "none";
  question.style.display = "none";
  loveBox.classList.add("show");
})