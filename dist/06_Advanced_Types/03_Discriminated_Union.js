"use strict";
function moveAnimal63(animal) {
    let speed;
    switch (animal.type) {
        case "Bird":
            speed = animal.flyingSpeed;
            break;
        case "Horse":
            speed = animal.runningSpeed;
            break;
        default:
    }
    console.log("moving at speed " + speed);
}
moveAnimal63({ type: "Bird", flyingSpeed: 50 });
