/*was added in ES6
 does not require  return key word when writing a one liner
  i.e birthyear => 2030-birthyear;*/
const year =birthyear => 2030-birthyear;
const age=year(2003);
console.log(age)
//Multi line arrow function
'use strict'
const pocketMoney = moneyGiven =>{
    const moneySpent = 3000-moneyGiven;
    const moneyLeft=1000-moneySpent;
    return moneyLeft;
}
console.log(pocketMoney(4000))