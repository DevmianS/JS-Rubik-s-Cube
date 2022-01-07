'use strict';
import * as MODEL from './model.js';

const preEs6module = (function () {
    const var1 = 1;
    const var2 = 2;
    const arr1 = [];
    const method1 = function () {
        arr1.push(var1 + var2);
        console.log(arr1);
    };
    return {
        var1,
        method1,
    };
})();
preEs6module.method1();

//Init
(() => {
    document.querySelector('body').innerHTML = `
   <div class = "wrapper"> 
    <div class="scene">
        <div class="cube">
            <div class="side back" id="back"><h2>BACK</h2></div>
            <div class="side left" id="left"><h2>LEFT</h2></div>
            <div class="side front" id="front"><h2>FRONT</h2></div>
            <div class="side right" id="right"><h2>RIGHT</h2></div>
            <div class="side top" id="top"><h2>TOP</h2></div>
            <div class="side bottom" id="bottom"><h2>BOTTOM</h2></div>
                <div class="multi_piece">
                <div class="piece" id="tile_1"><div class="sticker front"><h2>1</h2></div></div>
                <div class="piece" id="tile_2"><div class="sticker front"><h2>2</h2></div></div>
                <div class="piece" id="tile_3"><div class="sticker front"><h2>3</h2></div></div>
                <div class="piece" id="tile_4"><div class="sticker front"><h2>4</h2></div></div>
                <div class="piece" id="tile_5"><div class="sticker front"><h2>5</h2></div></div>
                <div class="piece" id="tile_6"><div class="sticker front"><h2>6</h2></div></div>
                <div class="piece" id="tile_7"><div class="sticker front"><h2>7</h2></div></div>
                <div class="piece" id="tile_8"><div class="sticker front"><h2>8</h2></div></div>
                <div class="piece" id="tile_9"><div class="sticker front"><h2>9</h2></div></div>
                <div class="piece" id="tile_10"><div class="sticker right"><h2>10</h2></div></div>
                <div class="piece" id="tile_11"><div class="sticker right"><h2>11</h2></div></div>
                <div class="piece" id="tile_12"><div class="sticker right"><h2>12</h2></div></div>
                <div class="piece" id="tile_13"><div class="sticker right"><h2>13</h2></div></div>
                <div class="piece" id="tile_14"><div class="sticker right"><h2>14</h2></div></div>
                <div class="piece" id="tile_15"><div class="sticker right"><h2>15</h2></div></div>
                <div class="piece" id="tile_16"><div class="sticker right"><h2>16</h2></div></div>
                <div class="piece" id="tile_17"><div class="sticker right"><h2>17</h2></div></div>
                <div class="piece" id="tile_18"><div class="sticker right"><h2>18</h2></div></div>
                <div class="piece" id="tile_19"><div class="sticker back"><h2>19</h2></div></div>
                <div class="piece" id="tile_20"><div class="sticker back"><h2>20</h2></div></div>
                <div class="piece" id="tile_21"><div class="sticker back"><h2>21</h2></div></div>
                <div class="piece" id="tile_22"><div class="sticker back"><h2>22</h2></div></div>
                <div class="piece" id="tile_23"><div class="sticker back"><h2>23</h2></div></div>
                <div class="piece" id="tile_24"><div class="sticker back"><h2>24</h2></div></div>
                <div class="piece" id="tile_25"><div class="sticker back"><h2>25</h2></div></div>
                <div class="piece" id="tile_26"><div class="sticker back"><h2>26</h2></div></div>
                <div class="piece" id="tile_27"><div class="sticker back"><h2>27</h2></div></div>
                <div class="piece" id="tile_28"><div class="sticker left"><h2>28</h2></div></div>
                <div class="piece" id="tile_29"><div class="sticker left"><h2>29</h2></div></div>
                <div class="piece" id="tile_30"><div class="sticker left"><h2>30</h2></div></div>
                <div class="piece" id="tile_31"><div class="sticker left"><h2>31</h2></div></div>
                <div class="piece" id="tile_32"><div class="sticker left"><h2>32</h2></div></div>
                <div class="piece" id="tile_33"><div class="sticker left"><h2>33</h2></div></div>
                <div class="piece" id="tile_34"><div class="sticker left"><h2>34</h2></div></div>
                <div class="piece" id="tile_35"><div class="sticker left"><h2>35</h2></div></div>
                <div class="piece" id="tile_36"><div class="sticker left"><h2>36</h2></div></div>
                <div class="piece" id="tile_37"><div class="sticker top"><h2>37</h2></div></div>
                <div class="piece" id="tile_38"><div class="sticker top"><h2>38</h2></div></div>
                <div class="piece" id="tile_39"><div class="sticker top"><h2>39</h2></div></div>
                <div class="piece" id="tile_40"><div class="sticker top"><h2>41</h2></div></div>
                <div class="piece" id="tile_41"><div class="sticker top"><h2>41</h2></div></div>
                <div class="piece" id="tile_42"><div class="sticker top"><h2>42</h2></div></div>
                <div class="piece" id="tile_43"><div class="sticker top"><h2>43</h2></div></div>
                <div class="piece" id="tile_44"><div class="sticker top"><h2>44</h2></div></div>
                <div class="piece" id="tile_45"><div class="sticker top"><h2>45</h2></div></div>
                <div class="piece" id="tile_46"><div class="sticker bottom"><h2>46</h2></div></div>
                <div class="piece" id="tile_47"><div class="sticker bottom"><h2>47</h2></div></div>
                <div class="piece" id="tile_48"><div class="sticker bottom"><h2>48</h2></div></div>
                <div class="piece" id="tile_49"><div class="sticker bottom"><h2>49</h2></div></div>
                <div class="piece" id="tile_50"><div class="sticker bottom"><h2>50</h2></div></div>
                <div class="piece" id="tile_51"><div class="sticker bottom"><h2>51</h2></div></div>
                <div class="piece" id="tile_52"><div class="sticker bottom"><h2>52</h2></div></div>
                <div class="piece" id="tile_53"><div class="sticker bottom"><h2>53</h2></div></div>
                <div class="piece" id="tile_54"><div class="sticker bottom"><h2>54</h2></div></div>
                </div>
            <button class="btn_reset">RESET POSITION</button>
            <button class="btn_top">TOP</button>
            <button class="btn_left">LEFT</button>
            <button class="btn_right">RIGHT</button>
            <button class="btn_bottom">BOTTOM</button>
            <button class="btn_left_side_up">Left UP</button>
            <button class="btn_segment-top">top segment</button>
        </div>
    </div>
</div>`;
})();

