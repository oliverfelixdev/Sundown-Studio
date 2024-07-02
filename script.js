const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

function domManipulation4() {
  // let a = document.querySelector("img")
  // a.getAttribute("src")

  let elemC = document.querySelector("#elem-wrapper");
  let fixed = document.querySelector("#fixed-image-con");
  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });

  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  // let elem1 = document.querySelector("#elem1")
  // elem1.addEventListener("mouseenter", function () {
  //     let getImage = elem1.getAttribute("data-image");
  //     fixed.style.backgroundImage = `url(${getImage})`;
  // });

  let elements = document.querySelectorAll(".elem");
  elements.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      let image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
} domManipulation4();

function swiperANimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
  });
} swiperANimation();

function jsmanipulation_lder() {
  let loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 5000);
} jsmanipulation_lder();