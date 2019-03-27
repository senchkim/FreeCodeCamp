const btn = document.getElementById(`btn`);
const content = document.getElementById(`content`);

const toRoman = () => {
  let num = document.getElementById(`number`).value;
  let arr = num.toString().split(``);
  let zeros = 1;
  let roman = [];

  for (let i = (arr.length - 1); i >= 0; i--) {
    arr[i] = arr[i] * zeros;
    zeros *= 10;
  }

  for (let i = 0; i < arr.length; i++) {

    switch (arr[i]) {
      case 1:
        roman.push(`I`);
        break;
      case 2:
        roman.push(`II`);
        break;
      case 3:
        roman.push(`III`);
        break;
      case 4:
        roman.push(`IV`);
        break;
      case 5:
        roman.push(`V`);
        break;
      case 6:
        roman.push(`VI`);
        break;
      case 7:
        roman.push(`VII`);
        break;
      case 8:
        roman.push(`VIII`);
        break;
      case 9:
        roman.push(`IX`);
        break;
      case 10:
        roman.push(`X`);
        break;
      case 20:
        roman.push(`XX`);
        break;
      case 30:
        roman.push(`XXX`);
        break;
      case 40:
        roman.push(`XL`);
        break;
      case 50:
        roman.push(`L`);
        break;
      case 60:
        roman.push(`LX`);
        break;
      case 70:
        roman.push(`LXX`);
        break;
      case 80:
        roman.push(`LXXX`);
        break;
      case 90:
        roman.push(`XC`);
        break;
      case 100:
        roman.push(`C`);
        break;
      case 200:
        roman.push(`CC`);
        break;
      case 300:
        roman.push(`CCC`);
        break;
      case 400:
        roman.push(`CD`);
        break;
      case 500:
        roman.push(`D`);
        break;
      case 600:
        roman.push(`DC`);
        break;
      case 700:
        roman.push(`DCC`);
        break;
      case 800:
        roman.push(`DCCC`);
        break;
      case 900:
        roman.push(`CM`);
        break;
      case 1000:
        roman.push(`M`);
        break;
      case 2000:
        roman.push(`MM`);
        break;
      case 3000:
        roman.push(`MMM`);
        break;
      default:
        break;
    }
  }
  content.innerHTML = roman.join(``);
};

btn.addEventListener(`click`, toRoman);