//sides--------------------------------------------
let moveFront = document.querySelector('.front');
let moveRight = document.querySelector('.right');
let moveLeft = document.querySelector('.left');
let moveBack = document.querySelector('.back');
let moveTop = document.querySelector('.top');
let moveBottom = document.querySelector('.bottom');
let getCube = document.querySelector('#cube');

let sides = document.querySelectorAll('.side');

let tstSide = document.querySelector('.tst');
let tstSide2 = document.querySelector('.tst2');
//buttons--------------------------------------------
let btnRight = document.querySelector('.btn_right');
let btnLeft = document.querySelector('.btn_left');
let bttile_ottom = document.querySelector('.btn_bottom');
let btnTop = document.querySelector('.btn_top');
let btnReset = document.querySelector('.btn_reset');
let btnSegTop = document.querySelector('.btn_segment-top');

//tiles------------------------------
// const tile1 = document.querySelector('#tile_1');

//-------------------------
//TODO
let pitch = -45; //TODO
let yaw = -45;

//CONTROLER-------------------

class Controler {}
//-----------------------------
//VIEW----------------
class RenderSide {
    size = 300;
    vol = this.size / 2;
    pitch = MODEL.state.pitch;
    yaw = MODEL.state.yaw;
    renderSideEl(el, side, tile = 0) {
        // console.log(this.size);
        //variables
        const tilePos = new Map([
            //TODO
            [0, ''],
            [1, `translateX(-${this.size}px) translateY(-${this.size}px)`], //     ^
            [2, `translateX(0px) translateY(-${this.size}px)`], //        |-100y
            [3, `translateX(${this.size}px) translateY(-${this.size}px)`], //      |
            [4, `translateX(-${this.size}px) translateY(0px)`], //-100x___|0_____100x>
            [5, `translateX(0px) translateY(0px)`], //           |
            [6, `translateX(${this.size}px) translateY(0px)`], //         |-100y
            [7, `translateX(-${this.size}px) translateY(${this.size}px)`],
            [8, `translateX(0px) translateY(${this.size}px)`],
            [9, `translateX(${this.size}px) translateY(${this.size}px)`],
        ]);

        const dims = `width: ${this.size}px;
        height: ${this.size}px;`;
        const sdPos = {
            1: `transform: rotateX(${this.pitch}deg) rotateY(${
                this.yaw
            }deg) translateZ(${this.vol}px) ${tilePos.get(tile)}; ${dims};`,
            2: `transform: rotateX(${this.pitch}deg) rotateY(${
                this.yaw + 90
            }deg) translateZ(${this.vol}px) ${tilePos.get(tile)}; ${dims};`,
            3: `transform: rotateX(${this.pitch}deg) rotateY(${
                this.yaw + 180
            }deg) translateZ(${this.vol}px) ${tilePos.get(tile)}; ${dims};`,

            4: `transform: rotateX(${this.pitch}deg) rotateY(${
                this.yaw + 270
            }deg) translateZ(${this.vol}px) ${tilePos.get(tile)}; ${dims};`,
            5: `transform: rotateX(${
                this.pitch + 90
            }deg) rotateY(0deg) rotateZ(${-this.yaw}deg) translateZ(${
                this.vol
            }px) ${tilePos.get(tile)};
            ${dims}`,
            6: `transform: rotateX(${
                this.pitch - 90
            }deg) rotateY(0deg) rotateZ(${this.yaw}deg) translateZ(${
                //TODO this.yaw or this.yaw + 180?
                this.vol
            }px) ${tilePos.get(tile)};
            ${dims}`,
        };
        //Render selected Tile/side
        document.querySelector(`#${el}`).style = sdPos[`${side}`];
        // document.querySelector(`#tile_2`).style = sdPos[`front`];
        // console.log(document.querySelector(`#${el}`));
    }
    renderSides() {
        this.renderSideEl('front', 'front');
        this.renderSideEl('left', 'left');
        this.renderSideEl('right', 'right');
        this.renderSideEl('top', 'top');
        this.renderSideEl('bottom', 'bottom');
        this.renderSideEl('back', 'back');
        // this.renderSideEl('tile_2', 'top'); //TODO
    }
    // drawCube() {
    //     //rendering cube
    //     moveFront.style = sdPos.front;
    //     moveRight.style = sdPos.right;
    //     moveLeft.style = sdPos.left;
    //     moveBack.style = sdPos.back;
    //     moveTop.style = sdPos.top;
    //     moveBottom.style = sdPos.bottom;
    // }
    // cubeMovement(direction) {
    //     if (direction == 'right') {
    //         this.yaw += 90;
    //         this.renderSides();
    //     }
    //     if (direction == 'left') {
    //         this.yaw -= 90;
    //         this.renderSides();
    //     }
    //     if (direction == 'bottom') {
    //         this.pitch -= 90;
    //         this.renderSides();
    //     }
    //     if (direction == 'top') {
    //         this.pitch += 90;
    //         this.renderSides();
    //     }
    // }
}
//-----------------------------
class Cube extends RenderSide {
    //TODO probably don't need this class
    //distance from the center in px
    constructor() {
        super();
        this.renderSides();
    }

