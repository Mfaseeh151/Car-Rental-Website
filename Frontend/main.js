const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle navigation menu open/close
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close navigation menu on link click
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__form form", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".about__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Tabs functionality for deals section
const tabs = document.querySelector(".deals__tabs");

tabs.addEventListener("click", (e) => {
  const tabContents = document.querySelectorAll(
    ".deals__container .tab__content"
  );
  Array.from(tabs.children).forEach((item) => {
    if (item.dataset.id === e.target.dataset.id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  tabContents.forEach((item) => {
    if (item.id === e.target.dataset.id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

ScrollReveal().reveal(".choose__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".choose__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".choose__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".choose__card", {
  duration: 1000,
  delay: 1500,
  interval: 500,
});
ScrollReveal().reveal(".subscribe__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".subscribe__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".subscribe__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".subscribe__content form", {
  ...scrollRevealOption,
  delay: 1500,
});

// Initialize Swiper for carousel
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});
ScrollReveal().reveal(".swiper-slide .client__card", {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  interval: 200,
});

// Open modal function
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "block";
  }
}

// Close modal function
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
  }
}

// Handle modal form submissions
const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");

// Login form submit handler
signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signInEmail").value;
  const password = document.getElementById("signInPassword").value;

  // Simulate login process
  console.log(`Login attempt with email: ${email} and password: ${password}`);
  closeModal("signInModal");
});

// Sign-up form submit handler
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("signUpUsername").value;
  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;

  // Simulate sign-up process
  console.log(
    `Sign-up attempt with username: ${username}, email: ${email}, and password: ${password}`
  );
  closeModal("signUpModal");
});