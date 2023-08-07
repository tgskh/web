const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const prompt = require('prompt-sync')({sigint: true});

process.on('SIGINT', () => {
  console.log('Game Over');
  process.exit();
});

class Field {
  constructor (field) {
      this._field = field;
    }
  get field() {
    return this._field;
  }

// print field to console
  print() {
    let fieldStr = '';
    for (let i = 0; i < fieldHeight; i++) {
      for (let j = 0; j < fieldWidth; j++) {
        const index = i * fieldWidth + j;
        fieldStr += this._field[index] + ' ';
      }
      fieldStr += '\n';
    }
    console.log(fieldStr);
  }
  // generate new field with parameters from user
  static generateField(height, width, numOfHoles) {
    this._field = [];
    this._size = [height, width];
    const randomLoc = () => Math.round(Math.random() * (height * width));
    //fill field 
    for (let i = 0; i < height*width; i++) {
      this._field.push(fieldCharacter);
    }
    // fill field by holes !!!!(need to be fixed later)!!!!
    for (let j = 0; j < numOfHoles; j++) {
      this._field[randomLoc()] = hole;
    }
    // fill start point and hat
    this._field[0] = pathCharacter;
    this._field[randomLoc()] = hat;
    return this._field;
  }
// playing game
  playGame() {
    //define current location of hat and user
    const hatLoc = this._field.indexOf('^');
    let currentLoc = this._field.indexOf('*');
    let futureLoc;
    let isLoose = false;
// update screen in console
    const updateField = () => {
      console.log('\x1Bc');
      this.print();
    }
// move user on field
    const move = () => {
      this._field[currentLoc] = fieldCharacter;
      this._field[futureLoc] = pathCharacter;
      currentLoc = futureLoc;
      updateField();
    }
// print starter field
    updateField ();    
// get info from user
    while ((this._field[this._hatLoc] !== '*') && !isLoose) {
      let step = (prompt('Which way to move? (U, R, D, L):')).toUpperCase();
      switch(true){
        case(step == 'U'):
          futureLoc = currentLoc - fieldWidth;
          if (currentLoc <= (fieldWidth-1) || this.field[futureLoc] == hole) {
            console.log('YOU LOOSE!');
            isLoose = true;
          } else {
              move ();
          }
        break;

         case(step == 'R'):
            futureLoc = currentLoc + 1;
          if ( futureLoc % fieldWidth == 0 || this.field[futureLoc] == hole) {
            console.log('YOU LOOSE!');
            isLoose = true;
          } else {
              move ();
          }
          break;

        case (step == 'D'):
          futureLoc = currentLoc + fieldWidth;
          if (currentLoc >= fieldWidth*(fieldHeight-1) || this.field[futureLoc] == hole) {
            console.log('YOU LOOSE!');
            isLoose = true;
          } else {
              move ();
          }
        break;
  
        case(step == 'L'):
          futureLoc = currentLoc - 1;
          if ( currentLoc % fieldWidth == 0 || this.field[futureLoc] == hole) {
            console.log('YOU LOOSE!');
            isLoose = true;
          } else {
              move ();
          }
        break;
        
        default:
        console.log("Please make correct choise (U, R, D, L)");
        break;
      }
    }
  }
}

console.log('Please define parameters of Field')
const fieldHeight = parseFloat(prompt('Hieght: '));
const fieldWidth = parseFloat(prompt('Width: '));
const holes =  prompt('q-ty of holes: ');
const userField = Field.generateField(fieldHeight, fieldWidth, holes);

const newGame = new Field(userField);
newGame.playGame();