    // cubeMovement(direction) {
    //     if (direction == 'right') {
    //         this.yaw += 90;
    //         this.renderSides();
    //     }
    //     if (direction == 'left') {
    //         this.yaw -= 90;
    //         this.renderSides();
    //     }
    //     if (direction == 'bottom') {
    //         this.pitch -= 90;
    //         this.renderSides();
    //     }
    //     if (direction == 'top') {
    //         this.pitch += 90;
    //         this.renderSides();
    //     }
    // }
}

//pieces--------------------------------------------

let piecesArr = [0];
let piecesPosition = [0];
//piecesArr[0] = 0;
// let pBackup = [...piecesArr];
// for (let i = 1; i <= 54; i++) {
//     piecesArr[i] = document.getElementById('tile_' + i);
//     piecesPosition[i] = i;
//     //     console.log(piecesArr[i]);
// }

class Pieces extends RenderSide {
    //TODO
    temp = this.size;
    // vol = this.temp - this.temp / 3;
    size = this.temp / 3;
    tst = 0;
    constructor() {
        super();
        this.renderPieces();
        // this.size / 3; //TODO
    }
    renderPieces() {
        //TODO `front` needs to read current position from the model
        //TODO try to render tiles as pieces! 26 instead of 54!
        //front top left corner
        this.renderSideEl(
            `tile_${MODEL.state.crnr.flt.tileNr[0]}`,
            MODEL.state.crnr.flt.cubeSide[0],
            MODEL.state.crnr.flt.tilePos[0]
        );
        this.renderSideEl(
            `tile_${MODEL.state.crnr.flt.tileNr[1]}`,
            MODEL.state.crnr.flt.cubeSide[1],
            MODEL.state.crnr.flt.tilePos[1]
        );
        this.renderSideEl(
            `tile_${MODEL.state.crnr.flt.tileNr[2]}`,
            MODEL.state.crnr.flt.cubeSide[2],
            MODEL.state.crnr.flt.tilePos[2]
        );
        //front bottom left corner
        this.renderSideEl(
            `tile_${MODEL.state.crnr.flb.tileNr[0]}`,
            MODEL.state.crnr.flb.cubeSide[0],
            MODEL.state.crnr.flb.tilePos[0]
        );
        this.renderSideEl(
            `tile_${MODEL.state.crnr.flb.tileNr[1]}`,
            MODEL.state.crnr.flb.cubeSide[1],
            MODEL.state.crnr.flb.tilePos[1]
        );
        this.renderSideEl(
            `tile_${MODEL.state.crnr.flb.tileNr[2]}`,
            MODEL.state.crnr.flb.cubeSide[2],
            MODEL.state.crnr.flb.tilePos[2]
        );
        //TODO rest of the corners like this^
        //front top right corner
        this.renderSideEl(`tile_${3}`, 1, 3);
        this.renderSideEl(`tile_${10}`, 2, 1);
        this.renderSideEl(`tile_${45}`, 5, 9);
        //front bottom right corner
        this.renderSideEl(`tile_${9}`, 1, 9);
        this.renderSideEl(`tile_${16}`, 2, 7);
        this.renderSideEl(`tile_${49}`, 6, 3);

        //right top back corner
        this.renderSideEl(`tile_${13}`, 2, 3);
        this.renderSideEl(`tile_${19}`, 3, 1);
        this.renderSideEl(`tile_${40}`, 5, 3);
        //right bottom back corner
        this.renderSideEl(`tile_${18}`, 2, 9);
        this.renderSideEl(`tile_${25}`, 3, 7);
        this.renderSideEl(`tile_${54}`, 6, 9);

        //back top left corner
        this.renderSideEl(`tile_${28}`, 4, 1);
        this.renderSideEl(`tile_${22}`, 3, 3);
        this.renderSideEl(`tile_${37}`, 5, 1);
        //back bottom left corner
        this.renderSideEl(`tile_${35}`, 4, 7);
        this.renderSideEl(`tile_${27}`, 3, 9);
        this.renderSideEl(`tile_${52}`, 6, 7);

        //front 1-9
        //right 10-18
        //back 19-27
        //left 28-36
        //top 37-45
        //bottom 46-54

        // for (let i = 1; i <= 54; i++) {
        //     if (i <= 9) this.renderSideEl(`tile_${i}`, `front`, i);
        //     if (i > 9 && i <= 18)
        //         this.renderSideEl(`tile_${i}`, 'right', i - 9);
        //     if (i > 18 && i <= 27)
        //         this.renderSideEl(`tile_${i}`, 'back', i - 18);
        //     if (i > 27 && i <= 36) this.renderSideEl(`tile_${i}`, 'left', i);
        //     if (i > 36 && i <= 45) this.renderSideEl(`tile_${i}`, 'top', i);
        //     if (i > 45 && i <= 54) this.renderSideEl(`tile_${i}`, 'bottom', i);
        // }
    }
    cubeMovement(direction) {
        if (direction == 'right') {
            this.yaw += 90;
            this.renderPieces();
        }
        if (direction == 'left') {
            this.yaw -= 90;
            this.renderPieces();
        }
        if (direction == 'bottom') {
            this.pitch -= 90;
            this.renderPieces();
        }
        if (direction == 'top') {
            this.pitch += 90;
            this.renderPieces();
        }
    }
}

