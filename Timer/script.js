document.querySelector('.timer').style.display = 'none';

let intervalId;
let initialTime = 40 * 60;;
let timeLeft = initialTime;

let breakTime = 20 * 60;
let initialBreak = breakTime;


function startBreak () { 
    secondInterval = setInterval(function() {
        initialBreak--;
        document.querySelector('.timer').textContent = formatTime(initialBreak);
        if (initialBreak <= 0) {
            clearInterval(secondInterval);
            document.querySelector('.timer').textContent = "Break time over lil nigga";
        }
    }, 1000);
}
function startTimer() {
    intervalId = setInterval(function() {
        timeLeft--;
        document.querySelector('.timer').textContent = formatTime(timeLeft);
        if (timeLeft <=0) {
            clearInterval(intervalId);
            document.querySelector('.timer').textContent = "Get a break";
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(intervalId);
    isPaused = true;
}
function restartTimer() {
    clearInterval(intervalId);
    timeLeft = initialTime;
    startTimer();
}

function restartBreak() {
    clearInterval(secondInterval);
    initialBreak = breakTime;
    startBreak();
}

function pauseBreak() {
    clearInterval(secondInterval);
    initialBreak = breakTime;
    isBreak = true;
}


function continueTimer () {

    if (isPaused) {
        document.querySelector('.timer').textContent = formatTime(timeLeft);
        startTimer();
        isPaused = false;
    }
}

function continueBreak () {
    if (isBreak) {
        document.querySelector('.timer').textContent = formatTime(initialBreak);
        startBreak();
        isBreak = false;
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    return `${minutes} minutes ${seconds < 10 ? '0': ''}${seconds} seconds`;
}
document.getElementById('command').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {

        if(e.target.value.toLowerCase() === 'start'){
            // STARTS TIME
        document.querySelector('.timer').style.display= 'block';    
        startTimer();
              
        document.querySelector('.timer').classList.add('animate');
        document.getElementById('command').classList.add('move-down');
    } else if (e.target.value.toLowerCase() === 'stop') {
        // STOPS THE TIME
        pauseTimer();
        document.querySelector('.timer').textContent = 'Paused timer...........';
       
    } else if (e.target.value.toLowerCase() === 'continue') {
        document.querySelector('.timer').style.display = 'block';
        continueTimer();
        //CONTINUES THE TIME
        document.querySelector('.timer').classList.add('animate');
        document.getElementById('command').classList.add('move-down');
    } else if (e.target.value.toLowerCase() === 'restart') {
        // THIS RESTARTS THE TIME
        document.querySelector('.timer').style.display='block';
        restartTimer();
        document.querySelector('.timer').classList.add('animate');
        document.getElementById('command').classList.add('move-down');

    } else if(e.target.value.toLowerCase() === 'break') {
        // THIS STARTS THE BREAK TIME
        document.querySelector('.timer').style.display='block';
        startBreak(); 
        document.querySelector('.timer').classList.add('animate');
        document.getElementById('command').classList.add('move-down');
    } else if(e.target.value.toLowerCase() === 'pause_break') {
        // THIS PAUSES THE BREAK TIME
        document.querySelector('.timer').style.display='block';
        pauseBreak();
       document.querySelector('.timer').textContent ='Paused Break..........';
        
    } else if(e.target.value.toLowerCase() === 'continue_break') {
        // THIS CONTINUES THE BREAK TIME
        document.querySelector('.timer').style.display = 'block';
        continueBreak();
    }
    else if(e.target.value.toLowerCase() === 'reset_break') {
        // THIS RESETS THE BREAK TIME
        document.querySelector('.timer').style.display = 'block';
        restartBreak();
        document.querySelector('.timer').classList.add('animate');
        document.getElementById('command').classList.add('move-down');

    }
    e.target.value='';

    e.preventDefault();
}
});