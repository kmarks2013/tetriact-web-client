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
            if(player.tetromino[h][w] !== 0) {
                if(
                    //.2 check that our move is inside the game area height (h)
                    // shouldn't go thorugh bottom of the play area
                    !stage[h+ player.pos.y + moveY] ||
                    //.3 make sure that tetromino doesn't move outisde game area width (w)
                    !stage[h+ player.pos.y + moveY][w + player.pos.x + moveX] ||
                    //.4 make sure cell isn't check to clear
                    ){
                }

            }

        }
    }
}