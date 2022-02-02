video = "";

function preload(){
    video = createVideo('video.mp4');
}



function start () {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded !");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}