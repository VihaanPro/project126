function setup(){
    canvas=createCanvas(300,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,350);
    video.hide();
}
function draw(){
    image(video,0,100,300,350);
}