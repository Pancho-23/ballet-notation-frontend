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
};

//Function Transforms Roman Numerals into Numbers
export function romanToNumber(roman) {
  const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    let currentChar = roman[i];
    let currentValue = romanNumerals[currentChar];
    let nextChar = roman[i + 1];
    let nextValue = romanNumerals[nextChar];

    if (nextValue > currentValue) {
      result += nextValue - currentValue;
      i++;
    } else {
      result += currentValue;
    }
  }

  return result;
};

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
  return balletBlockText(0, navPhrase, navStep, balletClass) + '|' + balletBlockText(1, navPhrase, navStep, balletClass) + '|' + balletBlockText(2, navPhrase, navStep, balletClass) + '|' + balletBlockText(3, navPhrase, navStep, balletClass) + '|' + balletBlockText(4, navPhrase, navStep, balletClass) + '|' + balletBlockText(5, navPhrase, navStep, balletClass) + '|' + balletBlockText(6, navPhrase, navStep, balletClass) + '|' + balletBlockText(7, navPhrase, navStep, balletClass) + '|';
};

// Gets the pointed Step and trnasforms it into a String
export function balletStepText(navStep, balletClass) {
  let phrasePart = '';
  let index = 0;
  while (index < balletClass.classBody[navStep].stepBody.length) {
    phrasePart += `${convertToRoman(index + 1)}\t${balletPhraseText(index, navStep, balletClass)}\n`;
    index++
  }

  let finalPart = `Step ${navStep + 1} : ${balletClass.classBody[navStep].stage} : ${balletClass.classBody[navStep].kind}\n\n${phrasePart}\n`;

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

  let finalPart = `Master: ${balletClass.master}\nDate: ${balletClass.mounth} ${balletClass.day} ${balletClass.year}\nCountry: ${balletClass.country}\n---\n\n${stepPart}`;

  return finalPart;
};



// Adds another Step Into a Ballet Class Object
export function AddStepToBalletClass(balletClass) {
  balletClass.classBody.push(
    {
      order: balletClass.classBody.length + 1,
      stage: '',
      kind: '',
      stepBody: [
        {
          order: 1,
          phraseBody: [
            {
              order: 1,
              place: '',
              hip: '',
              feetPosition: '',
              feetOrder: '',
              feetOpenClose: '',
              variants: '',
              step: '',
              number: '',
              legForm: '',
              legCardinal: '',
              legSide: '',
              directionCardinal: '',
              directionSide: '',
              spin: '',
              leftArmPosition: '',
              leftArmSide: '',
              leftArmForm: '',
              rightArmPosition: '',
              rightArmSide: '',
              rightArmForm: '',
              head: ''
            },
            {
              order: 2,
              place: '',
              hip: '',
              feetPosition: '',
              feetOrder: '',
              feetOpenClose: '',
              variants: '',
              step: '',
              number: '',
              legForm: '',
              legCardinal: '',
              legSide: '',
              directionCardinal: '',
              directionSide: '',
              spin: '',
              leftArmPosition: '',
              leftArmSide: '',
              leftArmForm: '',
              rightArmPosition: '',
              rightArmSide: '',
              rightArmForm: '',
              head: ''
            },
            {
              order: 3,
              place: '',
              hip: '',
              feetPosition: '',
              feetOrder: '',
              feetOpenClose: '',
              variants: '',
              step: '',
              number: '',
              legForm: '',
              legCardinal: '',
              legSide: '',
              directionCardinal: '',
              directionSide: '',
              spin: '',
              leftArmPosition: '',
              leftArmSide: '',
              leftArmForm: '',
              rightArmPosition: '',
              rightArmSide: '',
              rightArmForm: '',
              head: ''
            },
            {
              order: 4,
              place: '',
              hip: '',
              feetPosition: '',
              feetOrder: '',
              feetOpenClose: '',
              variants: '',
              step: '',
              number: '',
              legForm: '',
              legCardinal: '',
              legSide: '',
              directionCardinal: '',
              directionSide: '',
              spin: '',
              leftArmPosition: '',
              leftArmSide: '',
              leftArmForm: '',
              rightArmPosition: '',
              rightArmSide: '',
              rightArmForm: '',
              head: ''
            },
            {
              order: 5,
              place: '',
              hip: '',
              feetPosition: '',
              feetOrder: '',
              feetOpenClose: '',
              variants: '',
              step: '',
              number: '',
              legForm: '',
              legCardinal: '',
              legSide: '',
              directionCardinal: '',
              directionSide: '',
              spin: '',
              leftArmPosition: '',
              leftArmSide: '',
              leftArmForm: '',
              rightArmPosition: '',
              rightArmSide: '',
              rightArmForm: '',
              head: ''
            },
            {
              order: 6,
              place: '',
              hip: '',
              feetPosition: '',
              feetOrder: '',
              feetOpenClose: '',
              variants: '',
              step: '',
              number: '',
              legForm: '',
              legCardinal: '',
              legSide: '',
              directionCardinal: '',
              directionSide: '',
              spin: '',
              leftArmPosition: '',
              leftArmSide: '',
              leftArmForm: '',
              rightArmPosition: '',
              rightArmSide: '',
              rightArmForm: '',
              head: ''
            },
            {
              order: 7,
              place: '',
              hip: '',
              feetPosition: '',
              feetOrder: '',
              feetOpenClose: '',
              variants: '',
              step: '',
              number: '',
              legForm: '',
              legCardinal: '',
              legSide: '',
              directionCardinal: '',
              directionSide: '',
              spin: '',
              leftArmPosition: '',
              leftArmSide: '',
              leftArmForm: '',
              rightArmPosition: '',
              rightArmSide: '',
              rightArmForm: '',
              head: ''
            },
            {
              order: 8,
              place: '',
              hip: '',
              feetPosition: '',
              feetOrder: '',
              feetOpenClose: '',
              variants: '',
              step: '',
              number: '',
              legForm: '',
              legCardinal: '',
              legSide: '',
              directionCardinal: '',
              directionSide: '',
              spin: '',
              leftArmPosition: '',
              leftArmSide: '',
              leftArmForm: '',
              rightArmPosition: '',
              rightArmSide: '',
              rightArmForm: '',
              head: ''
            }
          ]
        }
      ]
    }
  );

  return balletClass;
};

