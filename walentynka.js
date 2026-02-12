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
      color: { value: "#ff4d6d" },
      number: { value: 100 },
      move: { enable: true, speed: 2, direction: "top" },
      opacity: { value: 0.6 },
      size: { value: 12 }
    }
  });


  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const loveBox = document.getElementById("loveBox");
  const buttons = document.querySelector(".buttons");
  const question = document.getElementById("question");

  let scaleYes = 1;


  yesBtn.addEventListener("click", () => {
    buttons.style.display = "none";
    question.style.display = "none";
    loveBox.classList.add("show");

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  });


  function escapeNo() {
    const margin = 20;
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - margin*2) + margin;
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - margin*2) + margin;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    scaleYes += 0.2;
    yesBtn.style.transform = `scale(${scaleYes})`;
  }

  noBtn.addEventListener("mouseenter", escapeNo);
  noBtn.addEventListener("touchstart", escapeNo);
};
