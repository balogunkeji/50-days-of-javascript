const btn = document.getElementById('btn');
const result = document.getElementById('result');
const yearsLeft = document.getElementById('yearsLeft');
btn.addEventListener('click', () => {
    const birthYear = document.getElementById('birthYear').value;
    const currentYear = new Date().getFullYear();

    if (birthYear === '' ||  birthYear > currentYear) {
        result.textContent = 'Please enter a valid year';
        yearsLeft.textContent = '';
        return;
    }
    const age = currentYear - birthYear;
    result.textContent =`You are ${age} years old.`;

    const remainingYear = 100 - 4;
    if (remainingYear > 0) {
        yearsLeft.textContent = `You have ${remainingYear} years left until you turn 100.`;
    } else {
        yearsLeft.textContent = `Wow! You turned 100 ${Math.abs(remainingYear)} years ago! 🎉`;
    }
})

//variables
var name = 'Tomisin';
var name = 'Balogun'
let names = 'Balogun';

console.log(names, name);