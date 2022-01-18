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
let btnSegRig = document.querySelector('.btn_segment-right');
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
    } else {
        // state.yawTop += 90;
        CUBE.renderPieces();
    }
};

const layerRotation = {
    _countToNumber(val, number) {
        if (val > number) {
            return 1;
        }
        if (val < 1) {
            return number;
        } else return val;
    },
    //TODO
    stateSetter(side) {
        // console.log(state.crnr[0].cubeSide);
        //corners

        switch (side) {
            case 1:
                break;
            case 2:
                state.rigLayRot -= 90;

                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                state.topLayRot -= 90;
                //TODO wrap loop over crnDefault and piecPos

                state.crnr.topRotation++;
                for (let i = 0; i < 4; i++) {
                    state.crnr.piecPos[i] =
                        state.crnr.crnDefault[
                            (i + 4 + state.crnr.topRotation) % 4
                        ];

                    //PIECE
                    state.crnr[i].cubeSide[0] = this._countToNumber(
                        state.crnr[i].cubeSide[0] + 1,
                        4
                    );
                    state.crnr[i].cubeSide[1] = this._countToNumber(
                        state.crnr[i].cubeSide[1] + 1,
                        4
                    );
                    console.log(
                        'new',
                        state.crnr.piecPos[i],
                        state.crnr[i].tileNr[0]
                    );
                }
                console.log('-----------');
                console.log(state.crnr.piecPos);
                console.log('-----------');
                // console.log(state.edges[0].cubeSide[1]);
                for (let i = 0; i < 4; i++) {
                    state.edges[i].cubeSide[0] = this._countToNumber(
                        state.edges[i].cubeSide[0] + 1,
                        4
                    );
                }
                break;
            case 6:
                break;

            default:
                break;
        }
        // if (side == 'top') {
        // }
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

    layerRotation.stateSetter(5);
    CUBE.readState();
    CUBE.renderPieces();
});
btnSegRig.addEventListener('click', function () {
    // cubeMovement('topRow');
    //TODO
    layerRotation.stateSetter(2);
    CUBE.readState();
    CUBE.renderPieces();
});

//window.addEventListener('load',getAxis);
// btnReset.addEventListener('click',resetPosition); WIP
//-------------TESTING------------
let testArr = ['-', '-', 'X', '-', '-'];
let testArr2 = [];

let tst = function (val) {
    for (let i = 0; i < testArr.length; i++) {
        testArr2[i] = testArr[(i + testArr.length + val) % testArr.length];
        console.log((i + testArr.length) % testArr.length);
    }
    console.log(testArr2);
};

// tst(1);
