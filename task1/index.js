function calculate(stringToCalc) {
  let arrToCalc = stringToCalc.split(' ');
  let dotsBeforeSign = arrToCalc[0].length;
  let dotsAfterSign = arrToCalc[2].length;
  let sign = arrToCalc[1];
  let allDots = 0;

  if (dotsBeforeSign >= dotsAfterSign) {

    if (sign === '+') {
      allDots = dotsBeforeSign + dotsAfterSign;
      console.log(allDots)

    } else if (sign === '-') {
      allDots = dotsBeforeSign - dotsAfterSign;
      console.log(allDots)

    } else if (sign === '//') {
      allDots = dotsBeforeSign / dotsAfterSign;
      console.log(allDots)

    } else if (sign === '*') {
      allDots = dotsBeforeSign * dotsAfterSign;
      console.log(allDots)

    }

    if (allDots <= 0) {
      return ''
    } else if (dotsBeforeSign < dotsAfterSign) {
      return ''
    }

    let arrOfDots = [];

    for (num = 1; num <= allDots; num++) {
      arrOfDots.push('.');
    }

    let stringOfDots = arrOfDots.join('');
    console.log(stringOfDots);

    return stringOfDots
  }
}
calculate('..... - ...')
