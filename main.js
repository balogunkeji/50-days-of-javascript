const btn = document.getElementById('btn');
const result = document.getElementById('result');
const yearsLeft = document.getElementById('yearsLeft');
const output = document.getElementById('output');
const analyzeBtn = document.getElementById('analyzeBtn');
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

analyzeBtn.addEventListener('click', (event) => {
    const inputText = document.getElementById('inputText').value;
    output.innerHTML = `
       Number of Characters: ${inputText.length}. <br/>
       Upper-Case: ${inputText.toUpperCase()}<br/>
       lower-case: ${inputText.toLowerCase()}<br/>
       first-Character: ${inputText[0]}<br/>
       last-character: ${inputText[inputText.length - 1]}<br/>
       Type of Input: ${typeof(inputText)}
    `
})