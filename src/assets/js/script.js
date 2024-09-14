const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
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
  color: "Blue",
  parents: {
    mother: 'Polly',
    father: 'Hector'
  }
};

const fish = {
  name: "Goby",
  age: 1,
  color: "blue",
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
