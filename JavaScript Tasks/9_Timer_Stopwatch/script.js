const timerStart = document.querySelector(".timerStart");
const timerPlay = document.querySelector(".timerPlay");
const timerStop = document.querySelector(".timerStop");
const timerReset = document.querySelector(".timerReset");
const counter = document.querySelector(".counter");

const DATE = new Date();

// const timerBegin()

const timer = (currentTime) => {
	counter.innerHTML = "0";
	setTimeout(() => {
		timerBegin();
	}, 1000);
};

timerStart.addEventListener("click", () => {
	const currentTime = DATE.getTime;
	timer(currentTime);
});
