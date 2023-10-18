/* Write your code below. Good luck! 🙂 */
let heightMark = prompt("Please Enter Your height in Metres");
let massMark=prompt("Please Enter your weight in Kilograms");

let massJohn= prompt("Please Enter your Mass in Kilograms");
let heightJohn=prompt("please Enter your height in metres");

//BMI=mass/(height*height)

let BMIMARK=massMark/(heightMark*heightMark);
let BMIJOHN=massJohn/(heightJohn*heightJohn);

const bmiResults=alert("The Bmi of Mark is "+BMIMARK+" While that of John is "+BMIJOHN);

 function BMIComparison (){
    if (BMIMARK>BMIJOHN){
        console.log("Mark has a higher Bmi than John")
    }
    else{
        console.log("John Has A Higher Bmi")
    }
}