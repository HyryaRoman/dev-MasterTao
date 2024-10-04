const swiperBanner = new Swiper('.swiper-banner', {
  direction: 'horizontal',
  loop: true,

  // autoplay: {
  //   delay: 6000,
  // },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperBenefits = new Swiper('.swiper-benefits', {
  direction: 'horizontal',
  loop: true,

  // autoplay: {
  //   delay: 6000,
  // },

  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    1200: {
      'slidesPerView': 8,
      // 'grid': {
      //   'columns': 8,
      //   'rows': 2,
      // },
    }
  },
});

document.querySelectorAll(".card-swiper-container").forEach(function (s) {
  console.log(s.querySelector('.swiper-button-next'));
  const swiperCard = new Swiper(s.querySelector('.card-swiper'), {
    direction: 'horizontal',
    loop: true,

    // autoplay: {
    //   delay: 6000,
    // },

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: s.querySelector('.swiper-button-next'),
      prevEl: s.querySelector('.swiper-button-prev'),
    },

    breakpoints: {
      1200: {
        slidesPerView: 3,
      }
    },

    spaceBetween: 30,
    // slidesOffsetBefore: 20,
    // slidesOffsetAfter: 20,
    watchSlidesProgress: true,
  });
});

const dog = {
  name: "Lucky",
  age: 5,
  color: "brown",
  parents: {
    mother: 'Flora',
    father: 'Trace'
  }
};

const bird = {
  name: "Ori",
  age: 2,
  color: "blue",
  parents: {
    mother: 'Polly',
    father: 'Hector'
  }
};

const fish = {
  name: "Goby",
  age: 1,
  color: "yellow",
  parents: {
    mother: 'Sasha',
    father: 'Max'
  }
};

const logPet = function(pet) {
  console.log("This is", pet.name, "and it's", pet.color, "and is", pet.age, "years old");
}

logPet(dog);
logPet(bird);
logPet(fish);
