'use strict';

// Check 4 digit pin.
const EXPECTED_PIN = '4967';
const checkPin = (...code) => code.join('') === EXPECTED_PIN;

// Implement function press
// that allows to enter pin code by one character,
// e.g. press('3').press('4').press('5').press('6')
//
// For hint use https://github.com/HowProgrammingWorks/Cheatsheet

const press = (code) => ({
  values: [code],
  press(code) {
    this.values.push(code);
    if (this.values.length < 4) {
      return this;
    } else {
      return checkPin(...this.values);
    }
  }
});

module.exports = { press };
