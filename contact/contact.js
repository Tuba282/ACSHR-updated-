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

// ------------------ Contact  Branches------------------
const branches = [
  {
    city: "District Office",
    name: "Dadu",
    phone: "0333-7335483",
    src: "../aseets/letters-contact/letter-d.png",
    focal_person: "Muhammad Ashraf",
    email: "www.acshr.org.pk",
    location: "House No. 102, Soomra Muhallah, Phulji Station, District Dadu.",
  },
  {
    city: "District Office",
    name: "Badin",
    phone: "0333-7335483",
    src: "../aseets/letters-contact/letter-b.png",
    focal_person: "Rizwan Ali",
    email: "www.acshr.org.pk",
    location: "House No. 08, Ali Town Bypass Road, Badin",
  },
  {
    city: "District Office",
    name: "Sukkur",
    phone: "0334-3667824",
    src: "../aseets/letters-contact/letter-s.png",
    focal_person: "Syed Umais Shah",
    email: "www.acshr.org.pk",
    location:
      "House No. D-516/133, Molvi Abdullah Street Near Nishat Cinema, Barrage Road, Sukkur.",
  },
  {
    city: "Provincial Office",
    name: "Quetta",
    phone: "0331-8051921",
    src: "../aseets/letters-contact/letter-q.png",
    focal_person: "Abdul Ghafar Jamali",
    email: "www.acshr.org.pk",
    location:
      "House No. 51-opposite Fatima Complex Near Saigon Restaurant Phase-3 Shahbaz Town, Quetta",
  },
  {
    city: "District Office",
    name: "Khairpur Mirs",
    phone: "0331-3756862",
    src: "../aseets/letters-contact/letter-k.png",
    focal_person: "Adeel Ahmed Vistro",
    email: "www.acshr.org.pk",
    location:
      "House No. F-416/133, Sheesham Colony, Luqman Phatak, Khairpur Mirs, Sindh.",
  },
  {
    city: "District Office",
    name: "Umerkot",
    phone: "0333-3246809",
    src: "../aseets/letters-contact/letter-u.png",
    focal_person: "Abdul Haq Soomro",
    email: "www.acshr.org.pk",
    location: "House No. E-101/122, Near Govt Hospital, Umekot, Sindh.",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const branchSection = document.getElementById("branchSection");
  branches.forEach((contact) => {
    const branch = document.createElement("div");
    branch.setAttribute("class", "contactbranch");
    branch.innerHTML = `
      <div class="pattern1 branchImg">
        <img src="${contact.src}" width="40" height="40">
      </div>
      <div class="city">${contact.city}</div>
      <div class="city namecity">${contact.name}</div>
      <div class="email details"><span>Email</span> : ${contact.email}</div>
      <div class="location details"><span>Location</span> : ${contact.location}</div>
      <div class="phone details"><span>Phone</span> : ${contact.phone}</div>
  `;
    branchSection.appendChild(branch);
  });
});

// ------------------ Contact  Tooltip------------------

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

// ------------------ Contact  Form EmailJs Funationality ------------------

(function () {
  emailjs.init("AEzGJ1ZcmyBFL0EcY");
})();

// document
//   .getElementById("contact-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent form's default submit behavior
//     emailjs.sendForm("acshr-emailJs-serviceID", "template_acshr", this).then(
//       function () {
//         Toastify({
//           text: "Message sent successfully!",
//           duration: 1500,
//           delay: 1000,
//           gravity: "top",
//           position: "center",
//           backgroundColor: "#0c860d",
//           color: "var(--darkGreen)",
//           className: "toastify-center",
//           avatar: "../aseets/imgs/user-Authorize.png",
//         }).showToast();
//       },
//       function (error) {
//         Toastify({
//           text: JSON.stringify(error),
//           duration: 1500,
//           delay: 1000,
//           gravity: "top",
//           position: "center",
//           backgroundColor: "#0c860d",
//           color: "var(--darkGreen)",
//           className: "toastify-center",
//           avatar: "../aseets/imgs/user-Unauthorize.png",
//         }).showToast();
//       }
//     );
//   });
document
  .querySelector("#contactForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("acshr_f3o0go8", "template_acshr", this).then(
      function (response) {
        Toastify({
          text: "Message sent successfully!",
          duration: 1500,
          delay: 1000,
          gravity: "top",
          position: "center",
          backgroundColor: "#0c860d",
          color: "var(--darkGreen)",
          className: "toastify-center",
          avatar: "../aseets/imgs/user-Authorize.png",
        }).showToast();
      },
      function (error) {
        Toastify({
          text: "Oops! Something went wrong. Please try again.",
          duration: 1500,
          delay: 1000,
          gravity: "top",
          position: "center",
          backgroundColor: "#0c860d",
          color: "var(--darkGreen)",
          className: "toastify-center",
          avatar: "../aseets/imgs/user-Unauthorize.png",
        }).showToast();
      }
    );
  });
