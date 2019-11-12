var questionOne = prompt("сколько у вас с собой есть денег?")
var questionTwo = prompt("сколько вы купили яблок?")
var questionThree = prompt(" сколько вы купили батонов хлеба?")
var answerPriceApples =() =>
{
resultOne = questionTwo  * prompt("сколько стоит одно яблоко?");
return resultOne;
} 
answerPriceApples();
var answerPriceBreads =() =>
{
resultTwo = questionThree  * prompt("сколько стоит один батон хлеба?");
return resultTwo;
} 
answerPriceBreads();
var cost =  resultOne + resultTwo;
var comparingMoneyAndCost = questionOne - cost;
const final = (comparingMoneyAndCost) => {
  return (comparingMoneyAndCost > 0 ?  document.write("true") : document.write("false"));
}
final(comparingMoneyAndCost);