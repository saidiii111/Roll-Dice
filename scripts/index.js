function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let dice = {
  value: getRandomInt(1, 6),
  roll: function() {
    this.value = getRandomInt(1, 6)
    return this.value;
  }
};

let dice2 = {
  value: getRandomInt(1, 6),
  roll: function() {
    this.value = getRandomInt(1, 6)
    return this.value;
 }
};

function printNumber(number1, number2){
  let value1 = document.body.querySelector('#sqr1');
  let value2 = document.body.querySelector('#sqr2');

  value1.style['background-image'] = `url(/images/inverted-dice-${number1}.svg)`;
  value2.style['background-image'] = `url(/images/inverted-dice-${number2}.svg)`;
}

let button = document.body.querySelector('#button');
button.addEventListener('click' , function() {
   dice.roll();
   dice2.roll();

  printNumber(dice.roll(), dice2.roll());
});

printNumber(dice.value, dice2.value);
