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
var btnReset = document.querySelector('.btn_reset');

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

var pitch = 0;
var yaw = 0;
var translateZ = 150;
var direction = "";

var spacing = 1;
var innerSpacing = 1;



function cubeMovement(direction){
        if(direction=="right"){
                yaw+=30;     
                turnCube();
        }
        else if(direction=="left"){
                yaw-=30;     
                turnCube();
        }
        else if(direction=="bottom"){
                pitch-=30;     
                turnCube();
        }
        else if(direction=="top"){
                pitch+=30;     
                turnCube();
        }
        else alert("Wrong direction name! Only 'right, left, bottom, top' are allowed!");

}

function resetPosition(){
        yaw=0;
        pich=0;
        //WIP
}

function turnCube(){
//move sides--------------------------------------------
        moveFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg)translateZ("+(translateZ-innerSpacing)+"px)" ;
        moveRight.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateZ("+(translateZ-innerSpacing)+"px)" ;
        moveLeft.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg) translateZ("+(translateZ-innerSpacing)+"px)" ;
        moveBack.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg) translateZ("+(translateZ-innerSpacing)+"px)" ;
        moveTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateZ("+(translateZ-innerSpacing)+"px)" ;
        moveBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateZ("+(translateZ-innerSpacing)+"px)" ;