export function AddPhraseToStep(navStep, balletClass) {
  balletClass.classBody[navStep].stepBody.push(
    {
      order: balletClass.classBody[navStep].stepBody.length + 1,
      phraseBody: [
        {
          order: 1,
          place: '',
          hip: '',
          feetPosition: '',
          feetOrder: '',
          feetOpenClose: '',
          variants: '',
          step: '',
          number: '',
          legForm: '',
          legCardinal: '',
          legSide: '',
          directionCardinal: '',
          directionSide: '',
          spin: '',
          leftArmPosition: '',
          leftArmSide: '',
          leftArmForm: '',
          rightArmPosition: '',
          rightArmSide: '',
          rightArmForm: '',
          head: ''
        },
        {
          order: 2,
          place: '',
          hip: '',
          feetPosition: '',
          feetOrder: '',
          feetOpenClose: '',
          variants: '',
          step: '',
          number: '',
          legForm: '',
          legCardinal: '',
          legSide: '',
          directionCardinal: '',
          directionSide: '',
          spin: '',
          leftArmPosition: '',
          leftArmSide: '',
          leftArmForm: '',
          rightArmPosition: '',
          rightArmSide: '',
          rightArmForm: '',
          head: ''
        },
        {
          order: 3,
          place: '',
          hip: '',
          feetPosition: '',
          feetOrder: '',
          feetOpenClose: '',
          variants: '',
          step: '',
          number: '',
          legForm: '',
          legCardinal: '',
          legSide: '',
          directionCardinal: '',
          directionSide: '',
          spin: '',
          leftArmPosition: '',
          leftArmSide: '',
          leftArmForm: '',
          rightArmPosition: '',
          rightArmSide: '',
          rightArmForm: '',
          head: ''
        },
        {
          order: 4,
          place: '',
          hip: '',
          feetPosition: '',
          feetOrder: '',
          feetOpenClose: '',
          variants: '',
          step: '',
          number: '',
          legForm: '',
          legCardinal: '',
          legSide: '',
          directionCardinal: '',
          directionSide: '',
          spin: '',
          leftArmPosition: '',
          leftArmSide: '',
          leftArmForm: '',
          rightArmPosition: '',
          rightArmSide: '',
          rightArmForm: '',
          head: ''
        },
        {
          order: 5,
          place: '',
          hip: '',
          feetPosition: '',
          feetOrder: '',
          feetOpenClose: '',
          variants: '',
          step: '',
          number: '',
          legForm: '',
          legCardinal: '',
          legSide: '',
          directionCardinal: '',
          directionSide: '',
          spin: '',
          leftArmPosition: '',
          leftArmSide: '',
          leftArmForm: '',
          rightArmPosition: '',
          rightArmSide: '',
          rightArmForm: '',
          head: ''
        },
        {
          order: 6,
          place: '',
          hip: '',
          feetPosition: '',
          feetOrder: '',
          feetOpenClose: '',
          variants: '',
          step: '',
          number: '',
          legForm: '',
          legCardinal: '',
          legSide: '',
          directionCardinal: '',
          directionSide: '',
          spin: '',
          leftArmPosition: '',
          leftArmSide: '',
          leftArmForm: '',
          rightArmPosition: '',
          rightArmSide: '',
          rightArmForm: '',
          head: ''
        },
        {
          order: 7,
          place: '',
          hip: '',
          feetPosition: '',
          feetOrder: '',
          feetOpenClose: '',
          variants: '',
          step: '',
          number: '',
          legForm: '',
          legCardinal: '',
          legSide: '',
          directionCardinal: '',
          directionSide: '',
          spin: '',
          leftArmPosition: '',
          leftArmSide: '',
          leftArmForm: '',
          rightArmPosition: '',
          rightArmSide: '',
          rightArmForm: '',
          head: ''
        },
        {
          order: 8,
          place: '',
          hip: '',
          feetPosition: '',
          feetOrder: '',
          feetOpenClose: '',
          variants: '',
          step: '',
          number: '',
          legForm: '',
          legCardinal: '',
          legSide: '',
          directionCardinal: '',
          directionSide: '',
          spin: '',
          leftArmPosition: '',
          leftArmSide: '',
          leftArmForm: '',
          rightArmPosition: '',
          rightArmSide: '',
          rightArmForm: '',
          head: ''
        }
      ]
    }
  );

  return balletClass;
}

