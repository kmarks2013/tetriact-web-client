export const TETROMINOS = {
    0: {
        shape: [[0]],
        color: '0,0,0'
    },
    I: {
        shape: [
            [ 0, 'I', 0, 0],
            [ 0, 'I', 0, 0],
            [ 0, 'I', 0, 0],
            [ 0, 'I', 0, 0]
        ],
        color: '255,77,132',

    },
    J: {
        shape: [
            [ 0, 'J', 0, ],
            [ 0, 'J', 0, ],
            [ 'J', 'J', 0, ]
        ],
        color: '57, 104, 203',

    },
    L: {
        shape: [
            [ 0, 'L', 0, ],
            [ 0, 'L', 0, ],
            [ 0, 'L', 'L', ]
        ],
        color: '255, 104, 168',
    },
    O: {
        shape: [
            [ 0 ,'O', 'O' ],
            [ 0 , 'O', 'O' ]
        ],
        color: '202,124,216',
    },
    S: {
        shape: [
            [ 0, 'S', 'S', ],
            [ 'S', 'S', 0, ],
            [ 0, 0, 0, ]
        ],
        color: '255,33,83',
    },
    T: {
        shape: [
            [ 0, 0, 0, ],
            [ 'T', 'T', 'T', ],
            [ 0, 'T', 0, ]
        ],
        color: '16, 231, 226',
    },
    Z: {
        shape: [
            [ 'Z', 'Z', 0, ],
            [ 0, 'Z', 'Z', ],
            [ 0, 0, 0, ]
        ],
        color: '249,235,15',
    },
}

export const randomTetromino = () =>{
    const tetrominos = 'IJLOSTZ'
    const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)]
    return TETROMINOS[randTetromino]
}