// Button sounds functions, clicks whenever a button is pressed:
$('button').click(function(){
    document.getElementById('clicked').play();
});

// Background music. For some reason, will not play on first load but will play on refresh/game restart...? 
function musicLoop(){
    document.getElementById('bgm').play();
}
// --> Comment this out when working or the music will drive you insane
musicLoop();

// Mute sound (this was a good suggestion)
function muteIt(){
    const loudNoises= document.querySelectorAll('audio');
    for (const element of loudNoises){
        // Unmute functionality
        if (element.muted === true){
            element.muted = false;
            musicLoop(); // resumes BGM (unless I've commented it about, as above)
        // Mute functionality
        } else {
            element.muted = true;
            element.pause();
        }
    }
}

// Makes mute button do mute. Thanks, mute button.
document.getElementById('mute').addEventListener('click', muteIt);