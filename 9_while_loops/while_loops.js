//in while loop we only specify the condition
//this is a basic while loop structure
'use strict'
let kramer=1;
while(kramer<=21){
    console.log(`hi kramer this is mistake number ${kramer}`)
    kramer++;
}
// repeats until the condition 6 is met with the dice
//while loop is primarily used when your not sure how many times the loop will run
let dice=Math.trunc(Math.random()*6)+1
console.log(dice);
while(dice !==6){
console.log(`hey you rolled ${dice} would you mind trying again`);
    dice=Math.trunc(Math.random()*6)+1;  
}
