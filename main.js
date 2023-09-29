var input = 'turpentine and turtles';
var vowels = ['a','e','i','o','u'];
var resultArray = [];

for (let i = 0; i < input.length; i+=1) {
  //console.log(input[i]);
  //debugger;

  for (let j = 0; j < vowels.length; j++) {
    //console.log(input([j]));
    if (input [i] === vowels[j]) {
        
      if (input[i] === 'e') {
          resultArray.push ('ee');
        } else if (input[i] === 'u') {
          resultArray.push ('uu');
        } else { resultArray.push(input[i]);
        }
      }
    }
};
console.log(resultArray.join("").toUpperCase());
