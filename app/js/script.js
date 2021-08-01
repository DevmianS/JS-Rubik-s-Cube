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


//variables----------------------------------------

var roll = 0;
var pitch = 0;
var yaw = 0;
var translateZ = 150;


function turnRight(){
        yaw+=10;     
        turnYaw();
}

function turnLeft(){
        yaw-=10;     
        turnYaw();
}

function turnTop(){
        pitch+=10;     
        turnPitch();
}

function turnBottom(){
        pitch-=10;     
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
        frontCenter.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg) translateZ("+(translateZ+5)+"px)" ;
        rightCenter.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateZ("+(translateZ+5)+"px)" ;
        backCenter.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg) translateZ("+(translateZ+5)+"px)" ;
        leftCenter.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg) translateZ("+(translateZ+5)+"px)" ;
        topCenter.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateZ("+(translateZ+5)+"px)" ;
        bottomCenter.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateZ("+(translateZ+5)+"px)" ;
        topFrontFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg) translateX(0px) translateY(-100px) translateZ("+(translateZ+5)+"px)" ;
        topFrontTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(0px) translateY(100px) translateZ("+(translateZ+5)+"px)" ;
        bottomFrontFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg) translateX(0px) translateY(100px) translateZ("+(translateZ+5)+"px)" ;
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
        frontCenter.style.transform = "rotateX("+pitch+"deg) rotateY( "+(yaw)+"deg) translateZ("+(translateZ+5)+"px)" ;
        rightCenter.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw+90)+"deg) translateZ("+(translateZ+5)+"px)" ;
        backCenter.style.transform = " rotateX("+(pitch)+"deg) rotateY("+(yaw+180)+"deg) translateZ("+(translateZ+5)+"px)" ;
        leftCenter.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw-90)+"deg) translateZ("+(translateZ+5)+"px)" ;
        topCenter.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateZ("+(translateZ+5)+"px)" ;
        bottomCenter.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateZ("+(translateZ+5)+"px)" ;
        topFrontFront.style.transform = "rotateX("+pitch+"deg) rotateY( "+(yaw)+"deg) translateX(0px) translateY(-100px) translateZ("+(translateZ+5)+"px)";
        topFrontTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(0px) translateY(100px) translateZ("+(translateZ+5)+"px)" ;
        bottomFrontFront.style.transform = "rotateX("+pitch+"deg) rotateY( "+(yaw)+"deg) translateX(0px) translateY(100px) translateZ("+(translateZ+5)+"px)" ;
}



 btnRight.addEventListener('click',turnRight);
 btnLeft.addEventListener('click',turnLeft);
 btnBottom.addEventListener('click',turnBottom);
 btnTop.addEventListener('click',turnTop);
