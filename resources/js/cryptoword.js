 class ShiftCipher {
   constructor(shiftNum) {
     this._shiftNum = shiftNum;
   }

   encrypt(msg) {
     // convert string to ASCII numbers
     const numArr = msg.toUpperCase().split('').map(char => char.charCodeAt(0));
     // shift numbers to user choise
     numArr.forEach((num, index, arr) => {
       if (num > 64 && num < 91) { 
         arr[index] = num + this._shiftNum; 
         if (arr[index] > 90) {
          arr[index] -= 26; // Wrap around to 'A'
        }
       }
     });
     // create string from new codes
     return numArr.map(code => String.fromCharCode(code)).join('').toUpperCase();
   }

   decrypt(msg) {
    // convert string to ASCII numbers
    const numArr = msg.toUpperCase().split('').map(char => char.charCodeAt(0));
    // shift numbers to user choice
    numArr.forEach((num, index, arr) => {
      if (num >= 65 && num <= 90) { // ASCII values for A-Z
        arr[index] = num - this._shiftNum;
        if (arr[index] < 65) {
          arr[index] += 26; // Wrap around to 'Z'
        }
      }
    });
    // create string from new codes
    return numArr.map(code => String.fromCharCode(code)).join('').toLowerCase();
  }
 } 

 const cipher = new ShiftCipher(2);
cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'
cipher.decrypt('K <3 OA RWRRA'); // returns 'i <3 my puppy'


console.log(cipher.encrypt('I love to code!'));
console.log(cipher.decrypt('K <3 OA RWRRA'));