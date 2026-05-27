const introScreen =
document.getElementById("introScreen");

const roomScreen =
document.getElementById("roomScreen");

const poemScreen =
document.getElementById("poemScreen");

const enterBtn =
document.getElementById("enterBtn");

const poemText =
document.getElementById("poemText");

const backBtn =
document.getElementById("backBtn");

const poemBackground =
document.querySelector(".poemBackground");

/* POEMAS */

const poems = {

  1:{

    background:
    "linear-gradient(to bottom, #1a1a2e, #000000)",

    text:`

ESCREVA O POEMA 1 AQUI

`
  },

  2:{

    background:
    "linear-gradient(to bottom, #101820, #000000)",

    text:`

ESCREVA O POEMA 2 AQUI

`
  },

  3:{

    background:
    "linear-gradient(to bottom, #2a1a1a, #000000)",

    text:`

ESCREVA O POEMA 3 AQUI

`
  }

};

/* COMEÇAR */

enterBtn.onclick = () => {

  introScreen.classList.add("hidden");

  roomScreen.classList.remove("hidden");
};

/* PORTAS */

const doors =
document.querySelectorAll(".door");

doors.forEach(door => {

  door.onclick = () => {

    const poemId =
    door.dataset.poem;

    openPoem(poemId);
  };

});

/* ABRIR POEMA */

function openPoem(id){

  roomScreen.classList.add("hidden");

  poemScreen.classList.remove("hidden");

  poemText.textContent = "";

  poemBackground.style.background =
  poems[id].background;

  typeWriter(poems[id].text);
}

/* ESCREVER */

function typeWriter(text){

  let index = 0;

  const speed = 30;

  function type(){

    if(index < text.length){

      poemText.textContent +=
      text.charAt(index);

      index++;

      setTimeout(type, speed);
    }
  }

  type();
}

/* VOLTAR */

backBtn.onclick = () => {

  poemScreen.classList.add("hidden");

  roomScreen.classList.remove("hidden");
};

/* PARTÍCULAS */

const particles =
document.querySelector(".particles");

for(let i = 0; i < 40; i++){

  const particle =
  document.createElement("span");

  particle.style.left =
  Math.random() * 100 + "vw";

  particle.style.animationDuration =
  8 + Math.random() * 10 + "s";

  particle.style.opacity =
  Math.random();

  particles.appendChild(particle);
}
