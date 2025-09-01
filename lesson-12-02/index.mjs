const dog = {
  name: "чарли",
  type: "собака",
  makesound() {
    return "гав-гав";
  },
};

const bird = {
  name: "пета",
  type: "Воробей",
  makesound() {
    return "чик-чирик";
  },
};

function makeDomestic(isDomestic) {
  console.log(`${this.type} по имени ${this.name} говорит ${this.makesound()}`);

  return {
    name: this.name,
    type: this.type,
    makesound: this.makesound,
    isDomestic: isDomestic,
  };
}

// Вызов с использованием bind()
console.log("=== bind() ===");
const boundMakeDomestic = makeDomestic.bind(dog);
const domesticDog = boundMakeDomestic(true);
console.log(domesticDog);

// Вызов с использованием call()
console.log("=== call() ===");
const domesticBirdCall = makeDomestic.call(bird, false);
console.log(domesticBirdCall);

// Вызов с использованием apply()
console.log("=== apply() ===");
const domesticBirdApply = makeDomestic.apply(bird, [false]);
console.log(domesticBirdApply);