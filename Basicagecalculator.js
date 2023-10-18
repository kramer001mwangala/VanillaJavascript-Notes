const jina=prompt("Enter Your Name");
const yearOfBirth=prompt ("Enter Year of birth");
const year = new Date().getFullYear();
const age=year-yearOfBirth;
const popup=alert("Hey "+jina+" congratulations you are "+age+" Years Old")