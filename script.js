const roles = [
  "Python Developer",
  "Java Developer",
  "Web Developer",
  "BCA Student",
];

let role = 0;
let letter = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type() {
  const word = roles[role];

  if (!deleting) {
    typing.textContent = word.substring(0, letter++);

    if (letter > word.length) {
      deleting = true;

      setTimeout(type, 1200);

      return;
    }
  } else {
    typing.textContent = word.substring(0, letter--);

    if (letter < 0) {
      deleting = false;

      role++;

      if (role >= roles.length) {
        role = 0;
      }
    }
  }

  setTimeout(type, deleting ? 60 : 120);
}

type();

const btn = document.getElementById("theme-btn");

btn.onclick = () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
};

const cards = document.querySelectorAll(".card,.project");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";

      entry.target.style.transform = "translateY(0)";
    }
  });
});

cards.forEach((card) => {
  card.style.opacity = "0";

  card.style.transform = "translateY(40px)";

  card.style.transition = ".8s";

  observer.observe(card);
});
