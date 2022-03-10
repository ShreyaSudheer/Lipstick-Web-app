lipX = 0;
lipY = 0;
function preload()
{
    lipstick_img = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}
function setup()
{   
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 300,300);
    image(lipstick_img, lipX, lipY, 45, 30);
}
function modelLoaded()
{
    console.log("The PoseNet Model is Loaded");
}
function take_snapshot()
{
    save("Lipstick_filter.png");
}
function gotPoses(results)
{
    console.log(results);
    noseX = console.log("lips X = " + results[0].pose.lip.x);
    noseY = console.log("lips Y = " + results[0].pose.lip.y);
}