export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 20

export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill( [ 0 , 'clear' ] )
    )


export const checkCollision = (player, stage, {x: moveX, y: moveY}) =>{
    for(let h = 0; h < player.tetromino.length; h +=1) {
        for(let w = 0; w < player.tetromino[h].length; w +=1) {
            // 1. checking that we are on an actual tetromino cell.
        }
    }
}