'use strict'
const footballTeams = [`Gor mahia`,`Afc Leopards`,`liverpool`,`Afc jakarta`]
console.log(footballTeams.indexOf(`liverpool`));
/*when the above method is called it will return a value of 2 since the index of
the liverpool in the Array is 2 since remember we start counting from 0*/


//in ES6 we use the method .includes i.e

'use strict'
const timuZaMpira = [`Gor mahia`,`Afc Leopards`,`liverpool`,`Afc jakarta`]
console.log(timuZaMpira.includes(`liverpool`));
//The .includes method can be use in conditionals such as
const teamYouSupport=prompt(`Enter the team you support`)
if(timuZaMpira.includes(teamYouSupport)){
    console.log(`we shabik wa ${teamYouSupport} io team kubwa we kaka`)
}else{
    {`${teamYouSupport} io ni team ndogo we kaka`}
}
