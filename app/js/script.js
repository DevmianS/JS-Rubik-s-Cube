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
var topBackTop = document.getElementById('top_back-top');
var topBackBack = document.getElementById('top_back-back');
var bottomBackBottom = document.getElementById('bottom_back-bottom');
var bottomBackBack = document.getElementById('bottom_back-back');
var topLeftTop = document.getElementById('top_left-top');
var topLeftLeft = document.getElementById('top_left-left');
var bottomLeftBottom = document.getElementById('bottom_left-bottom');
var bottomLeftLeft = document.getElementById('bottom_left-left');
var topRightTop = document.getElementById('top_right-top');
var topRightRight = document.getElementById('top_right-right');
var bottomRightBottom = document.getElementById('bottom_right-bottom');
var bottomRightRight = document.getElementById('bottom_right-right');
var bottomRightRight = document.getElementById('bottom_right-right');
var topLeftFrontTop = document.getElementById('top_left_front-top');
var topLeftFrontLeft = document.getElementById('top_left_front-left');
var topLeftFrontFront = document.getElementById('top_left_front-front');
var topFrontRightTop = document.getElementById('top_front_right-top');
var topFrontRightFront = document.getElementById('top_front_right-front');
var topFrontRightRight = document.getElementById('top_front_right-right');
var topRightBackTop = document.getElementById('top_right_back-top');
var topRightBackRight = document.getElementById('top_right_back-right');
var topRightBackBack = document.getElementById('top_right_back-back');
var topBackLeftTop = document.getElementById('top_back_left-top');
var topBackLeftBack = document.getElementById('top_back_left-back');
var topBackLeftLeft = document.getElementById('top_back_left-left');
var bottomLeftFrontBottom = document.getElementById('bottom_left_front-bottom');
var bottomLeftFrontLeft = document.getElementById('bottom_left_front-left');
var bottomLeftFrontFront = document.getElementById('bottom_left_front-front');
var bottomFrontRightBottom = document.getElementById('bottom_front_right-bottom');
var bottomFrontRightFront = document.getElementById('bottom_front_right-front');
var bottomFrontRightRight = document.getElementById('bottom_front_right-right');
var bottomRightBackBottom = document.getElementById('bottom_right_back-bottom');
var bottomRightBackRight = document.getElementById('bottom_right_back-right');
var bottomRightBackBack = document.getElementById('bottom_right_back-back');
var bottomBackLeftBottom = document.getElementById('bottom_back_left-bottom');
var bottomBackLeftBack = document.getElementById('bottom_back_left-back');
var bottomBackLeftLeft = document.getElementById('bottom_back_left-left');





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
        moveFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg)translateZ("+(translateZ-1)+"px)" ;
        moveRight.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateZ("+(translateZ-1)+"px)" ;
        moveLeft.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg) translateZ("+(translateZ-1)+"px)" ;
        moveBack.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg) translateZ("+(translateZ-1)+"px)" ;
        moveTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateZ("+(translateZ-1)+"px)" ;
        moveBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateZ("+(translateZ-1)+"px)" ;
