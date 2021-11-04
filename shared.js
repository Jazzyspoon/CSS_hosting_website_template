let backdrop = document.querySelector(".backdrop");
let selectPlanButton = document.querySelectorAll(".plan button");
let modal = document.querySelector(".modal");
let closeModal = document.querySelector(".modal__action--negative");
let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

// console.dir(backdrop.style["background-image"]);

for (let i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", function () {
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  close();
});

if (closeModal) {
  closeModal.addEventListener("click", close);
}

function close() {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", function () {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
