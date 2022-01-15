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
const CUBE = new Pieces(); //TODO Maybe need to make 26 cube objects?
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

const layerRotation = {
    _countToFour(val) {
        if (val > 4) {
            return 1;
        }
        if (val < 1) {
            return 4;
        } else return val;
    },
    //TODO
    stateSetter() {
        //corners
        for (let i = 0; i <= 6; i += 2) {
            state.crnr[crnPieces[i]].cubeSide[0] = this._countToFour(
                state.crnr[crnPieces[i]].cubeSide[0] + 1
            );
            state.crnr[crnPieces[i]].cubeSide[1] = this._countToFour(
                state.crnr[crnPieces[i]].cubeSide[1] + 1
            );
        }
        for (let i = 0; i < 6; i++) {}
    },
};

const stateSetter = function () {
    state.crnr[crnPieces[2]].cubeSide[0] += 1;
    state.crnr[crnPieces[2]].cubeSide[1] += 1;
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
    // cubeMovement('topRow');
    //TODO
    state.topLayRot -= 90;
    layerRotation.stateSetter();
    CUBE.readState();
    CUBE.renderPieces();
});
//window.addEventListener('load',getAxis);
// btnReset.addEventListener('click',resetPosition); WIP
