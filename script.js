class GeneratePassword {
  constructor() {
    console.log("Constructor Called");
  }

  // For Strong PassWord
  strongPassword() {
    let Password = "";
    for (let i = 0; i < 2; i++) {
      let sCharacter = Math.floor(Math.random() * (47 - 34)) + 33;
      sCharacter = String.fromCharCode(sCharacter);

      let nCharacter = Math.floor(Math.random() * (57 - 49)) + 48;
      nCharacter = String.fromCharCode(nCharacter);

      let cCharacter = Math.floor(Math.random() * (90 - 66)) + 65;
      cCharacter = String.fromCharCode(cCharacter);

      let smallCharacter = Math.floor(Math.random() * (128 - 98)) + 97;
      smallCharacter = String.fromCharCode(smallCharacter);

      Password += sCharacter + nCharacter + cCharacter + smallCharacter;
    }
    return Password;
  }

  // For Funny Password
  funnyPassword() {
    let PassWord = "";
    let arr = [
      "loveYouTeacher",
      "password",
      "nariyalTel",
      "sunnyLeone",
      "badamTel",
      "harpic",
      "jhadooPochha",
      "creamPowder",
    ];
    let rm = Math.floor(Math.random() * arr.length);
    PassWord = arr[rm];
    return PassWord;
  }

  // For Weak Password

  weekPassword() {
    let PassWord = "";
    let rm = Math.floor(Math.random() * 2);
    for (let i = 0; i < 8; i++) {
      if (rm == 0) {
        let nCharacter = Math.floor(Math.random() * (57 - 49) + 48);
        nCharacter = String.fromCharCode(nCharacter);
        PassWord += nCharacter;
      }
      if (rm == 1) {
        let cCharacter = Math.floor(Math.random() * (90 - 66) + 65);
        cCharacter = Math.floor(Math.random() * (90 - 66) + 65);
        cCharacter = String.fromCharCode(cCharacter);
        PassWord += cCharacter;
      }
      if (rm == 2) {
        let smallCharacter = Math.floor(Math.random() * (123 - 98) + 97);
        smallCharacter = String.fromCharCode(smallCharacter);
        PassWord += smallCharacter;
      }
    }
    return PassWord;
  }
}

let c1 = new GeneratePassword();

let addTxt = document.getElementById("addTxt");

function sBtn() {
    let sPass = c1.strongPassword();
    console.log(sPass);
    addTxt.innerText = sPass;
}

function fBtn() {
    let fPass = c1.funnyPassword();
    console.log(fPass);
    addTxt.innerText = fPass;
}

function wBtn() {
    let wPass = c1.weekPassword();
    console.log(wPass);
    addTxt.innerText = wPass;
}