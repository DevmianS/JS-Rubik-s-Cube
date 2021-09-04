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
var btnSegTop = document.querySelector('.btn_segment-top');

//alert(sideAngles[1])
//var FRONTA = document.documentElement.style.setProperty('--front', 'rotateX(0deg) rotateY('+yaw+'deg) translateX(-100px) translateY(-100px)');
// var frontAngle = getComputedStyle(document.documentElement).getPropertyValue('--front');
// var rightAngle = getComputedStyle(document.documentElement).getPropertyValue('--right');
// var backAngle = getComputedStyle(document.documentElement).getPropertyValue('--back');
// var leftAngle = getComputedStyle(document.documentElement).getPropertyValue('--left');
// var topAngle = getComputedStyle(document.documentElement).getPropertyValue('--top');
// var bottomAngle = getComputedStyle(document.documentElement).getPropertyValue('--bottom');
//pieces--------------------------------------------

var piecesArr = [0,];
var piecesPosition = [0,];
//piecesArr[0] = 0;
// var pBackup = [...piecesArr];
for(i=1; i<=54;i++){
        piecesArr[i] = document.getElementById('nb'+(i));
        piecesPosition[i] = i;
        console.log(piecesArr[i]);
}

//variables----------------------------------------

var pitch = -45;
var yaw = -45;

var translateZ = 150;
var direction = "";
var spacing = 0;
var innerSpacing = 0;
//css sides variables-------------------------------
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
var whichSide = 0;        


var rotateFaceX = "rotateX( "+(pitch)+"deg)";
var rotateFaceY = "rotateY("+(yaw)+"deg)";
var rotateFaceXTop = "rotateX( "+(pitch+90)+"deg)";
var rotateFaceXBottom = "rotateX( "+(pitch-90)+"deg)";
var rotateFaceYRight = "rotateY("+(yaw+90)+"deg)";
var rotateFaceYBack = "rotateY("+(yaw+180)+"deg)";
var rotateFaceYLeft = "rotateY("+(yaw+270)+"deg)";
var rotateFaceZTop = "rotateZ("+(-yaw)+"deg)";
var rotateFaceZBottom = "rotateZ("+(+yaw)+"deg)";

//var rotateFaceFront = rotateFaceX + rotateFaceY;
//alert("assigned "+rotateFaceX);
//var rotateFaceX90 = "rotateX( "+(pitch+90)+"deg)";

//var rotateFaceY90 = "rotateY("+(yaw+90)+"deg)";
var rotateFaceZ = "rotateZ(0deg)";
var pPopup = "translateZ("+(translateZ+spacing)+"px)";

var sideAngles = [0,document.documentElement.style.setProperty('--front',rotateFaceX + rotateFaceY),
document.documentElement.style.setProperty('--right',rotateFaceX + rotateFaceYRight),//WIP
document.documentElement.style.setProperty('--back',rotateFaceX + rotateFaceYBack),
document.documentElement.style.setProperty('--left',rotateFaceX + rotateFaceYLeft),
document.documentElement.style.setProperty('--top',rotateFaceXTop + "rotateY(0deg)" + rotateFaceZTop),
document.documentElement.style.setProperty('--bottom',rotateFaceXBottom + "rotateY(0deg)" + rotateFaceZBottom)]

//getComputedStyle(document.documentElement).getPropertyValue('--top')


function cubeMovement(direction){
 
        if(direction=="right"){
                yaw+=90;     
                turnCube(direction);
        }
        else if(direction=="left"){
                yaw-=90;     
                turnCube(direction);
        }
        else if(direction=="bottom"){
               // alert("move bottom "+rotateFaceX);
                pitch-=90;     
               // alert("move bottom "+rotateFaceX);
                turnCube(direction);
        }
        else if(direction=="top"){
                pitch+=90;     
                turnCube(direction);
        }
        else if(direction=="movetops"){ 
                turnCube(direction);
        }
        else alert("Wrong direction name! Only 'right, left, bottom, top' are allowed!");

}

function resetPosition(){
        yaw=0;
        pich=0;
        //WIP
}


