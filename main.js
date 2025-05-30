//variable declared is only visible to the block. surname is not visible outside the block.
const name = 'Hello Tomi';

if(name) {
    let surname = 'Balogun';
    console.log(name + ' ' + surname);
}

console.log(name);

//counter


function increment() {
    let counter = 0
    return function() {
      let rand = Math.floor(Math.random() * counter++);
        document.querySelector('span').textContent = rand;
        localStorage.setItem('count', rand);
        Number(localStorage.getItem('count'));
    }
}
const count = document.querySelector('button');
const updateCounter = increment();
count.addEventListener('click', updateCounter);
const savedCount = localStorage.getItem('count');
document.querySelector('span').textContent = savedCount;
