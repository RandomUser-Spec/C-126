song = "";
score_right_wrist = 0;
score_left_wrist = 0;
right_wristX = 0;
right_wristY = 0;
left_wristX = 0;
left_wristY = 0;

function preload()
{
    song = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Has Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        right_wristX = results[0].pose.rightWrist.x;
        right_wristY = results[0].pose.rightWrist.y;
        left_wristX = results[0].pose.leftWrist.x;
        left_wristY = results[0].pose.leftWrist.y;
        console.log('leftWrist x = ' + left_wristX + 'leftWrist y = ' + left_wristY);
        console.log('rightWrist x = ' + right_wristX + 'rightWrist y = ' + right_wristY);
        score_left_wrist = results[0].pose.keypoints[9].score
        score_right_wrist = results[0].pose.keypoints[10].score
    }
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
    song.setVolume(0.5);
    song.rate(1);
}

function stop()
{
    song.stop();
}

function pause()
{
    song.pause();
}

