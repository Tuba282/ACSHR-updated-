AOS.init({
  duration: 1500,
  delay: 0,
});
// ------------------  Navbar ------------------
window.addEventListener("scroll", () => {
  const container = document.getElementById("navbar");
  let scrollY = window.scrollY;
  let triggredHeight = 100;

  if (scrollY > triggredHeight) {
    container.classList.add("changeColor");
  } else {
    container.classList.remove("changeColor");
  }
});
// ------------------  Navbar overLay------------------
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

// ------------------  Date and Month setup------------------
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

// ------------------  picture cards ------------------

const images = [
  {
    name: "Engaging with Children",
    imageUrl:
      "../aseets/imgs/acshr-\(10\).jpg",
  },
  {
    name: "Teamwork Game Activity",
    imageUrl:
      "../aseets/imgs/acshr-\(20\).jpg",
  },
  {
    name: "meeting with different NGOs",
    imageUrl:
      "../aseets/imgs/acshr-\(22\).jpg",
  },
  {
    name: "Distributing Of Treats",
    imageUrl:
      "../aseets/imgs/usAid-\(7\).jpg",
  },
  {
    name: "Joyful Positive Environment",
    imageUrl:
      "../aseets/imgs/shelter-(17).jpg",
  },
  {
    name: "Volunteers in Dress",
    imageUrl:
      "../aseets/imgs/acshr-\(11\).jpg",
  },
  {
    name: "Encouraging Children Participation",
    imageUrl:
      "../aseets/imgs/acshr-\(12\).jpg",
  },
  {
    name: "Spread positive shadow",
    imageUrl:
      "../aseets/imgs/shelter-(18).jpg",
  },
  {
    name: "Stronger Connected Community",
    imageUrl:
      "../aseets/imgs/usAid-\(12\).jpg",
  },
  {
    name: "Visit of Mr. Bilawal Bhutto Zardari",
    imageUrl:
      "../aseets/imgs/acshr-\(23\).jpg",
  },
  {
    name: "NFIs Distribution in the Mehar",
    imageUrl:
      "../aseets/imgs/usAid-\(17\).jpg",
  },
  {
    name: "Orientation Session of 'Bol Utho' Project",
    imageUrl:
      "../aseets/imgs/acshr-\(24\).jpg",
  },
  {
    name: "NFIs Distribution in KN Shah districts of Dadu",
    imageUrl:
      "../aseets/imgs/acshr-\(4\).jpg",
  },
  {
    name: "Sharing Caring Moments",
    imageUrl:
      "../aseets/imgs/acshr-\(16\).jpg",
  },
];
const mainGallery = document.querySelector(".mainGallery");
images.forEach((image, ind) => {
  const pictCard = document.createElement("div");
  pictCard.setAttribute("class", `pictCard  pictCard-${ind + 1}`);
  pictCard.setAttribute("data-aos", `fade-up`);
  pictCard.setAttribute("data-aos-duration", `1000`);
  
  if (ind % 2 === 0) {
    pictCard.classList.add("even");
  } else {
    pictCard.classList.add("odd");
  }
  pictCard.innerHTML = `
              <img src="${image.imageUrl}" class="img">
              <p class="title">${image.name}</p>
  `;
  mainGallery.appendChild(pictCard);
});

// ------------------  tooltips ------------------
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
