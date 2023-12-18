objects = [ ];
status = "";
video = "";

function preload() {
    
}

function setup() {
  canvas = createCanvas(480,380);
  canvas.center();
  
  video = createCapture(0,0,480,380);
    video.center();
}

function Start() {
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("Status").innerHTML = "STATUS -> Detecting Object"
}

function modelLoaded() {
    console.log("model is loaded");
}

function draw() {
    image(video,0,0,480,380);
    
    objectDetector.detect(video,gotResults);
    if (status == "Input" ) {
        for (i = 0 ; i < objects.length; i++){
            document.getElementById("Status_Found").innerHTML = "STATUS -> Object NOT Found"
            document.getElementById("Status").innerHTML = "STATUS -> Detected Object"
            fill("#FF0000");
            percent = floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }   
        }
    }
        


function gotResults(error,results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;

}