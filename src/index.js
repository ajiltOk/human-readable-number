function getValue(number) {
  const redable = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  } 
  return redable[number];
}

function hundred(number) {
  let hundred;
  if(number % 100 == 0) {
    hundred = getValue(number / 100) + ' hundred';
  } else {
    hundred = getValue(Math.floor(number / 100)) + ' hundred';
  }
  return hundred;
}

function dozen(number) {
  let dozen;
  if(number % 10 == 0) {
    dozen = getValue(number);
  } else {
    dozen = getValue((Math.floor(number / 10) * 10));
  }
  return dozen;
}

function unit(number) {
  return getValue(number);
}

module.exports = function toReadable (number) {
  let str;
  if(number == 0) {
    str = 'zero';
  } else if(number <= 20) {
    str = unit(number);
  } else if(number > 20 && number < 100) {
    if(number % 10 == 0) {
      str = dozen(number);
    } else {
      str = dozen(number) + ' ' + unit(number % 10);
    }
  } else if(number >= 100) {
    if(number % 100 == 0) {
      str = hundred(number);
    } else if(number % 100 < 20) {
      str = hundred(number) + ' ' + unit(number % 100);
    } else {
      if(number % 10 == 0){
        str = hundred(number) + ' ' + dozen(number % 100);
      } else {
        str = hundred(number) + ' ' + dozen(number % 100) + ' ' + unit(number % 10);
      }
    }
  }
  return str;
}