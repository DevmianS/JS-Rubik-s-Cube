// import * as MODEL from './model.js';
import { state, crnPieces, edgePieces } from './Model.js';

//Init
(() => {
    document.querySelector('.d3cube').innerHTML = `
   <div class = "wrapper"> 
    <div class="scene">
        <div class="cube">

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
            <button class="btn_segment-right">right segment</button>
        </div>
    </div>
</div>`;
})();

export class RenderSide {
    readState() {
        this.size = state.size / 3;
        this.vol = state.vol;
        this.pitch = state.pitch;
        this.yaw = state.yaw;
        this.yawTop = state.yawTop;
        this.topLayRot = state.topLayRot;
        this.rigLayRot = state.rigLayRot;
    }
    //TODO fix pitch and yaw and make rotation from 360 deg to 0 instant

    renderSideEl(el, side, tile = 0) {
        this.readState();
        //tiles mapping
        const tilePos = new Map([
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
        //TODO rotateZ
        const sdPos = {
            1: `transform: rotateX(${this.pitch}deg) rotateY(${
                this.yaw
            }deg) translateZ(${this.vol}px) ${tilePos.get(tile)}; ${dims};`,
            2: `transform: rotateX(${this.pitch}deg) rotateY(${
                this.yaw + 90
            }deg) rotateZ(${this.rigLayRot}deg) translateZ(${
                this.vol
            }px) ${tilePos.get(tile)}; ${dims};`,
            3: `transform: rotateX(${this.pitch}deg) rotateY(${
                this.yaw + 180
            }deg) translateZ(${this.vol}px) ${tilePos.get(tile)}; ${dims};`,

            4: `transform: rotateX(${this.pitch}deg) rotateY(${
                this.yaw + 270
            }deg) translateZ(${this.vol}px) ${tilePos.get(tile)}; ${dims};`,
            5: `transform: rotateX(${
                this.pitch + 90
            }deg) rotateY(0deg) rotateZ(${
                -this.yaw + this.topLayRot
            }deg) translateZ(${this.vol}px) ${tilePos.get(tile)};
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
    }
}

export class Pieces extends RenderSide {
    constructor() {
        super();
        // this.renderPieces();
    }
    renderPieces() {
        this.readState();
        // console.log(state.yaw, state.pitch);
        //Rendering corners
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 3; j++) {
                this.renderSideEl(
                    `tile_${state.crnr[i].tileNr[j]}`,
                    state.crnr[i].cubeSide[j],
                    state.crnr[i].tilePos[j]
                );
            }
        }

        //Rendering middle pieces
        for (let i = 0; i < 6; i++) {
            this.renderSideEl(
                `tile_${state.cntr.tileNr[i]}`,
                state.cntr.cubeSide[i],
                state.cntr.tilePos[i]
            );
        }

        //Rendering edge pieces
        for (let i = 0; i < 12; i++) {
            for (let j = 0; j < 2; j++) {
                this.renderSideEl(
                    `tile_${state.edges[i].tileNr[j]}`,
                    state.edges[i].cubeSide[j],
                    state.edges[i].tilePos[j]
                );
            }
        }

        //front 1-9
        //right 10-18
        //back 19-27
        //left 28-36
        //top 37-45
        //bottom 46-54
    }
}
