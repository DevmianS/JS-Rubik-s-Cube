//sides--------------------------------------------
var moveFront = document.getElementById('front');
var moveRight = document.getElementById('right');
var moveLeft = document.getElementById('left');
var moveBack = document.getElementById('back');
var moveTop = document.getElementById('top');
var moveBottom = document.getElementById('bottom');
var getCube = document.querySelector('#cube');
//buttons--------------------------------------------
var btnRight = document.querySelector('.btn_right');
var btnLeft = document.querySelector('.btn_left');
var btnBottom = document.querySelector('.btn_bottom');
var btnTop = document.querySelector('.btn_top');

//pieces--------------------------------------------
var frontCenter = document.getElementById('front_center');
var rightCenter = document.getElementById('right_center');
var backCenter = document.getElementById('back_center');
var leftCenter = document.getElementById('left_center');
var topCenter = document.getElementById('top_center');
var bottomCenter = document.getElementById('bottom_center');
var topFrontFront = document.getElementById('top_front-front');
var topFrontTop = document.getElementById('top_front-top');
var bottomFrontFront = document.getElementById('bottom_front-front');
var bottomFrontBottom = document.getElementById('bottom_front-bottom');
var leftFrontLeft = document.getElementById('left_front-left');
var leftFrontFront = document.getElementById('left_front-front');
var frontRightFront = document.getElementById('front_right-front');
var frontRightRight = document.getElementById('front_right-right');
var rightBackRight = document.getElementById('right_back-right');
var rightBackBack = document.getElementById('right_back-back');
var backLeftBack = document.getElementById('back_left-back');
var backLeftLeft = document.getElementById('back_left-left');



//variables----------------------------------------

var roll = 0;
var pitch = 0;
var yaw = 0;
var translateZ = 150;


function turnRight(){
        yaw+=30;     
        // if (yaw==360)yaw=0;
        turnYaw();
}

function turnLeft(){
        yaw-=30;     
        turnYaw();
}

function turnTop(){
        pitch+=30;     
        turnPitch();
}

function turnBottom(){
        pitch-=30;     
        turnPitch();
}


function turnYaw(){
//move sides--------------------------------------------
        moveFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg)translateZ("+(translateZ)+"px)" ;
        moveRight.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateZ("+(translateZ)+"px)" ;
        moveLeft.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg) translateZ("+(translateZ)+"px)" ;
        moveBack.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg) translateZ("+(translateZ)+"px)" ;
        moveTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateZ("+(translateZ)+"px)" ;
        moveBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateZ("+(translateZ)+"px)" ;
//move pieces--------------------------------------------
        frontCenter.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg) translateZ("+(translateZ+3)+"px)" ;
        rightCenter.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateZ("+(translateZ+3)+"px)" ;
        backCenter.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg) translateZ("+(translateZ+3)+"px)" ;
        leftCenter.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg) translateZ("+(translateZ+3)+"px)" ;
        topCenter.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateZ("+(translateZ+3)+"px)" ;
        bottomCenter.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateZ("+(translateZ+3)+"px)" ;
        topFrontFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg) translateX(0px) translateY(-100px) translateZ("+(translateZ+3)+"px)" ;
        topFrontTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(0px) translateY(100px) translateZ("+(translateZ+3)+"px)" ;
        bottomFrontFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg) translateX(0px) translateY(100px) translateZ("+(translateZ+3)+"px)" ;
        bottomFrontBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateX(0px) translateY(-100px) translateZ("+(translateZ+3)+"px)" ;
        leftFrontLeft.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg) translateX(100px) translateY(0px) translateZ("+(translateZ+3)+"px)" ;
        leftFrontFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg) translateX(-100px) translateY(0px) translateZ("+(translateZ+3)+"px)" ;
        frontRightFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg) translateX(100px) translateY(0px) translateZ("+(translateZ+3)+"px)" ;
        frontRightRight.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateX(-100px) translateY(0px) translateZ("+(translateZ+3)+"px)" ;
        rightBackRight.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateX(100px) translateY(0px) translateZ("+(translateZ+3)+"px)" ;
        rightBackBack.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg) translateX(-100px) translateY(0px) translateZ("+(translateZ)+"px)" ;
        backLeftBack.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg) translateX(100px) translateY(0px) translateZ("+(translateZ)+"px)" ;
        backLeftLeft.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg)  translateX(-100px) translateY(0px) translateZ("+(translateZ)+"px)" ;
}


