const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const playSound = new Audio('sounds/play.mp3');
const tickSound = new Audio('sounds/tick2.mp3');
const finishSound = new Audio('sounds/finish.mp3');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
	onStart(totalDuration) {
		playSound.play();
		finishSound.pause();
		duration = totalDuration;
	},
	onTick(timeRemaining) {
		tickSound.play();
		circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
	},
	onComplete() {
		finishSound.play();
		console.log('Timer is completed');
	},
	onPause() {
		finishSound.pause();
		tickSound.pause();
	}
});
