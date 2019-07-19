module.exports = () => {

  getSequence = (n) => {
    let count = 0;
    let numbersArr = (n + '').split('');
    let lastNum = numbersArr[0];

    return numbersArr.reduce((acc, curr, i) => {
      (curr === lastNum) ? (count ++) : (acc += `${count}${lastNum}`, lastNum = curr, count = 1);
      return ( i === (numbersArr.length - 1)) ? `${acc}${count}${curr}` : acc;
    }, '');
}

  return {
    getSequence
  }
}