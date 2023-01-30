console.log('Hello World!');

const age = prompt('Enter your age: ');
const r_age = 90 - age;
window.alert(`Your remaining years are: ${r_age} years`);

function lifeInWeeks(age) {
   
/************Don't change the code above************/    
   
    //Write your code here.
   
   
const rmonth = 12 * r_age;
window.alert(`Your remaining months are: ${rmonth} months`);
rweek = 52 * r_age;
window.alert(`Your remaining weeks are: ${rweek} weeks`);
rday = 365 * r_age;
window.alert(`Your remaining days are: ${rday} days`);
   
/*************Don't change the code below**********/
}
lifeInWeeks(age);

//Love Calculator


const n1 = prompt('First person name: ');
const n2 = prompt('Second person name: ');

const mch = Math.floor(Math.random() * 100);

window.alert(`${n1} and ${n2} are ${mch}% match!!`);

document.getElementById('demo').innerHTML = 
(`${n1} and ${n2} are ${mch}% match!!`);