//move pieces--------------------------------------------
        frontCenter.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg) translateZ("+(translateZ+1)+"px)" ;
        rightCenter.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateZ("+(translateZ+1)+"px)" ;
        backCenter.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg) translateZ("+(translateZ+1)+"px)" ;
        leftCenter.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg) translateZ("+(translateZ+1)+"px)" ;
        topCenter.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateZ("+(translateZ+1)+"px)" ;
        bottomCenter.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateZ("+(translateZ+1)+"px)" ;
       
        topFrontFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg) translateX(0px) translateY(-100px) translateZ("+(translateZ+1)+"px)" ;
        topFrontTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(0px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;
       
        bottomFrontFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg) translateX(0px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;
        bottomFrontBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateX(0px) translateY(-100px) translateZ("+(translateZ+1)+"px)" ;
       
        leftFrontLeft.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg) translateX(100px) translateY(0px) translateZ("+(translateZ+1)+"px)" ;
        leftFrontFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg) translateX(-100px) translateY(0px) translateZ("+(translateZ+1)+"px)" ;
       
        frontRightFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg) translateX(100px) translateY(0px) translateZ("+(translateZ+1)+"px)" ;
        frontRightRight.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateX(-100px) translateY(0px) translateZ("+(translateZ+1)+"px)" ;
       
        rightBackRight.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateX(100px) translateY(0px) translateZ("+(translateZ+1)+"px)" ;
        rightBackBack.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg) translateX(-100px) translateY(0px) translateZ("+(translateZ+1)+"px)" ;
       
        backLeftBack.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg) translateX(100px) translateY(0px) translateZ("+(translateZ+1)+"px)" ;
        backLeftLeft.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg)  translateX(-100px) translateY(0px) translateZ("+(translateZ+1)+"px)" ;
       
        topBackTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(0px) translateY(-100px) translateZ("+(translateZ+1)+"px)" ;
        topBackBack.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg) translateX(0px) translateY(-100px) translateZ("+(translateZ+1)+"px)" ;
       
        bottomBackBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg)  translateX(0px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;
        bottomBackBack.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg) translateX(0px) translateY(100px) translateZ("+(translateZ)+"px)" ; 
       
        topLeftTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(-100px) translateY(0px) translateZ("+(translateZ+1)+"px)" ;
        topLeftLeft.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg) translateX(0px) translateY(-100px) translateZ("+(translateZ+1)+"px)" ;
       
        bottomLeftBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg)  translateX(-100px) translateY(0px) translateZ("+(translateZ+1)+"px)" ;
        bottomLeftLeft.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg) translateX(0px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;
       
        topRightTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg)  translateX(100px) translateY(0px) translateZ("+(translateZ+1)+"px)" ;
        topRightRight.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateX(0px) translateY(-100px) translateZ("+(translateZ+1)+"px)" ;
       
        bottomRightBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateX(100px) translateY(0px) translateZ("+(translateZ+1)+"px)" ;
        bottomRightRight.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateX(0px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;
      
        topLeftFrontTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(-100px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;
        topLeftFrontLeft.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg) translateX(100px) translateY(-100px)  translateZ("+(translateZ+1)+"px)" ;
        topLeftFrontFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg) translateX(-100px) translateY(-100px) translateZ("+(translateZ+1)+"px)" ;  
       
        topFrontRightTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(100px) translateY(100px)  translateZ("+(translateZ+1)+"px)" ;
        topFrontRightFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg)  translateX(100px) translateY(-100px) translateZ("+(translateZ+1)+"px)" ;
        topFrontRightRight.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateX(-100px) translateY(-100px)  translateZ("+(translateZ+1)+"px)" ;
       
        topRightBackTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(100px) translateY(-100px) translateZ("+(translateZ+1)+"px)" ;
        topRightBackRight.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateX(100px) translateY(-100px)  translateZ("+(translateZ+1)+"px)" ;
        topRightBackBack.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg) translateX(-100px) translateY(-100px) translateZ("+(translateZ+1)+"px)" ;  
       
        topBackLeftTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(-100px) translateY(-100px)  translateZ("+(translateZ+1)+"px)" ;
        topBackLeftBack.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg)  translateX(100px) translateY(-100px) translateZ("+(translateZ+1)+"px)" ;
        topBackLeftLeft.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg) translateX(-100px) translateY(-100px)  translateZ("+(translateZ+1)+"px)" ;
       
        bottomLeftFrontBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateX(-100px) translateY(-100px)  translateZ("+(translateZ+1)+"px)" ;
        bottomLeftFrontLeft.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg) translateX(100px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;
        bottomLeftFrontFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg) translateX(-100px) translateY(100px) translateZ("+(translateZ)+"px)" ;

        bottomFrontRightBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateX(100px) translateY(-100px) translateZ("+(translateZ)+"px)" ;
        bottomFrontRightFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg) translateX(100px) translateY(100px)translateZ("+(translateZ)+"px)" ;
        bottomFrontRightRight.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateX(-100px) translateY(100px) translateZ("+(translateZ)+"px)" ;
   
        bottomRightBackBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateX(100px) translateY(100px)  translateZ("+(translateZ+1)+"px)" ;
        bottomRightBackRight.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateX(100px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;
        bottomRightBackBack.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg) translateX(-100px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;

        bottomBackLeftBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg)  translateX(-100px) translateY(100px)  translateZ("+(translateZ+1)+"px)" ;
        bottomBackLeftBack.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg) translateX(100px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;
        bottomBackLeftLeft.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg) translateX(-100px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;
}


