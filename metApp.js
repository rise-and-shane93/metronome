const num = document.getElementById('beatTime');
var play = document.getElementById('play');
var stop = document.getElementById('stop');
var clear = document.getElementById('clear');
const audio = document.querySelector('audio');
stop.disabled = true;

//stop.disabled = 'true';

num.addEventListener('keydown', function(e) {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
        console.log('hey');
    } else {
        num.value = '';
        alert('please type a number');
        num.value = '';
    }
    console.log(e.keyCode);
});

var beats = null;

function playBeat() {
    audio.currentTime = 0;
    audio.play();
};

play.addEventListener('click', function() {
    var beat = parseInt(num.value);
    //console.log(beat);
    if (isNaN(beat)) {
        alert('Please enter a number');
        return;
    } else {
        play.disabled = true;
        stop.disabled = false;
        clear.disabled = true;
        const num = document.getElementById('beatTime');
        var beat = parseInt(num.value);
        //console.log(beat);
        audio.currentTime = 0;
        audio.play();
        beats = setInterval(playBeat, ((60/beat) * 1000));
    }
});

// function beat() {
//     setInterval(playBeat, ((60/beat) * 1000));
// }

stop.addEventListener('click', function() {
    play.disabled = false;
    stop.disabled = true;
    clear.disabled = false;
    clearInterval(beats);
});

clear.addEventListener('click', function() {
    num.value = '';
});