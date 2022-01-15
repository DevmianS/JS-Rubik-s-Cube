export const crnPieces = [
    'frontLeftTop',
    'frontLeftBottom',
    'rightFrontTop',
    'rightFrontBottom',
    'backRightTop',
    'backRightBottom',
    'leftBackTop',
    'leftBackBottom',
];
export const edgePieces = [
    'frontTop',
    'rightTop',
    'backTop',
    'leftTop',
    'frontBottom',
    'rightBottom',
    'backBottom',
    'leftBottom',
    'frontRight',
    'rightBack',
    'backLeft',
    'leftFront',
];

//TODO probably not needed:
export const midPieces = ['front', 'right', 'back', 'left', 'top', 'bottom'];

export const state = {
    pitch: -30,
    yaw: -45,
    size: 300,
    vol: 150, //need to be half of size
    //TODO make vol half of size automatically
    topLayRot: 0,
    cubeSide: [0, 1, 2, 3, 4, 5, 6],

    method() {
        this.yawTop = 0;
        console.log(state);
    },

    // vol: this.size / 2,
    crnr: {
        //front left top
        [crnPieces[0]]: {
            tileNr: [1, 30, 43], //1-54
            tilePos: [1, 3, 7], //1-9
            cubeSide: [1, 4, 5], //1-6
        },
        //front left bottom
        [crnPieces[1]]: {
            tileNr: [7, 36, 46], //1-54
            tilePos: [7, 9, 1], //1-9
            cubeSide: [1, 4, 6], //1-6
        },
        //right front top
        [crnPieces[2]]: {
            tileNr: [3, 10, 45], //1-54
            tilePos: [3, 1, 9], //1-9
            cubeSide: [1, 2, 5], //1-6
        },
        //right front bottom
        [crnPieces[3]]: {
            tileNr: [9, 16, 48], //1-54
            tilePos: [9, 7, 3], //1-9
            cubeSide: [1, 2, 6], //1-6
        },
        //back right top
        [crnPieces[4]]: {
            tileNr: [12, 19, 39], //1-54
            tilePos: [3, 1, 3], //1-9
            cubeSide: [2, 3, 5], //1-6
        },
        //back right bottom
        [crnPieces[5]]: {
            tileNr: [18, 25, 54], //1-54
            tilePos: [9, 7, 9], //1-9
            cubeSide: [2, 3, 6], //1-6
        },
        //left back top
        [crnPieces[6]]: {
            tileNr: [28, 21, 37], //1-54
            tilePos: [1, 3, 1], //1-9
            cubeSide: [4, 3, 5], //1-6
        },
        //left back bottom
        [crnPieces[7]]: {
            tileNr: [34, 27, 52], //1-54
            tilePos: [7, 9, 7], //1-9
            cubeSide: [4, 3, 6], //1-6
        },
    },
    edges: {
        [edgePieces[0]]: {
            tileNr: [2, 44], //1-54
            tilePos: [2, 8], //1-9
            cubeSide: [1, 5], //1-6
        },

        [edgePieces[1]]: {
            tileNr: [11, 42], //1-54
            tilePos: [2, 6], //1-9
            cubeSide: [2, 5], //1-6
        },
        [edgePieces[2]]: {
            tileNr: [20, 38], //1-54
            tilePos: [2, 2], //1-9
            cubeSide: [3, 5], //1-6
        },
        [edgePieces[3]]: {
            tileNr: [29, 40], //1-54
            tilePos: [2, 4], //1-9
            cubeSide: [4, 5], //1-6
        },

        [edgePieces[4]]: {
            tileNr: [8, 47], //1-54
            tilePos: [8, 2], //1-9
            cubeSide: [1, 6], //1-6
        },
        [edgePieces[5]]: {
            tileNr: [17, 51], //1-54
            tilePos: [8, 6], //1-9
            cubeSide: [2, 6], //1-6
        },
        [edgePieces[6]]: {
            tileNr: [26, 53], //1-54
            tilePos: [8, 8], //1-9
            cubeSide: [3, 6], //1-6
        },
        [edgePieces[7]]: {
            tileNr: [35, 49], //1-54
            tilePos: [8, 4], //1-9
            cubeSide: [4, 6], //1-6
        },
        [edgePieces[8]]: {
            tileNr: [6, 13], //1-54
            tilePos: [6, 4], //1-9
            cubeSide: [1, 2], //1-6
        },
        [edgePieces[9]]: {
            tileNr: [15, 22], //1-54
            tilePos: [6, 4], //1-9
            cubeSide: [2, 3], //1-6
        },
        [edgePieces[10]]: {
            tileNr: [24, 31], //1-54
            tilePos: [6, 4], //1-9
            cubeSide: [3, 4], //1-6
        },
        [edgePieces[11]]: {
            tileNr: [33, 4], //1-54
            tilePos: [6, 4], //1-9
            cubeSide: [4, 1], //1-6
        },
    },
    cntr: {
        tileNr: [5, 14, 23, 32, 41, 50], //1-54
        tilePos: [5, 5, 5, 5, 5, 5], //1-9
        cubeSide: [1, 2, 3, 4, 5, 6], //1-6
    },
};
// state.method();
// state.crnr[crnPieces[2]].cubeSide[0] += 1;
// state.crnr[crnPieces[2]].cubeSide[1] += 1;
