let mobilenet;
let video;
let name='';

function setup(){

    video = createCapture(VIDEO);
    createCanvas(500,50);
    background(1);
    mobilenet = ml5.imageClassifier('MobileNet',video,modelReady);
}

function modelReady(){
    console.log("Model is Ready..");
    mobilenet.predict(gotResult);
}


function gotResult(err,res){
    if(err){
        console.error(err);
    }else{
        name =res[0].className;
        let prob =res[0].probability;
        mobilenet.predict(gotResult);
    }
}

function draw(){
    image(video,0,0);
    fill(255);
    background(1);
    textSize(24);
    text(name,10,height -50);
}