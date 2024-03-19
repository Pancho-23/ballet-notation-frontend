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

//Function Transforms a String into a Ballet Class Object
export function stringToBallet(string) {
  let stepLength = 1;
  while (string.includes(`Step ${stepLength + 1}`)) {
    stepLength++;
  }
};

// Gets the pointed Block and transforms it into a String
export function balletBlockText(navBlock, navPhrase, navStep, balletClass) {
  return balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].place + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].hip + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].feetPosition + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].feetOrder + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].feetOpenClose + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].step + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].number + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].legForm + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].legCardinal + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].legSide + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].directionCardinal + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].directionSide + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].spin + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].leftArmPosition + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].leftArmSide + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].leftArmForm + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].rightArmPosition + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].rightArmSide + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].rightArmForm + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].head;
};

// Gets the pointed Phrase and transforms it into a String
export function balletPhraseText(navPhrase, navStep, balletClass) {
  return balletBlockText(0, navPhrase, navStep, balletClass) + ' | ' + balletBlockText(1, navPhrase, navStep, balletClass) + ' | ' + balletBlockText(2, navPhrase, navStep, balletClass) + ' | ' + balletBlockText(3, navPhrase, navStep, balletClass) + ' | ' + balletBlockText(4, navPhrase, navStep, balletClass) + ' | ' + balletBlockText(5, navPhrase, navStep, balletClass) + ' | ' + balletBlockText(6, navPhrase, navStep, balletClass) + ' | ' + balletBlockText(7, navPhrase, navStep, balletClass) + ' | ';
};

// Gets the pointed Step and trnasforms it into a String
export function balletStepText(navStep, balletClass) {
  let phrasePart = '';
  let index = 0;
  while (index < balletClass.classBody[navStep].stepBody.length) {
    phrasePart += `${convertToRoman(index + 1)}\t${balletPhraseText(index, navStep, balletClass)}\n`;
    index++
  }

  let finalPart = `Step ${navStep + 1} : ${balletClass.classBody[navStep].stage} : ${balletClass.classBody[navStep].kind}\n\n${phrasePart}\n\n`;

  return finalPart;
};

// Transforms the Ballet Class Object into String
export function balletClassText(balletClass) {
  let stepPart = '';
  let index = 0;
  while (index < balletClass.classBody.length) {
    stepPart += `${balletStepText(index, balletClass)}---\n\n`;
    index++
  }

  let finalPart = `Master: ${balletClass.master} \nDate: ${balletClass.mounth} ${balletClass.day} ${balletClass.year} \nCountry: ${balletClass.country}  \n---\n\n${stepPart}`;

  return finalPart;
};

//Points to the Class and Gives a JSX FORMATTED of the Step To be Displayed
export function coordinatesStepJSX(navStep, balletClass) {
  let phrasePart = [];
  let index = 0;
  while (index < balletClass.classBody[navStep].stepBody.length) {
    phrasePart = phrasePart.concat([<div className='roman-div'>{convertToRoman(index + 1)}</div>, `${balletPhraseText(index, navStep, balletClass)}`, <br />]);
    index++
  }

  let finalPart = [`Step ${navStep + 1} : ${balletClass.classBody[navStep].stage} : ${balletClass.classBody[navStep].kind}`, <br />, <br />].concat(phrasePart);

  return finalPart;
};

//Gives a JSX FORMATTED of the Class To be Displayed
export function coordinatesClassJSX(balletClass) {
  let stepPart = [<span>Master:&nbsp;&nbsp;</span>, <div className='master-div'>{balletClass.master}</div>, <br />, <span>Date:&nbsp;&nbsp;</span>, <div className='mounth-div'>{balletClass.mounth}</div>, <span>&nbsp;&nbsp;&nbsp;</span>, <div className='day-div'>{balletClass.day}</div>, <span>&nbsp;&nbsp;&nbsp;</span>, <div className='year-div'>{balletClass.year}</div>, <br />, <span>Country:&nbsp;&nbsp;</span>, <div className='country-div'>{balletClass.country}</div>, <br />, `---`, <br />, <br />];
  let index = 0;
  while (index < balletClass.classBody.length) {
    stepPart = stepPart.concat([coordinatesStepJSX(index, balletClass), <br />, `---`, <br />, <br />]);
    index++
  }
  return stepPart;
};