// Gives us an Initial Ballet Class Object to Work With
export function initBalletClass() {
  const initClass = {
    master: '',
    mounth: 'January',
    day: 1,
    year: 2024,
    country: '',
    classBody: [
      {
        order: 1,
        stage: '',
        kind: '',
        stepBody: [
          {
            order: 1,
            phraseBody: [
              {
                order: 1,
                place: '',
                hip: '',
                feetPosition: '',
                feetOrder: '',
                feetOpenClose: '',
                variants: '',
                step: '',
                number: '',
                legForm: '',
                legCardinal: '',
                legSide: '',
                directionCardinal: '',
                directionSide: '',
                spin: '',
                leftArmPosition: '',
                leftArmSide: '',
                leftArmForm: '',
                rightArmPosition: '',
                rightArmSide: '',
                rightArmForm: '',
                head: ''
              },
              {
                order: 2,
                place: '',
                hip: '',
                feetPosition: '',
                feetOrder: '',
                feetOpenClose: '',
                variants: '',
                step: '',
                number: '',
                legForm: '',
                legCardinal: '',
                legSide: '',
                directionCardinal: '',
                directionSide: '',
                spin: '',
                leftArmPosition: '',
                leftArmSide: '',
                leftArmForm: '',
                rightArmPosition: '',
                rightArmSide: '',
                rightArmForm: '',
                head: ''
              },
              {
                order: 3,
                place: '',
                hip: '',
                feetPosition: '',
                feetOrder: '',
                feetOpenClose: '',
                variants: '',
                step: '',
                number: '',
                legForm: '',
                legCardinal: '',
                legSide: '',
                directionCardinal: '',
                directionSide: '',
                spin: '',
                leftArmPosition: '',
                leftArmSide: '',
                leftArmForm: '',
                rightArmPosition: '',
                rightArmSide: '',
                rightArmForm: '',
                head: ''
              },
              {
                order: 4,
                place: '',
                hip: '',
                feetPosition: '',
                feetOrder: '',
                feetOpenClose: '',
                variants: '',
                step: '',
                number: '',
                legForm: '',
                legCardinal: '',
                legSide: '',
                directionCardinal: '',
                directionSide: '',
                spin: '',
                leftArmPosition: '',
                leftArmSide: '',
                leftArmForm: '',
                rightArmPosition: '',
                rightArmSide: '',
                rightArmForm: '',
                head: ''
              },
              {
                order: 5,
                place: '',
                hip: '',
                feetPosition: '',
                feetOrder: '',
                feetOpenClose: '',
                variants: '',
                step: '',
                number: '',
                legForm: '',
                legCardinal: '',
                legSide: '',
                directionCardinal: '',
                directionSide: '',
                spin: '',
                leftArmPosition: '',
                leftArmSide: '',
                leftArmForm: '',
                rightArmPosition: '',
                rightArmSide: '',
                rightArmForm: '',
                head: ''
              },
              {
                order: 6,
                place: '',
                hip: '',
                feetPosition: '',
                feetOrder: '',
                feetOpenClose: '',
                variants: '',
                step: '',
                number: '',
                legForm: '',
                legCardinal: '',
                legSide: '',
                directionCardinal: '',
                directionSide: '',
                spin: '',
                leftArmPosition: '',
                leftArmSide: '',
                leftArmForm: '',
                rightArmPosition: '',
                rightArmSide: '',
                rightArmForm: '',
                head: ''
              },
              {
                order: 7,
                place: '',
                hip: '',
                feetPosition: '',
                feetOrder: '',
                feetOpenClose: '',
                variants: '',
                step: '',
                number: '',
                legForm: '',
                legCardinal: '',
                legSide: '',
                directionCardinal: '',
                directionSide: '',
                spin: '',
                leftArmPosition: '',
                leftArmSide: '',
                leftArmForm: '',
                rightArmPosition: '',
                rightArmSide: '',
                rightArmForm: '',
                head: ''
              },
              {
                order: 8,
                place: '',
                hip: '',
                feetPosition: '',
                feetOrder: '',
                feetOpenClose: '',
                variants: '',
                step: '',
                number: '',
                legForm: '',
                legCardinal: '',
                legSide: '',
                directionCardinal: '',
                directionSide: '',
                spin: '',
                leftArmPosition: '',
                leftArmSide: '',
                leftArmForm: '',
                rightArmPosition: '',
                rightArmSide: '',
                rightArmForm: '',
                head: ''
              }
            ]
          }
        ]
      }
    ]

  }

  return initClass;
}


