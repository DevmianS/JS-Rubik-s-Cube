'use strict';
import * as MODEL from './Model.js';
// import * as VIEW from './View.js';
import { state } from './Model.js';
import { RenderSide, Pieces } from './View.js';
/*            <div class="side back" id="back"><h2>BACK</h2></div>
            <div class="side left" id="left"><h2>LEFT</h2></div>
            <div class="side front" id="front"><h2>FRONT</h2></div>
            <div class="side right" id="right"><h2>RIGHT</h2></div>
            <div class="side top" id="top"><h2>TOP</h2></div>
            <div class="side bottom" id="bottom"><h2>BOTTOM</h2></div>
            */

//buttons--------------------------------------------
let btnRight = document.querySelector('.btn_right');
let btnLeft = document.querySelector('.btn_left');
let bttile_bottom = document.querySelector('.btn_bottom'); //TODO typo
let btnTop = document.querySelector('.btn_top');
let btnReset = document.querySelector('.btn_reset');
let btnSegTop = document.querySelector('.btn_segment-top');
const CUBE = new Pieces(); //TODO Cube object
CUBE.renderPieces(); //cube init render

const cubeMovement = function (direction) {
    if (direction == 'right') {
        state.yaw += 90;
        CUBE.renderPieces();
    }
    if (direction == 'left') {
        state.yaw -= 90;
        CUBE.renderPieces();
    }
    if (direction == 'bottom') {
        state.pitch -= 90;
        CUBE.renderPieces();
    }
    if (direction == 'top') {
        state.pitch += 90;
        CUBE.renderPieces();
    }
    if (direction == 'topRow') {
        state.yawTop += 90;
        CUBE.renderPieces();
    }
};

//css sides variables-------------------------------
let tilePosition = [
    0,
    'translateX(-100px) translateY(-100px)', //     ^
    'translateX(0px) translateY(-100px)', //        |-100y
    'translateX(100px) translateY(-100px)', //      |
    'translateX(-100px) translateY(0px)', //-100x___|0_____100x>
    'translateX(0px) translateY(0px)', //           |
    'translateX(100px) translateY(0px)', //         |-100y
    'translateX(-100px) translateY(100px)',
    'translateX(0px) translateY(100px)',
    'translateX(100px) translateY(100px)',
];

//button event listeners--------------------------------------------
btnRight.addEventListener('click', function () {
    // cubeMovement('right');
    cubeMovement('right');
});
btnLeft.addEventListener('click', function () {
    // cubeMovement('left');
    cubeMovement('left');
});
bttile_bottom.addEventListener('click', function () {
    // cubeMovement('bottom');
    cubeMovement('bottom');
});
btnTop.addEventListener('click', function () {
    // cubeMovement('top');
    cubeMovement('top');
});
btnSegTop.addEventListener('click', function () {
    cubeMovement('topRow');
});
//window.addEventListener('load',getAxis);
// btnReset.addEventListener('click',resetPosition); WIP
