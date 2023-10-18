const age=prompt("Enter  Your age");
const  isOldEnough= age>=18;
if(isOldEnough){
    alert(`Hey Congradulations SInce your age is ${age},you qualify for a Driver's license`);
}else{
    alert(`We are sorry since your age is ${age}, you do not qualify for a drivers license`);
}
//added an else if statement
const miaka=prompt("Enter  Your age");
if(miaka>=18){
    alert(`Hey Congradulations SInce your age is ${miaka},you qualify for a Driver's license`);
    if(miaka<=18){
         alert(`We are sorry since your age is ${miaka}, you do not qualify for a drivers license`);
        
    }
}
else if(miaka<=18){
         alert(`We are sorry since your age is ${miaka}, you do not qualify for a drivers license`);
        
    }
    else{
    alert(`We are sorry input correct code`);
}
//added a const which can run in the else if statement
const age2=prompt("Enter  Your age");
if(age2>=18){
    alert(`Hey Congradulations SInce your age is ${age2},you qualify for a Driver's license`);
    if(age2<=18){
         alert(`We are sorry since your age is ${age2}, you do not qualify for a drivers license`);
        
    }
}
else if(age2<=18){
         alert(`We are sorry since your age is ${age2}, you do not qualify for a drivers license`);
        
    }
    else{
    alert(`We are sorry input correct code`);
}