//move pieces--------------------------------------------
        frontCenter.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg) translateZ("+(translateZ+spacing)+"px)" ;
        rightCenter.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateZ("+(translateZ+spacing)+"px)" ;
        backCenter.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg) translateZ("+(translateZ+spacing)+"px)" ;
        leftCenter.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg) translateZ("+(translateZ+spacing)+"px)" ;
        topCenter.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateZ("+(translateZ+spacing)+"px)" ;
        bottomCenter.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateZ("+(translateZ+spacing)+"px)" ;
       
        topFrontFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg) translateX(0px) translateY(-100px) translateZ("+(translateZ+spacing)+"px)" ;
        topFrontTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(0px) translateY(100px) translateZ("+(translateZ+spacing)+"px)" ;
       
        bottomFrontFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg) translateX(0px) translateY(100px) translateZ("+(translateZ+spacing)+"px)" ;
        bottomFrontBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateX(0px) translateY(-100px) translateZ("+(translateZ+spacing)+"px)" ;
       
        leftFrontLeft.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg) translateX(100px) translateY(0px) translateZ("+(translateZ+spacing)+"px)" ;
        leftFrontFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg) translateX(-100px) translateY(0px) translateZ("+(translateZ+spacing)+"px)" ;
       
        frontRightFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg) translateX(100px) translateY(0px) translateZ("+(translateZ+spacing)+"px)" ;
        frontRightRight.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateX(-100px) translateY(0px) translateZ("+(translateZ+spacing)+"px)" ;
       
        rightBackRight.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateX(100px) translateY(0px) translateZ("+(translateZ+spacing)+"px)" ;
        rightBackBack.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg) translateX(-100px) translateY(0px) translateZ("+(translateZ+spacing)+"px)" ;
       
        backLeftBack.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg) translateX(100px) translateY(0px) translateZ("+(translateZ+spacing)+"px)" ;
        backLeftLeft.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg)  translateX(-100px) translateY(0px) translateZ("+(translateZ+spacing)+"px)" ;
       
        topBackTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(0px) translateY(-100px) translateZ("+(translateZ+spacing)+"px)" ;
        topBackBack.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg) translateX(0px) translateY(-100px) translateZ("+(translateZ+spacing)+"px)" ;
       
        bottomBackBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg)  translateX(0px) translateY(100px) translateZ("+(translateZ+spacing)+"px)" ;
        bottomBackBack.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg) translateX(0px) translateY(100px) translateZ("+(translateZ+spacing)+"px)" ; 
       
        topLeftTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(-100px) translateY(0px) translateZ("+(translateZ+spacing)+"px)" ;
        topLeftLeft.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg) translateX(0px) translateY(-100px) translateZ("+(translateZ+spacing)+"px)" ;
       
        bottomLeftBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg)  translateX(-100px) translateY(0px) translateZ("+(translateZ+spacing)+"px)" ;
        bottomLeftLeft.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg) translateX(0px) translateY(100px) translateZ("+(translateZ+spacing)+"px)" ;
       
        topRightTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg)  translateX(100px) translateY(0px) translateZ("+(translateZ+spacing)+"px)" ;
        topRightRight.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateX(0px) translateY(-100px) translateZ("+(translateZ+spacing)+"px)" ;
       
        bottomRightBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateX(100px) translateY(0px) translateZ("+(translateZ+spacing)+"px)" ;
        bottomRightRight.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateX(0px) translateY(100px) translateZ("+(translateZ+spacing)+"px)" ;
      
        topLeftFrontTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(-100px) translateY(100px) translateZ("+(translateZ+spacing)+"px)" ;
        topLeftFrontLeft.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg) translateX(100px) translateY(-100px)  translateZ("+(translateZ+spacing)+"px)" ;
        topLeftFrontFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg) translateX(-100px) translateY(-100px) translateZ("+(translateZ+spacing)+"px)" ;  
       
        topFrontRightTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(100px) translateY(100px)  translateZ("+(translateZ+spacing)+"px)" ;
        topFrontRightFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg)  translateX(100px) translateY(-100px) translateZ("+(translateZ+spacing)+"px)" ;
        topFrontRightRight.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateX(-100px) translateY(-100px)  translateZ("+(translateZ+spacing)+"px)" ;
       
        topRightBackTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(100px) translateY(-100px) translateZ("+(translateZ+spacing)+"px)" ;
        topRightBackRight.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateX(100px) translateY(-100px)  translateZ("+(translateZ+spacing)+"px)" ;
        topRightBackBack.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg) translateX(-100px) translateY(-100px) translateZ("+(translateZ+spacing)+"px)" ;  
       
        topBackLeftTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateX(-100px) translateY(-100px)  translateZ("+(translateZ+spacing)+"px)" ;
        topBackLeftBack.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg)  translateX(100px) translateY(-100px) translateZ("+(translateZ+spacing)+"px)" ;
        topBackLeftLeft.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg) translateX(-100px) translateY(-100px)  translateZ("+(translateZ+spacing)+"px)" ;
       
        bottomLeftFrontBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateX(-100px) translateY(-100px)  translateZ("+(translateZ+spacing)+"px)" ;
        bottomLeftFrontLeft.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg) translateX(100px) translateY(100px) translateZ("+(translateZ+spacing)+"px)" ;
        bottomLeftFrontFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg) translateX(-100px) translateY(100px) translateZ("+(translateZ+spacing)+"px)" ;

        bottomFrontRightBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateX(100px) translateY(-100px) translateZ("+(translateZ+spacing)+"px)" ;
        bottomFrontRightFront.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw)+"deg) translateX(100px) translateY(100px)translateZ("+(translateZ+spacing)+"px)" ;
        bottomFrontRightRight.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateX(-100px) translateY(100px) translateZ("+(translateZ+spacing)+"px)" ;
   
        bottomRightBackBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateX(100px) translateY(100px)  translateZ("+(translateZ+spacing)+"px)" ;
        bottomRightBackRight.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+90)+"deg) translateX(100px) translateY(100px) translateZ("+(translateZ+spacing)+"px)" ;
        bottomRightBackBack.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg) translateX(-100px) translateY(100px) translateZ("+(translateZ+spacing)+"px)" ;

        bottomBackLeftBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg)  translateX(-100px) translateY(100px)  translateZ("+(translateZ+spacing)+"px)" ;
        bottomBackLeftBack.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw+180)+"deg) translateX(100px) translateY(100px) translateZ("+(translateZ+spacing)+"px)" ;
        bottomBackLeftLeft.style.transform = "rotateX( "+pitch+"deg) rotateY("+(yaw-90)+"deg) translateX(-100px) translateY(100px) translateZ("+(translateZ+spacing)+"px)" ;
}
//button event listeners--------------------------------------------
btnRight.addEventListener('click',function(){cubeMovement("right")});
btnLeft.addEventListener('click',function(){cubeMovement("left")});
btnBottom.addEventListener('click',function(){cubeMovement("bottom")});
btnTop.addEventListener('click',function(){cubeMovement("top")});
// btnReset.addEventListener('click',resetPosition); WIP


