const navSlide = () => {
  const menu = document.querySelector(".menu-btn");
  const navBar = document.querySelector(".navigation-two");
  const navBarLinks = document.querySelectorAll(".navigation-two li");

  menu.addEventListener("click", () => {
    navBar.classList.toggle("nav-active");

    navBarLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    menu.classList.toggle("toggle");
  });
};

navSlide();
