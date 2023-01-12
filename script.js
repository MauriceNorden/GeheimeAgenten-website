function SetVolume(val) {
    var player = document.getElementById("player");
    player.volume = val / 100;
    }

    var player = document.getElementById("player");
    var pause = document.getElementById("pause-ico");
    var play = document.getElementById("play-ico");
    var isPlaying = false;
    
    function togglePlay() {
    
    isPlaying ? player.pause() : player.play();
    }
    
    player.onplaying = function () {
    isPlaying = true;
    play.style.display = "none";
    pause.style.display = "block";
    };
    player.onpause = function () {
    isPlaying = false;
    play.style.display = "block";
    pause.style.display = "none";
    };