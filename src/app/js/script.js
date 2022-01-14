'use strict';
import * as MODEL from './model.js';
// import * as VIEW from './View.js';
import { RenderSide, Pieces } from './View.js';

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
let pitch = 0; //TODO
let yaw = -45;

// class RenderSide {
//     size = 300;
//     vol = this.size / 2;
//     pitch = MODEL.state.pitch;
//     yaw = MODEL.state.yaw;
//     renderSideEl(el, side, tile = 0) {
//         //variables
//         const tilePos = new Map([
//             //TODO
//             [0, ''],
//             [1, `translateX(-${this.size}px) translateY(-${this.size}px)`], //     ^
//             [2, `translateX(0px) translateY(-${this.size}px)`], //        |-100y
//             [3, `translateX(${this.size}px) translateY(-${this.size}px)`], //      |
//             [4, `translateX(-${this.size}px) translateY(0px)`], //-100x___|0_____100x>
//             [5, `translateX(0px) translateY(0px)`], //           |
//             [6, `translateX(${this.size}px) translateY(0px)`], //         |-100y
//             [7, `translateX(-${this.size}px) translateY(${this.size}px)`],
//             [8, `translateX(0px) translateY(${this.size}px)`],
//             [9, `translateX(${this.size}px) translateY(${this.size}px)`],
//         ]);

//         const dims = `width: ${this.size}px;
//         height: ${this.size}px;`;
//         const sdPos = {
//             1: `transform: rotateX(${this.pitch}deg) rotateY(${
//                 this.yaw
//             }deg) translateZ(${this.vol}px) ${tilePos.get(tile)}; ${dims};`,
//             2: `transform: rotateX(${this.pitch}deg) rotateY(${
//                 this.yaw + 90
//             }deg) translateZ(${this.vol}px) ${tilePos.get(tile)}; ${dims};`,
//             3: `transform: rotateX(${this.pitch}deg) rotateY(${
//                 this.yaw + 180
//             }deg) translateZ(${this.vol}px) ${tilePos.get(tile)}; ${dims};`,

//             4: `transform: rotateX(${this.pitch}deg) rotateY(${
//                 this.yaw + 270
//             }deg) translateZ(${this.vol}px) ${tilePos.get(tile)}; ${dims};`,
//             5: `transform: rotateX(${
//                 this.pitch + 90
//             }deg) rotateY(0deg) rotateZ(${-this.yaw}deg) translateZ(${
//                 this.vol
//             }px) ${tilePos.get(tile)};
//             ${dims}`,
//             6: `transform: rotateX(${
//                 this.pitch - 90
//             }deg) rotateY(0deg) rotateZ(${this.yaw}deg) translateZ(${
//                 //TODO this.yaw or this.yaw + 180?
//                 this.vol
//             }px) ${tilePos.get(tile)};
//             ${dims}`,
//         };
//         //Render selected Tile/side
//         document.querySelector(`#${el}`).style = sdPos[`${side}`];
//     }
//     renderSides() {
//         this.renderSideEl('front', 'front');
//         this.renderSideEl('left', 'left');
//         this.renderSideEl('right', 'right');
//         this.renderSideEl('top', 'top');
//         this.renderSideEl('bottom', 'bottom');
//         this.renderSideEl('back', 'back');
//         // this.renderSideEl('tile_2', 'top'); //TODO
//     }
// }
//-----------------------------

// class Pieces extends RenderSide {
//     //TODO
//     temp = this.size;
//     // vol = this.temp - this.temp / 3;
//     size = this.temp / 3;
//     tst = 0;
//     constructor() {
//         super();
//         this.renderPieces();
//         // this.size / 3; //TODO
//     }
//     renderPieces() {
//         //Rendering corners
//         for (let i = 0; i < 8; i++) {
//             for (let j = 0; j < 3; j++) {
//                 this.renderSideEl(
//                     `tile_${MODEL.state.crnr[MODEL.crnPieces[i]].tileNr[j]}`,
//                     MODEL.state.crnr[MODEL.crnPieces[i]].cubeSide[j],
//                     MODEL.state.crnr[MODEL.crnPieces[i]].tilePos[j]
//                 );
//             }
//         }

//         //Rendering middle pieces
//         for (let i = 0; i < 6; i++) {
//             this.renderSideEl(
//                 `tile_${MODEL.state.cntr.tileNr[i]}`,
//                 MODEL.state.cntr.cubeSide[i],
//                 MODEL.state.cntr.tilePos[i]
//             );
//         }

//         //Rendering edge pieces
//         for (let i = 0; i < 12; i++) {
//             for (let j = 0; j < 2; j++) {
//                 this.renderSideEl(
//                     `tile_${MODEL.state.edgs[MODEL.edgePieces[i]].tileNr[j]}`,
//                     MODEL.state.edgs[MODEL.edgePieces[i]].cubeSide[j],
//                     MODEL.state.edgs[MODEL.edgePieces[i]].tilePos[j]
//                 );
//             }
//         }

//         //front 1-9
//         //right 10-18
//         //back 19-27
//         //left 28-36
//         //top 37-45
//         //bottom 46-54
//     }
//     cubeMovement(direction) {
//         if (direction == 'right') {
//             this.yaw += 90;
//             this.renderPieces();
//         }
//         if (direction == 'left') {
//             this.yaw -= 90;
//             this.renderPieces();
//         }
//         if (direction == 'bottom') {
//             this.pitch -= 90;
//             this.renderPieces();
//         }
//         if (direction == 'top') {
//             this.pitch += 90;
//             this.renderPieces();
//         }
//     }
// }

const CUBE = new Pieces();
// piece.renderSideEl('tile_1', 'top');
//variables----------------------------------------

// let translateZ = 150;
// let direction = '';
// let spacing = 0;
// let innerSpacing = 0;
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
    CUBE.cubeMovement('right');
});
btnLeft.addEventListener('click', function () {
    // cubeMovement('left');
    CUBE.cubeMovement('left');
});
bttile_ottom.addEventListener('click', function () {
    // cubeMovement('bottom');
    CUBE.cubeMovement('bottom');
});
btnTop.addEventListener('click', function () {
    // cubeMovement('top');
    CUBE.cubeMovement('top');
});
btnSegTop.addEventListener('click', function () {
    // cubeMovement('movetops');
});
//window.addEventListener('load',getAxis);
// btnReset.addEventListener('click',resetPosition); WIP
