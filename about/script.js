AOS.init({
  duration: 1500,
  delay: 0,
});
// ------------------ Navbar ------------------
window.addEventListener("scroll", () => {
  const container = document.getElementById('navbar');
  let scrollY = window.scrollY;
  let triggredHeight = 100;

  if (scrollY > triggredHeight) {
    container.classList.add('changeColor');
  } else {
    container.classList.remove('changeColor');
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
// ------------------  reviews section ------------------

const reviews = [
  {
    num: 9.4,
    reviewer: "Youth Capacity Building Program",
    review:
      "To stimulate community development and transformation by offering the youth in the target area access to vital information and other basic educational activities that will raise their awareness about urgent development issues ;and strengthen their participation and decision-making within the society on matters affecting their own lives.",
  },
  {
    num: 5.2,
    reviewer: "Formal Education",
    review:
      "Increase enrolment and retention of school going population (aged between 5-18 years) with emphasis on gender equity and inclusiveness while address socio-cultural barriers that hinder the enrolment of girls and children with special needs through community mobilization and sensitization, and by combating violence in the school place.",
  },
  {
    num: 3.6,
    reviewer: "Health Care Program",
    review:
      "Improve availability of and access to health care services for communities, with special focus on vulnerable groups such as women and children, through mobile clinics or strengthening of existing services, as well as through the promotion of health-seeking behavior.Improve quality of health care and treatment, including malnutrition with special focus on health infrastructure.",
  },
  {
    num: 8.4,
    reviewer: "Nutrition Program",
    review:
      "The overall objectives is to lower the incidence of malnutrition avert excess mortality due to malnutrition and promote better nutritional status among populations in the affected areas.Initiate and facilitate intensive SFPs, including community-based nutrition actions ,to the access of nutritionally vulnerable populations to emergency nutrition response.Promote appropriate infant and young child feeding practices.",
  },
  {
    num: 4.1,
    reviewer: "Advocacy Program",
    review:
      "Effective advocacy with relevant stakeholders and parties to conflict to promote adherence to human rights law with emphasis on humanitarian concerns.Institutional capacity building of Government and civil society entities at all levels for effective prevention of and response to protection challenges with a particular focus on the most vulnerable.Human-rights based approaches are mainstreamed in the program design and delivery of all ACSHR programs.",
  },
];

const reviewStars = document.getElementById("reviewStars");

reviews.forEach((review) => {
  const slide = document.createElement("div");
  slide.setAttribute("class", "swiper-slide stars");
  slide.innerHTML = `
            <div class="starDiv-1"></div>
            <div class="starDiv-2">
              <div class="starDiv">
                <div class="num">
                  ${review.num}
                  <span>Based on 500+ reviews</span>
                </div>
                <br />
                <div class="starReview">
                  <div class="filledStars">
                    <img
                      src="./aseets/imgs/starFill.png"
                      width="20"
                      height="20"
                    />
                    <img
                      src="./aseets/imgs/starFill.png"
                      width="20"
                      height="20"
                    />
                    <img
                      src="./aseets/imgs/starFill.png"
                      width="20"
                      height="20"
                    />
                    <img
                      src="./aseets/imgs/starFill.png"
                      width="20"
                      height="20"
                    />
                    <img
                      src="./aseets/imgs/starFill.png"
                      width="20"
                      height="20"
                    />
                  </div>
                  <div class="progressBar">
                    <span class="bar-1"></span>
                    <span class="bar-2"></span>
                  </div>
                  <div class="percents">95%</div>
                </div>

                <div class="starReview">
                  <div class="filledStars">
                    <img
                      src="./aseets/imgs/starFill.png"
                      width="20"
                      height="20"
                    />
                    <img
                      src="./aseets/imgs/starFill.png"
                      width="20"
                      height="20"
                    />
                    <img
                      src="./aseets/imgs/starFill.png"
                      width="20"
                      height="20"
                    />
                    <img
                      src="./aseets/imgs/starFill.png"
                      width="20"
                      height="20"
                    />
                    <img
                      src="./aseets/imgs/starEmpty.png"
                      width="20"
                      height="20"
                    />
                  </div>
                  <div class="progressBar">
                    <span class="bar-1"></span>
                    <span class="bar-2 bar-3"></span>
                  </div>
                  <div class="percents">70%</div>
                </div>

                <div class="starReview">
                  <div class="filledStars">
                    <img
                      src="./aseets/imgs/starFill.png"
                      width="20"
                      height="20"
                    />
                    <img
                      src="./aseets/imgs/starFill.png"
                      width="20"
                      height="20"
                    />
                    <img
                      src="./aseets/imgs/starFill.png"
                      width="20"
                      height="20"
                    />
                    <img
                      src="./aseets/imgs/starEmpty.png"
                      width="20"
                      height="20"
                    />
                    <img
                      src="./aseets/imgs/starEmpty.png"
                      width="20"
                      height="20"
                    />
                  </div>
                  <div class="progressBar">
                    <span class="bar-1"></span>
                    <span class="bar-2 bar-4"></span>
                  </div>
                  <div class="percents">35%</div>
                </div>

                <div class="starReview">
                  <div class="filledStars">
                    <img
                      src="./aseets/imgs/starEmpty.png"
                      width="20"
                      height="20"
                    />
                    <img
                      src="./aseets/imgs/starEmpty.png"
                      width="20"
                      height="20"
                    />
                    <img
                      src="./aseets/imgs/starEmpty.png"
                      width="20"
                      height="20"
                    />
                    <img
                      src="./aseets/imgs/starEmpty.png"
                      width="20"
                      height="20"
                    />
                    <img
                      src="./aseets/imgs/starEmpty.png"
                      width="20"
                      height="20"
                    />
                  </div>
                  <div class="progressBar">
                    <span class="bar-1"></span>
                  </div>
                  <div class="percents">0%</div>
                </div>

                <div class="starReview">
                  <div class="filledStars">
                    <img
                      src="./aseets/imgs/starEmpty.png"
                      width="20"
                      height="20"
                    />
                    <img
                      src="./aseets/imgs/starEmpty.png"
                      width="20"
                      height="20"
                    />
                    <img
                      src="./aseets/imgs/starEmpty.png"
                      width="20"
                      height="20"
                    />
                    <img
                      src="./aseets/imgs/starEmpty.png"
                      width="20"
                      height="20"
                    />
                    <img
                      src="./aseets/imgs/starEmpty.png"
                      width="20"
                      height="20"
                    />
                  </div>
                  <div class="progressBar">
                    <span class="bar-1"></span>
                  </div>
                  <div class="percents">0%</div>
                </div>
              </div>
              <div class="reviewDiv">
                <div class="filledStars">
                  <img
                    src="./aseets/imgs/starFill.png"
                    width="40"
                    height="40"
                  />
                  <img
                    src="./aseets/imgs/starFill.png"
                    width="40"
                    height="40"
                  />
                  <img
                    src="./aseets/imgs/starFill.png"
                    width="40"
                    height="40"
                  />
                  <img
                    src="./aseets/imgs/starFill.png"
                    width="40"
                    height="40"
                  />
                  <img
                    src="./aseets/imgs/starFill.png"
                    width="40"
                    height="40"
                  />
                </div>
                <p class="text">
                  ${review.review}
                </p>
                <div class="userName">${review.reviewer}</div>
              </div>
            </div>
  `;
  reviewStars?.appendChild(slide);
});

new Swiper(".starSection", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// ------------------  Date and Month setup------------------
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const now = new Date();
const getDate = now.getDate();
const getMonth = now.getMonth();
const getYear = now.getFullYear();
document.querySelectorAll(".month").forEach(ele => ele.textContent = months[getMonth]);
document.querySelectorAll(".date").forEach(ele => ele.textContent = getDate);
document.querySelectorAll(".year").forEach(ele => ele.textContent = getYear);

// ------------------ ToolTip------------------

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