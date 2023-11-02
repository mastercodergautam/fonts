function setup(){
    video=createCapture(VIDEO);
    video.size(800,800);
  canvas=createCanvas(800,700)  ;
canvas.position(900,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPose);

}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}
function draw(){
    background('#969A97');
}
function gotPose(results){
    if(results.length>0){
        console.log(results);
    }
}