// ------------------ 9. AOS------------------
AOS.init({
  duration: 1500,
  delay: 0,
});

document.addEventListener("DOMContentLoaded", () => {
  // ------------------ 1. Navbar ------------------
  window.addEventListener("scroll", () => {
    const container = document.getElementById("navbar");
    let scrollY = window.scrollY;
    let triggredHeight = -5;

    if (scrollY > triggredHeight) {
      container.classList.add("changeColor");
    } else {
      container.classList.remove("changeColor");
    }
  });

  // ------------------ 2. Navbar overLay------------------
  const overLay = document.querySelector(".overLay");
  const cross = document.getElementById("cross");
  const bar = document.getElementById("bar");

  bar.addEventListener("click", () => {
    overLay.classList.add("show");
    cross.classList.add("show");
  });

  cross.addEventListener("click", () => {
    overLay.classList.remove("show");
    cross.classList.remove("show");
  });
  // ------------------ 5. Date and Month setup------------------
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const now = new Date();
  const getDate = now.getDate();
  const getMonth = now.getMonth();
  const getYear = now.getFullYear();
  document
    .querySelectorAll(".month")
    .forEach((ele) => (ele.textContent = months[getMonth]));
  document
    .querySelectorAll(".date")
    .forEach((ele) => (ele.textContent = getDate));
  document
    .querySelectorAll(".year")
    .forEach((ele) => (ele.textContent = getYear));



  function initializeTooltips() {
    const classes = document.querySelectorAll(
      ".google, .linkedin, .facebook, .tiktok"
    );
    classes.forEach((cls) => {
      const classContent = cls.classList.contains("google")
        ? "Google"
        : cls.classList.contains("linkedin")
          ? "Linkedin"
          : cls.classList.contains("facebook")
            ? "Facebook"
            : cls.classList.contains("tiktok")
              ? "Twitter"
              : "";
      tippy(cls, {
        content: classContent,
        theme: "light",
      });
    });
  }
  initializeTooltips();
});