// const d3cube = new Cube();
const piece = new Pieces();
// piece.renderSideEl('tile_1', 'top');
//variables----------------------------------------

let translateZ = 150;
let direction = '';
let spacing = 0;
let innerSpacing = 0;
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
let whichSide = 0;

// let rotateFaceX = 'rotateX( ' + pitch + 'deg)';

let rotateFaceX = `rotateX( ${pitch}deg)`;
let rotateFaceY = `rotateY( ${yaw}deg)`;
let rotateFaceXTop = `rotateX(${pitch + 90}deg)`;
let rotateFaceXBottom = `rotateX(${pitch - 90}deg)`;
let rotateFaceYRight = `rotateY(${yaw + 90}deg)`;
let rotateFaceYBack = `rotateY(${yaw + 180}deg)`;
let rotateFaceYLeft = `rotateY(${yaw + 270}deg)`;
let rotateFaceZTop = `rotateZ(${-yaw}deg)`;
let rotateFaceZBottom = `rotateZ(${+yaw}deg)`;

let rotateFaceZ = 'rotateZ(0deg)';
let pPopup = 'translateZ(' + (translateZ + spacing) + 'px)';

let sideAngles = [
    0,
    document.documentElement.style.setProperty(
        '--front',
        rotateFaceX + rotateFaceY
    ),
    document.documentElement.style.setProperty(
        '--right',
        rotateFaceX + rotateFaceYRight
    ), //WIP
    document.documentElement.style.setProperty(
        '--back',
        rotateFaceX + rotateFaceYBack
    ),
    document.documentElement.style.setProperty(
        '--left',
        rotateFaceX + rotateFaceYLeft
    ),
    document.documentElement.style.setProperty(
        '--top',
        rotateFaceXTop + 'rotateY(0deg)' + rotateFaceZTop
    ),
    document.documentElement.style.setProperty(
        '--bottom',
        rotateFaceXBottom + 'rotateY(0deg)' + rotateFaceZBottom
    ),
];

