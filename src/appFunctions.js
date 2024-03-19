// Function that converts a number to a Roman Numeral
export function convertToRoman(num) {
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];

  let result = '';

  romanNumerals.forEach(({ value, numeral }) => {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  });

  return result;
}

//Function to delete a letter from a string
export function deL(str, letterToDelete) {
  return str.split(letterToDelete).join('');
};

// Function Between, Gives the first String between the FIRST and LAST Strings Inputed of the String INPUT
export function between(FIRST, LAST, INPUT) {
  const startIndex = INPUT.indexOf(FIRST) + FIRST.length;
  const subINPUT = INPUT.substring(startIndex, INPUT.length - 1);
  const endIndex = subINPUT.indexOf(LAST) + INPUT.length - subINPUT.length;
  const BETWEEN = INPUT.substring(startIndex, endIndex);
  return BETWEEN;

};

//Function to Read a TXT File and Transform it into a Ballet Class Object
export function stringToBallet(string) {
  let stepLength = 1;
  while (string.includes(`Step ${stepLength + 1}`)) {
    stepLength++;
  }
};