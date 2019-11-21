function haveEnough( amountOfMoney,amountOfApple,amountOfBread,priceOfAnApple,priceOfAPieceOfBread) 
 {
if (amountOfMoney > ((amountOfApple * priceOfAnApple) + (amountOfBread * priceOfAPieceOfBread))) 
{
console.log("\"Вам хватает денег на покупки\"");
}
else
{
 console.log("\"Вам не хватает денег\"");
}
}