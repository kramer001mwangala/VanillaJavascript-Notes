const jina=prompt("Enter Your Name");
const yearOfBirth=prompt ("Enter Year of birth");
const job=prompt("Enter your job");
const year = new Date().getFullYear();
const age=year-yearOfBirth;
//The const popup contains the template literal

const popup=alert(`Hey "${jina}" congratulations you are "${year-yearOfBirth}" Years Old`)
