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

var piecesArr = [];
piecesArr[0] = 0;

for(i=1; i<=54;i++){
        piecesArr[i] = document.getElementById('nb'+(i));
        console.log(piecesArr[i]);
}

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

        var tilePosition = [0,
                "translateX(-100px) translateY(-100px)",//        ^
                "translateX(0px) translateY(-100px)",   //        |-100y
                "translateX(100px) translateY(-100px)", //        |
                "translateX(-100px) translateY(0px)",   //-100x___|0_____100x>
                "translateX(0px) translateY(0px)",      //        |
                "translateX(100px) translateY(0px)",    //        |-100y            
                "translateX(-100px) translateY(100px)",
                "translateX(0px) translateY(100px)",
                "translateX(100px) translateY(100px)"]; 
                
        var rotateFaceX = "rotateX( "+(pitch)+"deg)";
        var rotateFaceY = "rotateY("+(yaw)+"deg)";
        var rotateFaceZ = "rotateZ(0deg)";
        var piecePopup = "translateZ("+(translateZ+spacing)+"px)";

        var tile=1;
 //move inner sides--------------------------------------------
        moveFront.style.transform = rotateFaceX + "rotateY("+(yaw)+"deg)" + rotateFaceZ + " translateZ("+(translateZ-innerSpacing)+"px)";
        moveRight.style.transform = rotateFaceX + "rotateY("+(yaw+90)+"deg)" +rotateFaceZ + " translateZ("+(translateZ-innerSpacing)+"px)";
        moveLeft.style.transform = rotateFaceX + "rotateY("+(yaw-90)+"deg)" + rotateFaceZ + "  translateZ("+(translateZ-innerSpacing)+"px)" ;
        moveBack.style.transform = rotateFaceX + "rotateY("+(yaw+180)+"deg)" + rotateFaceZ + " translateZ("+(translateZ-innerSpacing)+"px)" ;
        moveTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateZ("+(translateZ-innerSpacing)+"px)" ;
        moveBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateZ("+(translateZ-innerSpacing)+"px)" ;
//move pieces--------------------------------------------
        for(k=1;k<=54;k++){
                
                if (k >= 10) rotateFaceY = "rotateY("+(yaw+90)+"deg)";
                if (k >= 19 && k <=27) rotateFaceY = "rotateY("+(yaw+180)+"deg)";
                if (k >= 28 && k <= 36) rotateFaceY = "rotateY("+(yaw-90)+"deg)";
                if (k >= 37) {rotateFaceX = "rotateX("+(pitch+90)+"deg)"; rotateFaceY = "rotateY(0deg)"; rotateFaceZ = "rotateZ("+(-yaw)+"deg)" };
                if (k >= 46) {rotateFaceX = "rotateX("+(pitch-90)+"deg)"; rotateFaceY = "rotateY(0deg)"; rotateFaceZ = "rotateZ("+(yaw)+"deg)" };
                if (tile>=10) tile=1; 
                piecesArr[k].style.transform = rotateFaceX + rotateFaceY + rotateFaceZ +tilePosition[tile] + piecePopup ;      
                tile++;
                
        }
}
//button event listeners--------------------------------------------
btnRight.addEventListener('click',function(){cubeMovement("right")});
btnLeft.addEventListener('click',function(){cubeMovement("left")});
btnBottom.addEventListener('click',function(){cubeMovement("bottom")});
btnTop.addEventListener('click',function(){cubeMovement("top")});
// btnReset.addEventListener('click',resetPosition); WIP