function turnPitch(){
//move sides--------------------------------------------
        moveFront.style.transform = "rotateX("+pitch+"deg) rotateY( "+(yaw)+"deg) translateZ("+(translateZ-1)+"px)" ;
        moveRight.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw+90)+"deg) translateZ("+(translateZ-1)+"px)" ;
        moveLeft.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw-90)+"deg) translateZ("+(translateZ-1)+"px)" ;
        moveBack.style.transform = " rotateX("+(pitch)+"deg) rotateY("+(yaw+180)+"deg) translateZ("+(translateZ-1)+"px)" ;
        moveTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateZ("+(translateZ-1)+"px)" ;
        moveBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateZ("+(translateZ-1)+"px)" ;    
//move pieces--------------------------------------------
        frontCenter.style.transform = "rotateX("+pitch+"deg) rotateY( "+(yaw)+"deg) translateZ("+(translateZ+1)+"px)" ;
        rightCenter.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw+90)+"deg) translateZ("+(translateZ+1)+"px)" ;
        backCenter.style.transform = " rotateX("+(pitch)+"deg) rotateY("+(yaw+180)+"deg) translateZ("+(translateZ+1)+"px)" ;
        leftCenter.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw-90)+"deg) translateZ("+(translateZ+1)+"px)" ;
        topCenter.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateZ("+(translateZ+1)+"px)" ;
        bottomCenter.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateZ("+(translateZ+1)+"px)" ;
       
        topFrontFront.style.transform = "rotateX("+pitch+"deg) rotateY( "+(yaw)+"deg) translateX(0px) translateY(-100px) translateZ("+(translateZ+1)+"px)";
        topFrontTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(0px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;
       
        bottomFrontFront.style.transform = "rotateX("+pitch+"deg) rotateY( "+(yaw)+"deg) translateX(0px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;
        bottomFrontBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateX(0px) translateY(-100px) translateZ("+(translateZ+1)+"px)" ;
       
        leftFrontLeft.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw-90)+"deg) translateX(100px) translateY(0px) translateZ("+(translateZ+1)+"px)" ;
        leftFrontFront.style.transform = "rotateX("+pitch+"deg) rotateY( "+(yaw)+"deg) translateX(-100px) translateY(0px) translateZ("+(translateZ+1)+"px)" ;
       
        frontRightFront.style.transform = "rotateX("+pitch+"deg) rotateY( "+(yaw)+"deg) translateX(100px) translateY(0px) translateZ("+(translateZ+1)+"px)" ;
        frontRightRight.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw+90)+"deg) translateX(-100px) translateY(0px) translateZ("+(translateZ+1)+"px)" ;
        
        rightBackRight.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw+90)+"deg) translateX(100px) translateY(0px) translateZ("+(translateZ+1)+"px)" ; 
        rightBackBack.style.transform = " rotateX("+(pitch)+"deg) rotateY("+(yaw+180)+"deg) translateX(-100px) translateY(0px) translateZ("+(translateZ)+"px)" ;
       
        backLeftBack.style.transform = " rotateX("+(pitch)+"deg) rotateY("+(yaw+180)+"deg) translateX(100px) translateY(0px) translateZ("+(translateZ+1)+"px)" ;
        backLeftLeft.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw-90)+"deg)  translateX(-100px) translateY(0px) translateZ("+(translateZ+1)+"px)" ;
       
        topBackTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(0px) translateY(-100px) translateZ("+(translateZ+1)+"px)" ;
        topBackBack.style.transform = " rotateX("+(pitch)+"deg) rotateY("+(yaw+180)+"deg) translateX(0px) translateY(-100px) translateZ("+(translateZ+1)+"px)";
       
        bottomBackBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateX(0px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;    
        bottomBackBack.style.transform = " rotateX("+(pitch)+"deg) rotateY("+(yaw+180)+"deg) translateX(0px) translateY(100px) translateZ("+(translateZ)+"px)" ; 
       
        topLeftTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(-100px) translateY(0px) translateZ("+(translateZ+1)+"px)" ;
        topLeftLeft.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw-90)+"deg) translateX(0px) translateY(-100px) translateZ("+(translateZ+1)+"px)" ;
       
        bottomLeftBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateX(-100px) translateY(0px) translateZ("+(translateZ+1)+"px)" ;    
        bottomLeftLeft.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw-90)+"deg) translateX(0px) translateY(100px)  translateZ("+(translateZ+1)+"px)" ;
        
        topRightTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg)  translateX(100px) translateY(0px) translateZ("+(translateZ+1)+"px)" ;
        topRightRight.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw+90)+"deg) translateX(0px) translateY(-100px) translateZ("+(translateZ+1)+"px)" ;
       
        bottomRightBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateX(100px) translateY(0px) translateZ("+(translateZ+1)+"px)" ;    
        bottomRightRight.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw+90)+"deg) translateX(0px) translateY(100px)translateZ("+(translateZ+1)+"px)" ;
       
        topLeftFrontTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(-100px) translateY(100px)translateZ("+(translateZ+1)+"px)" ;
        topLeftFrontLeft.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw-90)+"deg) translateX(100px) translateY(-100px) translateZ("+(translateZ+1)+"px)" ;
        topLeftFrontFront.style.transform = "rotateX("+pitch+"deg) rotateY( "+(yaw)+"deg) translateX(-100px) translateY(-100px) translateZ("+(translateZ)+"px)" ;
       
        topFrontRightTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(100px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;
        topFrontRightFront.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw)+"deg) translateX(100px) translateY(-100px) translateZ("+(translateZ+1)+"px)" ;
        topFrontRightRight.style.transform = "rotateX("+pitch+"deg) rotateY( "+(yaw+90)+"deg) translateX(-100px) translateY(-100px) translateZ("+(translateZ)+"px)" ;
       
        topRightBackTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(100px) translateY(-100px)translateZ("+(translateZ+1)+"px)" ;
        topRightBackRight.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw+90)+"deg) translateX(100px) translateY(-100px) translateZ("+(translateZ+1)+"px)" ;
        topRightBackBack.style.transform = "rotateX("+pitch+"deg) rotateY( "+(yaw+180)+"deg) translateX(-100px) translateY(-100px) translateZ("+(translateZ)+"px)" ;
       
        topBackLeftTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(-100px) translateY(-100px) translateZ("+(translateZ+1)+"px)" ; 
        topBackLeftBack.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw+180)+"deg) translateX(100px) translateY(-100px) translateZ("+(translateZ+1)+"px)" ;
        topBackLeftLeft.style.transform = "rotateX("+pitch+"deg) rotateY( "+(yaw-90)+"deg) translateX(-100px) translateY(-100px) translateZ("+(translateZ+1)+"px)" ;
     
        bottomLeftFrontBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg)translateX(-100px) translateY(-100px) translateZ("+(translateZ+1)+"px)" ;
        bottomLeftFrontLeft.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw-90)+"deg) translateX(100px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;
        bottomLeftFrontFront.style.transform = "rotateX("+pitch+"deg) rotateY( "+(yaw)+"deg) translateX(-100px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;

        bottomFrontRightBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg)  translateX(100px) translateY(-100px) translateZ("+(translateZ+1)+"px)" ;  
        bottomFrontRightFront.style.transform = "rotateX("+pitch+"deg) rotateY( "+(yaw)+"deg) translateX(100px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;
        bottomFrontRightRight.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw+90)+"deg)translateX(-100px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;
     
        bottomRightBackBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg)translateX(100px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;
        bottomRightBackRight.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw+90)+"deg) translateX(100px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;
        bottomRightBackBack.style.transform = "rotateX("+pitch+"deg) rotateY( "+(yaw+180)+"deg) translateX(-100px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;

        bottomBackLeftBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateX(-100px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;
        bottomBackLeftBack.style.transform = " rotateX("+(pitch)+"deg) rotateY("+(yaw+180)+"deg) translateX(100px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;
        bottomBackLeftLeft.style.transform = "rotateX("+(pitch)+"deg) rotateY("+(yaw-90)+"deg) translateX(-100px) translateY(100px) translateZ("+(translateZ+1)+"px)" ;
}



 btnRight.addEventListener('click',turnRight);
 btnLeft.addEventListener('click',turnLeft);
 btnBottom.addEventListener('click',turnBottom);
 btnTop.addEventListener('click',turnTop);
