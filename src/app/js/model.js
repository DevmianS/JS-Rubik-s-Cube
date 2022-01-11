export const crnPiece = [
    'frontLeftTop',
    'frontLeftBottom',
    'rightFrontTop',
    'rightFrontBottom',
    'backRightTop',
    'backRightBottom',
    'leftBackTop',
    'leftBackBottom',
];
export const state = {
    pitch: -45,
    yaw: -45,

    crnr: {
        //front left top
        [crnPiece[0]]: {
            tileNr: [1, 31, 44], //1-54
            cubeSide: [1, 4, 5], //1-6
            tilePos: [1, 3, 7], //1-9
        },
        //front left bottom
        [crnPiece[1]]: {
            tileNr: [7, 36, 46], //1-54
            cubeSide: [1, 4, 6], //1-6
            tilePos: [7, 9, 1], //1-9
        },
        //right front top
        [crnPiece[2]]: {
            tileNr: [3, 10, 45], //1-54
            cubeSide: [1, 2, 5], //1-6
            tilePos: [3, 1, 9], //1-9
        },
        //right front bottom
        [crnPiece[3]]: {
            tileNr: [9, 16, 49], //1-54
            cubeSide: [1, 2, 6], //1-6
            tilePos: [9, 7, 3], //1-9
        },
        //back right top
        [crnPiece[4]]: {
            tileNr: [13, 19, 40], //1-54
            cubeSide: [2, 3, 5], //1-6
            tilePos: [3, 1, 3], //1-9
        },
        //back right bottom
        [crnPiece[5]]: {
            tileNr: [18, 25, 54], //1-54
            cubeSide: [2, 3, 6], //1-6
            tilePos: [9, 7, 9], //1-9
        },
        //left back top
        [crnPiece[6]]: {
            tileNr: [28, 22, 37], //1-54
            cubeSide: [4, 3, 5], //1-6
            tilePos: [1, 3, 1], //1-9
        },
        //left back bottom
        [crnPiece[7]]: {
            tileNr: [35, 27, 52], //1-54
            cubeSide: [4, 3, 6], //1-6
            tilePos: [7, 9, 7], //1-9
        },
    },
};