function getPosition(side){
        
}
function variables(){
        rotateFaceZ = "rotateZ(0deg)";
        rotateFaceX = "rotateX( "+(pitch)+"deg)";
        rotateFaceXTop = "rotateX( "+(pitch+90)+"deg)";
        rotateFaceXmBottom = "rotateX( "+(pitch-90)+"deg)";
        rotateFaceY = "rotateY("+(yaw)+"deg)";
        rotateFaceY0 = "rotateY(0deg)";
        rotateFaceXTop = "rotateX( "+(pitch+90)+"deg)";
        rotateFaceXBottom = "rotateX( "+(pitch-90)+"deg)";
        rotateFaceYRight = "rotateY("+(yaw+90)+"deg)";
        rotateFaceYBack = "rotateY("+(yaw+180)+"deg)";
        rotateFaceYLeft = "rotateY("+(yaw+270)+"deg)";
        rotateFaceZTop = "rotateZ("+(-yaw)+"deg)";
        rotateFaceZBottom = "rotateZ("+(+yaw)+"deg)";

}
function turnCube(direction){

        // tilePosition = [0,
        //         "translateX(-100px) translateY(-100px)",//        ^
        //         "translateX(0px) translateY(-100px)",   //        |-100y
        //         "translateX(100px) translateY(-100px)", //        |
        //         "translateX(-100px) translateY(0px)",   //-100x___|0_____100x>
        //         "translateX(0px) translateY(0px)",      //        |
        //         "translateX(100px) translateY(0px)",    //        |-100y            
        //         "translateX(-100px) translateY(100px)",
        //         "translateX(0px) translateY(100px)",
        //         "translateX(100px) translateY(100px)"]; 
 
        // rotateFaceX = "rotateX( "+(pitch)+"deg)";
        // rotateFaceX = "rotateX( "+(pitch)+"deg)";
        //rotateFaceY = "rotateY("+(yaw)+"deg)";
       
       variables();
        var tile=1;

        
 //move inner sides--------------------------------------------
        // moveFront.style.transform = rotateFaceX + "rotateY("+(yaw)+"deg)" + rotateFaceZ + " translateZ("+(translateZ-innerSpacing)+"px)";
        // moveRight.style.transform = rotateFaceX + "rotateY("+(yaw+90)+"deg)" +rotateFaceZ + " translateZ("+(translateZ-innerSpacing)+"px)";
        // moveLeft.style.transform = rotateFaceX + "rotateY("+(yaw-90)+"deg)" + rotateFaceZ + "  translateZ("+(translateZ-innerSpacing)+"px)" ;
        // moveBack.style.transform = rotateFaceX + "rotateY("+(yaw+180)+"deg)" + rotateFaceZ + " translateZ("+(translateZ-innerSpacing)+"px)" ;
        // moveTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateZ("+(translateZ-innerSpacing)+"px)" ;
        // moveBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateZ("+(translateZ-innerSpacing)+"px)" ;



//move pieces--------------------------------------------

        if (direction=="movetops"){
                // whichSide=yaw;
                // whichSide+=90;
                // piecesArr[1].style.transform = rotateFaceX + "rotateY("+(yaw+90)+"deg)" + rotateFaceZ +tilePosition[tile] + pPopup ;   
                // //alert(getComputedStyle(document.documentElement).getPropertyValue(piecesArr[1]));
                //  //alert(whichSide);
                piecesArr[1].style.transform = rotateFaceX + rotateFaceYRight + rotateFaceZ + tilePosition[1] + pPopup ; 
                piecesArr[2].style.transform = rotateFaceX + rotateFaceYRight + rotateFaceZ + tilePosition[2] + pPopup ; 
                piecesArr[3].style.transform = rotateFaceX + rotateFaceYRight + rotateFaceZ + tilePosition[3] + pPopup ; 
                piecesArr[28].style.transform = rotateFaceX + rotateFaceY + rotateFaceZ + tilePosition[1] + pPopup ; 
                piecesArr[29].style.transform = rotateFaceX + rotateFaceY + rotateFaceZ + tilePosition[2] + pPopup ; 
                piecesArr[30].style.transform = rotateFaceX + rotateFaceY + rotateFaceZ + tilePosition[3] + pPopup ; 
                piecesArr[10].style.transform = rotateFaceX + rotateFaceYBack + rotateFaceZ + tilePosition[1] + pPopup ; 
                piecesArr[11].style.transform = rotateFaceX + rotateFaceYBack + rotateFaceZ + tilePosition[2] + pPopup ; 
                piecesArr[12].style.transform = rotateFaceX + rotateFaceYBack + rotateFaceZ + tilePosition[3] + pPopup ; 
                piecesArr[19].style.transform = rotateFaceX + rotateFaceYLeft + rotateFaceZ + tilePosition[1] + pPopup ; 
                piecesArr[20].style.transform = rotateFaceX + rotateFaceYLeft + rotateFaceZ + tilePosition[2] + pPopup ; 
                piecesArr[21].style.transform = rotateFaceX + rotateFaceYLeft + rotateFaceZ + tilePosition[3] + pPopup ; 
        }

        if (direction=="right" || direction=="left" || direction=="bottom" || direction=="top"){
                
                for(k=1;k<=54;k++){//54
                        //bad ifs?
                        //if (k < 10) rotateFaceY = "rotateY("+(yaw+whichSide)+"deg)";
                        if (tile>=10) tile=1; 
                        piecesArr[k].style.transform = rotateFaceX + rotateFaceY + rotateFaceZ +tilePosition[tile] + pPopup ; 
                        //if (k < 10 && k>2) rotateFaceY = "rotateY("+(yaw)+"deg)";
                        if (k >= 10) {piecesArr[k].style.transform = rotateFaceX + rotateFaceYRight + rotateFaceZ +tilePosition[tile] + pPopup  };
                        if (k >= 19 && k <=27) {piecesArr[k].style.transform = rotateFaceX + rotateFaceYBack + rotateFaceZ +tilePosition[tile] + pPopup  };
                        if (k >= 28 && k <= 36) {piecesArr[k].style.transform = rotateFaceX + rotateFaceYLeft + rotateFaceZ +tilePosition[tile] + pPopup  };
                        if (k >= 37) {piecesArr[k].style.transform = rotateFaceXTop + rotateFaceY0 + rotateFaceZTop +tilePosition[tile] + pPopup};
                        if (k >= 46) {piecesArr[k].style.transform = rotateFaceXBottom + rotateFaceY0 + rotateFaceZBottom +tilePosition[tile] + pPopup};
                        
                       // piecesArr[k].style.transform = rotateFaceX + rotateFaceY + rotateFaceZ +tilePosition[tile] + pPopup ; 
                       tile++; 
                       // alert(whichSide);
                }

                
                // for(k=1;k<=54;k++){//54
                //         //bad ifs?
                //         if (k >= 10) rotateFaceY = "rotateY("+(yaw+90)+"deg)";
                //         if (k >= 19 && k <=27) rotateFaceY = "rotateY("+(yaw+180)+"deg)";
                //         if (k >= 28 && k <= 36) rotateFaceY = "rotateY("+(yaw-90)+"deg)";
                //         if (k >= 37) {rotateFaceX = "rotateX("+(pitch+90)+"deg)"; rotateFaceY = "rotateY(0deg)"; rotateFaceZ = "rotateZ("+(-yaw)+"deg)" };
                //         if (k >= 46) {rotateFaceX = "rotateX("+(pitch-90)+"deg)"; rotateFaceY = "rotateY(0deg)"; rotateFaceZ = "rotateZ("+(yaw)+"deg)" };
                //         if (tile>=10) tile=1; 
                //         piecesArr[k].style.transform = rotateFaceX + rotateFaceY + rotateFaceZ +tilePosition[tile] + pPopup ; 
                //         tile++; 
                // }

                //alert(rotateFaceY+" "+yaw);
        }

 
        

        // piecesArr[2].style.transform = piecesArr[11].style.transform;
        // piecesArr[3].style.transform = piecesArr[12].style.transform;
        // piecesArr[10].style.transform = piecesArr[19].style.transform;
        // piecesArr[11].style.transform = piecesArr[20].style.transform;
        // piecesArr[12].style.transform = piecesArr[21].style.transform;
        // piecesArr[19].style.transform = piecesArr[28].style.transform;
        // piecesArr[20].style.transform = piecesArr[29].style.transform;
        // piecesArr[21].style.transform = piecesArr[30].style.transform;
        // piecesArr[28].style.transform = piecesArr[1].style.transform;
        // piecesArr[29].style.transform = piecesArr[2].style.transform;
        // piecesArr[30].style.transform = piecesArr[3].style.transform;

        
}
// function moveSegment(){
//         piecesArr[1].style.transform = rotateFaceX + "rotateY("+(yaw+90)+"deg)" + rotateFaceZ +tilePosition[1] + pPopup ;   
// }


//button event listeners--------------------------------------------
btnRight.addEventListener('click',function(){cubeMovement("right")});
btnLeft.addEventListener('click',function(){cubeMovement("left")});
btnBottom.addEventListener('click',function(){cubeMovement("bottom")});
btnTop.addEventListener('click',function(){cubeMovement("top")});
btnSegTop.addEventListener('click',function(){cubeMovement("movetops")});
//window.addEventListener('load',getAxis);
// btnReset.addEventListener('click',resetPosition); WIP


