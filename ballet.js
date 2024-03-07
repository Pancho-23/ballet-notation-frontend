

const stepStageMark = ['Warming', 'Plie', 'Bar Tendu', 'Jete', 'Ronde de Jambe', 'Fondu', 'Frappe', 'Bar Adagio', 'Grand Battement', 'Center Adagio', 'Center Tendu', 'Waltz', 'Petit Allegro', 'Allegro', 'Batterie', 'Sissone', 'Grand Waltz', 'Coda'];

const placeMark = ['Bar', 'Center'];



class BalletClass {
  constructor(name, year) {
    this.name = name;
    this.year = year;
    this.step = [];
  }


}

//Step from a Ballet Class
class Step {
  constructor(stepStage, placeStage) {

    this.stepStage = stepStage;
    this.placeStage = placeStage;
    this.stepBody = [];

  }

}

class Phrase {
  constructor(index) {
    this.index = index;
    this.body = [];
  }

  setIndex(newIndex) {
    this.index = newIndex;
  }

  pushBlock(newBlock) {
    this.body.push(newBlock);
  }


}

//Feet Class, you have to set: Position, Order, OpenClose.
class Feet {

  constructor(position = '', order = '', openClose = '') {
    this.position = position;
    this.order = order;
    this.openClose = openClose;
  }

  setPosition(newPosition) {
    this.position = newPosition;
  }

  setOrder(newOrder) {
    this.order = newOrder;
  }

  setOpenClose(newOpenClase) {
    this.openClose = newOpenClase;
  }

  feetDisplay() {
    return (this.position + this.order + this.openClose)
  }



}

//Leg Class, you have to set: Form, Cardinal and Side
class Leg {

  constructor(form = '', cardinal = '', side = '') {
    this.form = form;
    this.cardinal = cardinal;
    this.side = side;
  }

  setFrom(newForm) {
    this.position = newForm;
  }

  setCardinal(newCardinal) {
    this.cardinal = newCardinal;
  }

  setSide(newSide) {
    this.side = newSide;
  }

  legDisplay() {
    return (this.position + this.cardinal + this.side)
  }


}

//Arm Class, you have to Set: Position, Side and Form
class Arm {

  constructor(position = '', side = '', form = '') {
    this.position = position;
    this.side = side;
    this.form = form;
  }

  setPosition(newPosition) {
    this.position = newPosition;
  }

  setSide(newSide) {
    this.side = newSide;
  }

  setForm(newForm) {
    this.form = newForm;
  }


  armDisplay() {
    return (this.position + this.side + this.form)
  }


}

//Direction Class, you have to Set: Cardinal and Side
class Direction {

  constructor(cardinal = '', side = '') {
    this.cardinal = cardinal;
    this.side = side;
  }

  setCardinal(newCardinal) {
    this.cardinal = newCardinal;
  }

  setSide(newSide) {
    this.side = newSide;
  }

  directionDisplay() {
    return (this.cardinal + this.side)
  }



}



class Block {

  constructor(phrase, time) {

    this.phrase = phrase;
    this.time = time;
    this.place = '';
    this.hip = '';
    this.step = '';
    this.variant = [];
    this.feet = Feet();
    this.number = '';
    this.leg = Leg();
    this.direction = Direction();
    this.spin = ''
    this.leftarm = Arm();
    this.rightarm = Arm();
    this.head = '';


  }

  //Displays the block as a string, the unused aspects are set to ''.
  blockDisplay() {

    const variantDisplay = '';

    this.variant.forEach(
      function (currentValue) {
        variantDisplay += currentValue;
      }

    )

    return (
      this.place + this.hip + this.step + variantDisplay + this.feet.feetDisplay() + this.number + this.leg.legDisplay() + this.direction.directionDisplay() + this.spin + this.leftarm.armDisplay() + this.rightarm.armDisplay() + this.head
    )


  }

}






