
new Swiper(".course-slider .swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: ".course-slider .swiper-button-next",
      prevEl: ".course-slider .swiper-button-prev",
    },
    pagination: {
      el: ".course-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      320: { slidesPerView: 1.2 },
      475: { slidesPerView: 1.8 },
      640: { slidesPerView: 2.3 },
      768: { slidesPerView: 2.3 },
    }
  });

new Swiper(".t-slider .swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: ".t-slider .swiper-button-next",
      prevEl: ".t-slider .swiper-button-prev",
    },
    pagination: {
      el: ".t-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });