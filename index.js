function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}

function johnLennonFacts(facts) {
  var exclamation = [];
  let i = 0;
  while (i < facts.length) {
    exclamation.push(facts[i] + "!!!")
    i++;
  }
  return exclamation;
}

function iLoveTheBeatles(number) {
  var array = [];
  let i = number;
  do {
    array.push("I love the Beatles!");
    i++;
  } while (i < 15)  
  return array;
  
}






