module.exports = () => {

  getSequence = (n) => {
    let count = 0;
    let arr = (n + '').split('');
    let pastNumber = arr[0];

    let output = (n + '').split('').reduce((acc, curr, i) => {
      if(curr === pastNumber) {
        count ++;
      } 
      if (curr !== pastNumber) {
        acc += `${count}${pastNumber}`;
        pastNumber = curr;
        count = 1;
      }
      if( i === (arr.length - 1)) {
        acc += `${count}${curr}`;
      }
      return acc;
    }, '');
    
    return output;
}

  return {
    getSequence
  }
}