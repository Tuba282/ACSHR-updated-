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
      "https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/472770340_582599934488057_7646593153449659738_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHRLVfTol9_a9VSgb8qoGoETe5EfiYGEY9N7kR-JgYRjwYEjNO7zatlVYwltJLspEUTpilQ33bQSx-ZHecWTJ_9&_nc_ohc=hDI6jddBBgoQ7kNvgHiF1Lg&_nc_oc=AdhV21dYvo-D2sKyukb2xzkiMFRs4u4fOGUrArJFpTlGWdMI10px4WqjQIB6GRJ_rtU&_nc_zt=23&_nc_ht=scontent-ams4-1.xx&_nc_gid=As8XHiFbzRqIpYtHM_H6UVZ&oh=00_AYBwmhkd5pHqyQhJGsyuSJ6umHCU99sismoFDAOnOKFqQg&oe=67C0C511",
  },
  {
    name: "Teamwork Game Activity",
    imageUrl:
      "https://scontent.fkhi17-2.fna.fbcdn.net/v/t39.30808-6/472665300_582599927821391_5061831738429678453_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEoBTwo7Z-K41ExTdY2KjWr7WMuEN0HsJrtYy4Q3QewmtzsNlWAyKDvaxNEiJCj0D3XOs4brXLMpNfmPZUqxzsv&_nc_ohc=g-_FySXaaVAQ7kNvgFvTyvM&_nc_oc=AdgS-65KfW6zqm18zrcudbwJOKsjZUox-a9VhJuONL5leOQWisJschZQJPXv2bIoQbM&_nc_zt=23&_nc_ht=scontent.fkhi17-2.fna&_nc_gid=AgZsrzvpM3V2gftKRMPUW5l&oh=00_AYBDinmCQ79xU6mccwtqllApikLWYufOhOu-s1EYSmiDaw&oe=67C0DDD0",
  },
  {
    name: "Holding Hands Circle",
    imageUrl:
      "https://scontent.fkhi17-2.fna.fbcdn.net/v/t39.30808-6/472644868_582599964488054_6954809938393450443_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFIQlJxtXVYCYof9sYZfY0J0g-HyhoRf_TSD4fKGhF_9BYOtglojyOtKylQlGP0mfQGRkn7KDYhyhINwKfrmB-m&_nc_ohc=ZexqAhoO31oQ7kNvgGO5GE6&_nc_oc=AdgV1xL13hRt0UzgRrUfARaJX79H7TlFFwXj5tFayqOYXu0q1RTk2EimVUusPLKIm08&_nc_zt=23&_nc_ht=scontent.fkhi17-2.fna&_nc_gid=Aq-TKXmSU9fe6JK0qsCX7ES&oh=00_AYBxOmkJPfK6OWXi7HPLgbpJVldEgS5Ps40xpOVxp6cR6g&oe=67C0B804",
  },
  {
    name: "Distributing Of Treats",
    imageUrl:
      "https://scontent.fkhi17-2.fna.fbcdn.net/v/t39.30808-6/472668613_582599941154723_8584897802972300793_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFiArDN_Iql4qlhWNliCkVcKqL1tN5LSv0qovW03ktK_SQJOsL3rfeiGilPW6J1Y_zcYCZY9nZw2DjGrQYL7Piu&_nc_ohc=e6jpAssSECsQ7kNvgEgZh34&_nc_oc=Adi7ngCO0j4Z5d9RvrAQWGrAkPHX54RUkDm4vKprL7hSp03CY3NuYxvAmPi57VsSfA8&_nc_zt=23&_nc_ht=scontent.fkhi17-2.fna&_nc_gid=AWVdXKsp53vgWygF3TVoiGZ&oh=00_AYAfKaMQ9rZDdjoeIz25xzMZ9JIlpp_8kARHm0EdAhAcXQ&oe=67C0E21D",
  },
  {
    name: "Joyful Positive Environment",
    imageUrl:
      "https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/472656163_582600451154672_2823942166022693333_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGN_7fc-nK7QSCVqdptcxOwgq_Y6eZ0uPOCr9jp5nS48wClQqiLkkdN6JagosggtSsusc9qTsXNuT1rzIFtuSae&_nc_ohc=Tj04LkTSRccQ7kNvgEhcUdD&_nc_oc=Adi1rghO2QYVvNB9HNrnbGUYPRVfZR5ZaTQu6mf2Tv8ig-2pdE9FjVzSKA2CXhBddBU&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=AeqAv7Ypesx625d1yHLDcHc&oh=00_AYDMno73U90DTuOy9dM7ecdXoTJrVgNYEtFekcRnCrzymA&oe=67C0E33B",
  },
  {
    name: "Celebrating Togetherness Spirit",
    imageUrl:
      "https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/472462245_582600474488003_597306768184992877_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEb5dw74bRA9Yp9AlCuSAqS6pWNzGvV-sbqlY3Ma9X6xlNCMghyuRQgr6Ikk2N7SEm-ZQj6gFY5kBwHOh7TLyj3&_nc_ohc=R3UkibMAprMQ7kNvgErVLar&_nc_oc=Adg0VhyON-moXiyPZnvu0_FtiXzdQz8a5cUjM4D9r5Epafjw7TTnPo5R2yh8cvXPxQg&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=AI6wtpDp3u8MJRlPOg5m6LV&oh=00_AYAYkmzR0cfdbgDQX9foPNoAQ2PIP_U6q_rU_k_qmqekOA&oe=67C0DF27",
  },
  {
    name: "Volunteers in Dress",
    imageUrl:
      "https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/472786414_582600424488008_1520835508919117890_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHbf_91tGCvh1y801ze7SsN4qK8xAUDgHniorzEBQOAeZ12QYey4YH-FMZEpCghveLOGYgDCNy7aOmMzBTF9b7L&_nc_ohc=avQ_YZPV9ScQ7kNvgH6iTKQ&_nc_oc=AdjOKJpR2x65h0LGZyHXiwWcv8SjDPWUeHOu4OuFtZBtWi-pqti0biKONsjrqMpB2So&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=ATVkOwo1Si_n1C9xVQ_Ijid&oh=00_AYDo9q8Z8eNXyflOWELHL4JR-yy3zRGGE3zeQtFlZ0K4_A&oe=67C0C158",
  },
  {
    name: "Encouraging Children Participation",
    imageUrl:
      "https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/472502617_582600417821342_2229003043270959903_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG7DihmxsPthyCqfeI5ZQB9lmSSegS51TyWZJJ6BLnVPMaSeYsopi8YYcz5-X3h_V2AHa_qPFYHtDAQPlYHXbtm&_nc_ohc=3WigE_GtTpAQ7kNvgFiDQYm&_nc_oc=AdhWhTAKnpDdgYhGBoZ18TCKlqp6D8X-vTJ8vToC7FFRRHIjryaYy6MomzcVSrv6cSA&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=ARoLWXnMphehpDhulBI681k&oh=00_AYBpEHMHi1Y40wbA8r_kcUvNGLNegmeteudR-P8hMGYY_Q&oe=67C0D49B",
  },
  {
    name: "Stronger Connected Community",
    imageUrl:
      "https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/472544357_582600457821338_3248263953716811182_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH7329U7SK1pT23FuP3nTZ94nWEeYZpcZvidYR5hmlxmxqjQj26rVnd0on_t3o8udnwqp-jFNwrMltlyFBT8LPE&_nc_ohc=XCzZrhbinL8Q7kNvgFg0Wz-&_nc_oc=Adi9_qShUFiKV21JL8R6PnvHs_3UKBhhDsyHPSKgknsO7ZtXfIx6hUaI13zXp88qb1c&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=A8ogTw9abTVgJYKb_brLHRO&oh=00_AYB-LvpQC3Qsf3hxM-naPQOwJEjlr5BgwwOZv4JlBuzsVw&oe=67C0C0C3",
  },
  {
    name: "Inspiring Hope Positivity",
    imageUrl:
      "https://scontent.fkhi17-2.fna.fbcdn.net/v/t39.30808-6/472771962_582600314488019_5685458123210104218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHYxnK4hemq7UJgHfLjseEXGLG5xs2zA8AYsbnGzbMDwAOe3pRawXv7OYPjx_Q8aJO1OzZ_twN4B7-X1PSZ8rAB&_nc_ohc=GO1xZ3s31p4Q7kNvgEZ1OaN&_nc_oc=Adg_kJ8IqdBBr5f9hvtyoqJ5W447W2sdwmXfmafZAsBbLSCMrCUYWmDbUbm8TWzBGQU&_nc_zt=23&_nc_ht=scontent.fkhi17-2.fna&_nc_gid=AK8G5TWWofDpD8pwW1enM1_&oh=00_AYD1vC3PAZsOq_RDHpBjECQFsnGI_NW1LYRWdgMbQ07GPg&oe=67C0E2B2",
  },
  {
    name: "Brighter Future Together",
    imageUrl:
      "https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/472356271_582600427821341_4220154106679248259_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFrcb-wDho7qQ2wLamEn5S2Q5wFoaOWQ9FDnAWho5ZD0fR0aAAeX62vVTKSa4TM3JI4s7AuQG2RzGzDDu_6c_Vg&_nc_ohc=gP-raZH3V98Q7kNvgEmHhVf&_nc_oc=Adh-codN7TblgPJkv0RE125JEbhvkWKXnI8CUL4JWuv7HTnzN-GufqJIz_2Vye5S0XQ&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=Ay0DFU3VOzdLmy3Bl3DH8P2&oh=00_AYAA-SDda2I7Zjf8z20o3NwqrElaZnZhN1Tk1JtIRSVGDA&oe=67C0CB0B",
  },
  {
    name: "Joyful Positive Environment",
    imageUrl:
      "https://scontent.fkhi17-2.fna.fbcdn.net/v/t39.30808-6/472338730_582600391154678_5045902381431492922_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEJa8a0VEoqik-S_-GJqG6hEkee4kd7CpYSR57iR3sKlpr1QdRbrhaY8_ADEkG_pmLeMG1Lio7K8sdsoMKmrTaL&_nc_ohc=AbAj4ZEa3kUQ7kNvgHp7aM3&_nc_oc=AdhV7eDwyO0pI68_rjQhj5ktfj_ZjYxu9gojHrsA7OhMAT_0ooAcVk5sejsSPzv2adY&_nc_zt=23&_nc_ht=scontent.fkhi17-2.fna&_nc_gid=A4xBGDxcm2evN6y4bEI2scN&oh=00_AYAWOPYESXgVMI3UR-x_UOO7j7C4AYlIJNinrK_0nHnEsw&oe=67C0D575",
  },
  {
    name: "Confidence Building Speach",
    imageUrl:
      "https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/472788652_582600471154670_1577454515656290200_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGTMtuqp4ijL0a-cpo28EvFyXpfQELM15LJel9AQszXkgpazTtl9n1bZmi6IC5cBEZWgeR1JcPh-3-GzSeFExva&_nc_ohc=Tw6zZTZJUaQQ7kNvgFK_NoA&_nc_oc=Adj8cgHPoLFLiuJ9xBhS8tXNVbBygQnU2xMlVF8bwrXBT2n8dJ8bbSbHVp_juFytHdM&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=AjpcEPzv988GxrQMS0TsrqA&oh=00_AYDaAAp4X-H9Wu_twbTXiZSsGHDRIuJUBe3Zp_rmirdUng&oe=67C0B2D7",
  },
  {
    name: "Sharing Caring Moments",
    imageUrl:
      "https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/472668508_582600487821335_6609760277601642036_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeERighM0m5_QX-6RucnU7NhWoSk0i8cI4RahKTSLxwjhLQGygsyI5OFljAl0olozhprbBP3dHGNA0NsnAIIJGvX&_nc_ohc=TqlbQ0d4NAMQ7kNvgG6I1RD&_nc_oc=AdgrinqgtzbejqPkhGIv8G4u9WthD1qpJtQZJSMnf9t1S_KGApjD-dECxXehQNzntvI&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=ASLNJU_3qUPJXzdtvs49sMh&oh=00_AYBx6l3NBbS_v3NWm9SBLDnoczcS2veZmaCvGQVAsq3Z4g&oe=67C0CE96",
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
