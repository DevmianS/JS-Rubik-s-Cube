// import * as MODEL from './model.js';
import { state, crnPieces, edgePieces } from './model.js';
export class RenderSide {
    size = 300;
    vol = this.size / 2;
    pitch = state.pitch;
    yaw = state.yaw;
    renderSideEl(el, side, tile = 0) {
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
}

export class Pieces extends RenderSide {
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
        //Rendering corners
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 3; j++) {
                this.renderSideEl(
                    `tile_${state.crnr[crnPieces[i]].tileNr[j]}`,
                    state.crnr[crnPieces[i]].cubeSide[j],
                    state.crnr[crnPieces[i]].tilePos[j]
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
                    `tile_${state.edgs[edgePieces[i]].tileNr[j]}`,
                    state.edgs[edgePieces[i]].cubeSide[j],
                    state.edgs[edgePieces[i]].tilePos[j]
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
