const slider = (element, options) => {
  if (!options) {
    options = {};
  }

  new Swiper(element, {
    slidesPerView: options.slidesPerView ? options.slidesPerView : "auto",
    spaceBetween: options.spaceBetween ? options.spaceBetween : 0,
    centeredSlides: options.centeredSlides ? options.centeredSlides : true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // breakpoints: {
    //   1024: {
    //     slidesPerView: 1,
    //     spaceBetween: 0,
    //   },
    // },
  });
};

window.addEventListener("load", function () {
  slider(".swiper-container");
});
