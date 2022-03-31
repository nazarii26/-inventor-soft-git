function grid(number) {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let line;
  let string;
  let longAlphabetArr;

  if (number <= 0) {
    return null;

  } else if (number <= alphabet.length) {

    for (let i = 0; i < number; i++) {
      line = alphabet.slice(i, number + i);
      string = line.join('')
      console.log(string);
    }

  } else if (number > alphabet.length) {
    longAlphabetArr = alphabet.concat(alphabet, alphabet, alphabet);

    for (let i = 0; i < number; i++) {
      line = longAlphabetArr.slice(i, number + i);
      string = line.join('')
      console.log(string);
    }
  }
  return
}

grid(-2);

grid(0);

grid(25);

grid(50);