//getComputedStyle(document.documentElement).getPropertyValue('--top')
//going to be removed:
function cubeMovement(direction) {
    if (direction == 'right') {
        yaw += 90;
        turnCube(direction);
    } else if (direction == 'left') {
        yaw -= 90;
        turnCube(direction);
    } else if (direction == 'bottom') {
        // alert("move bottom "+rotateFaceX);
        pitch -= 90;
        // alert("move bottom "+rotateFaceX);
        turnCube(direction);
    } else if (direction == 'top') {
        pitch += 90;
        turnCube(direction);
    } else if (direction == 'movetops') {
        turnCube(direction);
    } else
        alert(
            "Wrong direction name! Only 'right, left, bottom, top' are allowed!"
        );
}

function resetPosition() {
    yaw = 0;
    pitch = 0;
    //WIP
}

// function getPosition(side) {}
function variables() {
    rotateFaceZ = 'rotateZ(0deg)';
    rotateFaceX = 'rotateX( ' + pitch + 'deg)';
    rotateFaceXTop = 'rotateX( ' + (pitch + 90) + 'deg)';
    rotateFaceXBottom = 'rotateX( ' + (pitch - 90) + 'deg)';
    rotateFaceY = 'rotateY(' + yaw + 'deg)';
    rotateFaceY0 = 'rotateY(0deg)';
    rotateFaceXTop = 'rotateX( ' + (pitch + 90) + 'deg)';
    rotateFaceXBottom = 'rotateX( ' + (pitch - 90) + 'deg)';
    rotateFaceYRight = 'rotateY(' + (yaw + 90) + 'deg)';
    rotateFaceYBack = 'rotateY(' + (yaw + 180) + 'deg)';
    rotateFaceYLeft = 'rotateY(' + (yaw + 270) + 'deg)';
    rotateFaceZTop = 'rotateZ(' + -yaw + 'deg)';
    rotateFaceZBottom = 'rotateZ(' + +yaw + 'deg)';
}
//going to be removed:
function turnCube(direction) {
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
    let tile = 1;

    //move inner sides--------------------------------------------
    // moveFront.style.transform = rotateFaceX + "rotateY("+(yaw)+"deg)" + rotateFaceZ + " translateZ("+(translateZ-innerSpacing)+"px)";
    // moveRight.style.transform = rotateFaceX + "rotateY("+(yaw+90)+"deg)" +rotateFaceZ + " translateZ("+(translateZ-innerSpacing)+"px)";
    // moveLeft.style.transform = rotateFaceX + "rotateY("+(yaw-90)+"deg)" + rotateFaceZ + "  translateZ("+(translateZ-innerSpacing)+"px)" ;
    // moveBack.style.transform = rotateFaceX + "rotateY("+(yaw+180)+"deg)" + rotateFaceZ + " translateZ("+(translateZ-innerSpacing)+"px)" ;
    // moveTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateZ("+(translateZ-innerSpacing)+"px)" ;
    // moveBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateZ("+(translateZ-innerSpacing)+"px)" ;

    //move pieces--------------------------------------------

    if (direction == 'movetops') {
        piecesArr[1].style.transform =
            rotateFaceX +
            rotateFaceYRight +
            rotateFaceZ +
            tilePosition[1] +
            pPopup;
        piecesArr[2].style.transform =
            rotateFaceX +
            rotateFaceYRight +
            rotateFaceZ +
            tilePosition[2] +
            pPopup;
        piecesArr[3].style.transform =
            rotateFaceX +
            rotateFaceYRight +
            rotateFaceZ +
            tilePosition[3] +
            pPopup;
        piecesArr[28].style.transform =
            rotateFaceX + rotateFaceY + rotateFaceZ + tilePosition[1] + pPopup;
        piecesArr[29].style.transform =
            rotateFaceX + rotateFaceY + rotateFaceZ + tilePosition[2] + pPopup;
        piecesArr[30].style.transform =
            rotateFaceX + rotateFaceY + rotateFaceZ + tilePosition[3] + pPopup;
        piecesArr[10].style.transform =
            rotateFaceX +
            rotateFaceYBack +
            rotateFaceZ +
            tilePosition[1] +
            pPopup;
        piecesArr[11].style.transform =
            rotateFaceX +
            rotateFaceYBack +
            rotateFaceZ +
            tilePosition[2] +
            pPopup;
        piecesArr[12].style.transform =
            rotateFaceX +
            rotateFaceYBack +
            rotateFaceZ +
            tilePosition[3] +
            pPopup;
        piecesArr[19].style.transform =
            rotateFaceX +
            rotateFaceYLeft +
            rotateFaceZ +
            tilePosition[1] +
            pPopup;
        piecesArr[20].style.transform =
            rotateFaceX +
            rotateFaceYLeft +
            rotateFaceZ +
            tilePosition[2] +
            pPopup;
        piecesArr[21].style.transform =
            rotateFaceX +
            rotateFaceYLeft +
            rotateFaceZ +
            tilePosition[3] +
            pPopup;
    }

    if (
        direction == 'right' ||
        direction == 'left' ||
        direction == 'bottom' ||
        direction == 'top'
    ) {
        for (k = 1; k <= 54; k++) {
            //54
            //bad ifs?tile = 1;
            //if (k < 10) rotateFaceY = "rotateY("+(yaw+whichSide)+"deg)";

            if (tile >= 10) tile = 1;
            piecesArr[k].style.transform =
                rotateFaceX +
                rotateFaceY +
                rotateFaceZ +
                tilePosition[tile] +
                pPopup;
            //if (k < 10 && k>2) rotateFaceY = "rotateY("+(yaw)+"deg)";
            if (k >= 10) {
                piecesArr[k].style.transform =
                    rotateFaceX +
                    rotateFaceYRight +
                    rotateFaceZ +
                    tilePosition[tile] +
                    pPopup;
            }
            if (k >= 19 && k <= 27) {
                piecesArr[k].style.transform =
                    rotateFaceX +
                    rotateFaceYBack +
                    rotateFaceZ +
                    tilePosition[tile] +
                    pPopup;
            }
            if (k >= 28 && k <= 36) {
                piecesArr[k].style.transform =
                    rotateFaceX +
                    rotateFaceYLeft +
                    rotateFaceZ +
                    tilePosition[tile] +
                    pPopup;
            }
            if (k >= 37) {
                piecesArr[k].style.transform =
                    rotateFaceXTop +
                    rotateFaceY0 +
                    rotateFaceZTop +
                    tilePosition[tile] +
                    pPopup;
            }
            if (k >= 46) {
                piecesArr[k].style.transform =
                    rotateFaceXBottom +
                    rotateFaceY0 +
                    rotateFaceZBottom +
                    tilePosition[tile] +
                    pPopup;
            }

            // tile++;
        }
    }
}

//button event listeners--------------------------------------------
btnRight.addEventListener('click', function () {
    // cubeMovement('right');
    piece.cubeMovement('right');
});
btnLeft.addEventListener('click', function () {
    // cubeMovement('left');
    piece.cubeMovement('left');
});
bttile_ottom.addEventListener('click', function () {
    // cubeMovement('bottom');
    piece.cubeMovement('bottom');
});
btnTop.addEventListener('click', function () {
    // cubeMovement('top');
    piece.cubeMovement('top');
});
btnSegTop.addEventListener('click', function () {
    // cubeMovement('movetops');
});
//window.addEventListener('load',getAxis);
// btnReset.addEventListener('click',resetPosition); WIP