// Function that takes a Block in String and the Order and gives us the Object
export function stringBlockToObject(blockString, blockOrder) {
  let initBlock = {
    order: 1,
    place: '',
    hip: '',
    feetPosition: '',
    feetOrder: '',
    feetOpenClose: '',
    variants: '',
    step: '',
    number: '',
    legForm: '',
    legCardinal: '',
    legSide: '',
    directionCardinal: '',
    directionSide: '',
    spin: '',
    leftArmPosition: '',
    leftArmSide: '',
    leftArmForm: '',
    rightArmPosition: '',
    rightArmSide: '',
    rightArmForm: '',
    head: ''
  }

  //Order (Provided by the user - second argument)
  initBlock.order = blockOrder;

  //Place
  const placeRegex = /0;|1;|2;|3;|4;|5;|6;|7;|8;/;
  let placeMatch = blockString.match(placeRegex);
  initBlock.place = placeMatch ? placeMatch[0] : '';

  //Hip
  const hipRegex = /1:|2:|3:|4:|5:|6:|7:|8:/;
  let hipMatch = blockString.match(hipRegex);
  initBlock.hip = hipMatch ? hipMatch[0] : '';

  //Feet 
  const feetRegex = /(1|2|3|4|5)(\+|-|=)(¬|'')/;
  let feetMatch = blockString.match(feetRegex);
  let Feet = feetMatch ? feetMatch[0] : '';

  //Feet Position
  const feetPositionRegex = /1|2|3|4|5/;
  let feetPositionMatch = Feet.match(feetPositionRegex);
  initBlock.feetPosition = feetPositionMatch ? feetPositionMatch[0] : '';

  //Feet Order
  const feetOrderRegex = /\+|-|=/;
  let feetOrderMatch = Feet.match(feetOrderRegex);
  initBlock.feetOrder = feetOrderMatch ? feetOrderMatch[0] : '';

  //Feet OpenClose
  const feetOpenCloseRegex = /¬/;
  let feetOpenCloseMatch = Feet.match(feetOpenCloseRegex);
  initBlock.feetOpenClose = feetOpenCloseMatch ? feetOpenCloseMatch[0] : '';

  //Step
  const stepRegex = /as|bn|bt|bm|bs|br|bi|cb|cp|ch|cs|ct|cv|cx|cl|cn|db|dg|dt|dv|dl|ep|ev|eb|en|fi|fc|ff|fn|ft|fp|gg|gl|jt|je|pa|pp|po|ps|pm|pn|pq|py|pl|pe|pr|px|rv|rl|rn|re|rc|rj|rt|rp|ry|sr|sn|st|sp|tc|tf|tv|tl|tn|tb|tj|vs|tr/;
  let stepMatch = blockString.match(stepRegex);
  initBlock.step = stepMatch ? stepMatch[0] : '';

  //Number
  const numberRegex = /1\.|2\.|3\.|4\.|5\.|6\.|7\.|8\./;
  let numberMatch = blockString.match(numberRegex);
  initBlock.number = numberMatch ? numberMatch[0] : '';

  //Leg 
  const legRegex = /(#|\$|%|\/)(\+|-|=)(!|'')/;
  let legMatch = blockString.match(legRegex);
  let Leg = legMatch ? legMatch[0] : '';

  //Leg Form
  const legFormRegex = /#|\$|%|\//;
  let legFormMatch = Leg.match(legFormRegex);
  initBlock.legForm = legFormMatch ? legFormMatch[0] : '';

  //Leg Cardinal
  const legCardinalRegex = /\+|-|=/;
  let legCardinalMatch = Leg.match(legCardinalRegex);
  initBlock.legCardinal = legCardinalMatch ? legCardinalMatch[0] : '';

  //Leg Side
  const legSideRegex = /!/;
  let legSideMatch = Leg.match(legSideRegex);
  initBlock.legSide = legSideMatch ? legSideMatch[0] : '';

  //Direction 
  const directionRegex = /(\+|-|=)(!|'')/;
  let directionMatch = blockString.match(directionRegex);
  let Direction = directionMatch ? directionMatch[0] : '';

  //Direction Cardinal
  const directionCardinalRegex = /\+|-|=/;
  let directionCardinalMatch = Direction.match(directionCardinalRegex);
  initBlock.directionCardinal = directionCardinalMatch ? directionCardinalMatch[0] : '';

  //Direction Side
  const directionSideRegex = /!/;
  let directionSideMatch = Direction.match(directionSideRegex);
  initBlock.directionSide = directionSideMatch ? directionSideMatch[0] : '';

  //Spin
  const spinRegex = /<|>/;
  let spinMatch = blockString.match(spinRegex);
  initBlock.spin = spinMatch ? spinMatch[0] : '';

  //Head
  const headRegex = /1\*|2\*|3\*|4\*|5\*|6\*|7\*|8\*/;
  let headMatch = blockString.match(headRegex);
  initBlock.head = headMatch ? headMatch[0] : '';

  //LeftArm 
  const leftArmRegex = /(0|1|2|3|4|5|6|7|8|9)!(°|"|'')/;
  let leftArmMatch = blockString.match(leftArmRegex);
  let LeftArm = leftArmMatch ? leftArmMatch[0] : '';

  //LeftArm Position
  const leftArmPositionRegex = /0|1|2|3|4|5|6|7|8|9/;
  let leftArmPositionMatch = LeftArm.match(leftArmPositionRegex);
  initBlock.leftArmPosition = leftArmPositionMatch ? leftArmPositionMatch[0] : '';

  //LeftArm Side
  const leftArmSideRegex = /!/;
  let leftArmSideMatch = LeftArm.match(leftArmSideRegex);
  initBlock.leftArmSide = leftArmSideMatch ? leftArmSideMatch[0] : '';

  //LeftArm Form
  const leftArmFormRegex = /°|"|''/;
  let leftArmFormMatch = LeftArm.match(leftArmFormRegex);
  initBlock.leftArmForm = leftArmFormMatch ? leftArmFormMatch[0] : '';

  //RightArm 
  const rightArmRegex = /(0|1|2|3|4|5|6|7|8|9)(\?)(°|"|'')/;
  let rightArmMatch = blockString.match(rightArmRegex);
  let RightArm = rightArmMatch ? rightArmMatch[0] : '';

  //RightArm Position
  const rightArmPositionRegex = /0|1|2|3|4|5|6|7|8|9/;
  let rightArmPositionMatch = RightArm.match(rightArmPositionRegex);
  initBlock.rightArmPosition = rightArmPositionMatch ? rightArmPositionMatch[0] : '';

  //RightArm Side
  const rightArmSideRegex = /\?/;
  let rightArmSideMatch = RightArm.match(rightArmSideRegex);
  initBlock.rightArmSide = rightArmSideMatch ? rightArmSideMatch[0] : '';

  //RightArm Form
  const rightArmFormRegex = /°|"|''/;
  let rightArmFormMatch = RightArm.match(rightArmFormRegex);
  initBlock.rightArmForm = rightArmFormMatch ? rightArmFormMatch[0] : '';

  //Variants
  const variantsRegex = /(D|'')(T|'')(P|'')(L|'')(R|'')(Q|'')(G|'')(E|'')(V|'')(A|'')(C|'')(F|'')(N|'')(B|'')/;
  let variantsMatch = blockString.match(variantsRegex);
  initBlock.variants = variantsMatch ? variantsMatch[0] : '';

  return initBlock;

};

//Function that takes a Phrase String and gives us a Phrase Object
export function stringPhraseToObject(phraseString) {

  let phraseRegex = /(.*)\t(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|/;
  let phraseMatch = phraseString.match(phraseRegex);


  const phraseObject = {
    order: romanToNumber(phraseMatch[1]),
    phraseBody: [
      stringBlockToObject(phraseMatch[2], 1),
      stringBlockToObject(phraseMatch[3], 2),
      stringBlockToObject(phraseMatch[4], 3),
      stringBlockToObject(phraseMatch[5], 4),
      stringBlockToObject(phraseMatch[6], 5),
      stringBlockToObject(phraseMatch[7], 6),
      stringBlockToObject(phraseMatch[8], 7),
      stringBlockToObject(phraseMatch[9], 8)
    ]
  };

  return phraseObject;


};

// Function that transforms a Step in String Format into an Step Object
export function stringStepToObject(stringStep) {

  const initStep = {
    order: 1,
    stage: '',
    kind: '',
    stepBody: []
  };

  let stepRegex = /Step (\d+) : (.*) : (.*)\n\n(.*)\n\n---/;
  let stepMatch = stringStep.match(stepRegex);
  initStep.order = stepMatch[1];
  initStep.stage = stepMatch[2];
  initStep.kind = stepMatch[3];

  let bodyStepString = stepMatch[4];

  let stepArray = bodyStepString.split('\n');
  initStep.stepBody = stepArray.map(stringPhraseToObject);

  return initStep;

};


//Function to transform a String into a Ballet Class (provided the String is Properly Formatted)
export function balletStringToObject(stringBallet) {

  //First We Initialize the Ballet Class
  const initClass = {
    master: '',
    mounth: 'January',
    day: 1,
    year: 2024,
    country: '',
    classBody: []
  };

  let classRegex = /Master: (.*)\nDate: (.*) (.*) (.*)\nCountry: (.*)\n---\n\n(.*)\n\n$/;
  let balletMatch = stringBallet.match(classRegex);

  initClass.master = balletMatch[1];
  initClass.mounth = balletMatch[2];
  initClass.day = balletMatch[3];
  initClass.year = balletMatch[4];
  initClass.country = balletMatch[5];

  let bodyClassString = balletMatch[6];

  let classArray = bodyClassString.split('\n\n');
  initClass.classBody = classArray.map(stringStepToObject);

  return initClass;


};