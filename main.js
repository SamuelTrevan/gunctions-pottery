// 1. Define a function named buyClay

const buyClay = () => {
  const clay = {};
  return clay;
};
// 2. Define a function named makePottery. You need to pass it the empty object that buyClay produced and add a new property shape with a value of "Bowl"
const makePottery = (object) => {
  object.shape = "Bowl";
  return object;
};
// 3. Define a function named bisqueFire that adds a new property named readyForGlazing, and its value should be true.
const bisqueFire = (object) => {
  object.readyForGlazing = true;
  return object;
};
/* 4.Define a function named glazePottery. should check if the pottery has been bisque fired already and is ready for glazing.
        If it has not, you should log the following message to the console.
            "Make sure you bisque fire the pottery before you glaze it."
        If the pottery has been bisque fired, the function should perform the task of adding a new property named glazing, and its value should be "Midnight Blue"
*/

const glazePottery = (object) => {
  if (object.readyForGlazing === true) {
    object.glazing = "Midnight Blue";
  } else {
    console.log("Make sure you bisque fire the pottery before you glaze it.");
  }
  return object;
};

/* 5. Define a function named finalFiring . it needs a parameter to capture that value and use it. It also needs to capture the temperature of the kiln, so it needs two parameters.
        The function should perform the task of adding a new property named cracked, and its value depend on the value of the temperature parameter. 
            If that value is higher than 1200, then the value of the cracked property must be true.
            If the value is 1200, or less, the value should be false.
*/
const finalFiring = (object, temperatureOfKiln) => {
  if (temperatureOfKiln > 1200) {
    object.cracked = true;
  } else {
    object.cracked = false;
  }
};

const getMaterials = buyClay();
const moldClay = makePottery(getMaterials);
const fireFireFire = bisqueFire(moldClay);
const sticky = glazePottery(fireFireFire);
const completedPottery = finalFiring(sticky, 1400);
console.log(getMaterials);