function turnPitch(){
//move sides--------------------------------------------
        moveFront.style.transform = "rotateX("+pitch+"deg) rotateY( "+(yaw)+"deg) translateZ("+(translateZ)+"px)" ;
        moveRight.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw+90)+"deg) translateZ("+(translateZ)+"px)" ;
        moveLeft.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw-90)+"deg) translateZ("+(translateZ)+"px)" ;
        moveBack.style.transform = " rotateX("+(pitch)+"deg) rotateY("+(yaw+180)+"deg) translateZ("+(translateZ)+"px)" ;
        moveTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateZ("+(translateZ)+"px)" ;
        moveBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateZ("+(translateZ)+"px)" ;    
//move pieces--------------------------------------------
        frontCenter.style.transform = "rotateX("+pitch+"deg) rotateY( "+(yaw)+"deg) translateZ("+(translateZ+3)+"px)" ;
        rightCenter.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw+90)+"deg) translateZ("+(translateZ+3)+"px)" ;
        backCenter.style.transform = " rotateX("+(pitch)+"deg) rotateY("+(yaw+180)+"deg) translateZ("+(translateZ+3)+"px)" ;
        leftCenter.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw-90)+"deg) translateZ("+(translateZ+3)+"px)" ;
        topCenter.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateZ("+(translateZ+3)+"px)" ;
        bottomCenter.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateZ("+(translateZ+3)+"px)" ;
        topFrontFront.style.transform = "rotateX("+pitch+"deg) rotateY( "+(yaw)+"deg) translateX(0px) translateY(-100px) translateZ("+(translateZ+3)+"px)";
        topFrontTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(0px) translateY(100px) translateZ("+(translateZ+3)+"px)" ;
        bottomFrontFront.style.transform = "rotateX("+pitch+"deg) rotateY( "+(yaw)+"deg) translateX(0px) translateY(100px) translateZ("+(translateZ+3)+"px)" ;
        bottomFrontBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateX(0px) translateY(-100px) translateZ("+(translateZ+3)+"px)" ;
        leftFrontLeft.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw-90)+"deg) translateX(100px) translateY(0px) translateZ("+(translateZ+3)+"px)" ;
        leftFrontFront.style.transform = "rotateX("+pitch+"deg) rotateY( "+(yaw)+"deg) translateX(-100px) translateY(0px) translateZ("+(translateZ+3)+"px)" ;
        frontRightFront.style.transform = "rotateX("+pitch+"deg) rotateY( "+(yaw)+"deg) translateX(100px) translateY(0px) translateZ("+(translateZ+3)+"px)" ;
        frontRightRight.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw+90)+"deg) translateX(-100px) translateY(0px) translateZ("+(translateZ+3)+"px)" ;
        rightBackRight.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw+90)+"deg) translateX(100px) translateY(0px) translateZ("+(translateZ+3)+"px)" ; 
        rightBackBack.style.transform = " rotateX("+(pitch)+"deg) rotateY("+(yaw+180)+"deg) translateX(-100px) translateY(0px) translateZ("+(translateZ)+"px)" ;
        backLeftBack.style.transform = " rotateX("+(pitch)+"deg) rotateY("+(yaw+180)+"deg) translateX(100px) translateY(0px) translateZ("+(translateZ)+"px)" ;
        backLeftLeft.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw-90)+"deg)  translateX(-100px) translateY(0px) translateZ("+(translateZ)+"px)" ;
}



 btnRight.addEventListener('click',turnRight);
 btnLeft.addEventListener('click',turnLeft);
 btnBottom.addEventListener('click',turnBottom);
 btnTop.addEventListener('click',turnTop);
