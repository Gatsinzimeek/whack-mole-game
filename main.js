const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeleft = document.querySelector('#timeleft');

let score = document.querySelector('#score');

let result = 0;
let currentTime = timeleft.textContent;

function randomsquare(){
	square.forEach(className =>{
		className.classList.remove('mole');
	})

	let randomPosition = square[Math.floor(Math.random() * 9)];
	randomPosition.classList.add('mole');
 	
 	hitPosition = randomPosition.id
}

square.forEach(id => {
	id.addEventListener('mouseup', () =>{
		if (id.id === hitPosition) {
			result = result+1;
			score.textContent = result;
		}
	})
})

function moveMole(){
	let timerid = null;
	timerid = setInterval(randomsquare, 1000);
}

moveMole();

function countDown(){
	currentTime--;
	timeleft.textContent = currentTime;

	if (currentTime === 0) {
		clearInterval(timerid);
		alert('GAME OVER! Your final score is ' + result);
		timeleft.textContent = '60';
		result = 0;
		score.textContent = result;

	}
}

let timerid = setInterval(countDown, 1000);