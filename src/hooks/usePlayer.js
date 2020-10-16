import { useState, useCallback } from 'react'
import { TETROMINOS, randomTetromino} from '../tetrominos'
import {checkCollision, STAGE_WIDTH} from '../gameHelpers'


export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x:0, y:0 },
        tetromino: TETROMINOS[0].shape,
        collided: false
    })

    const [nextTetro, setNextTetro] = useState(randomTetromino())
    // console.log(nextTetro.shape)

    const rotate = (matrix, dir) => {
        // make rows become columns (transpose)
        const rotatedTetro = matrix.map((_, index) =>
         matrix.map(col => col[index])) 

        //reverse each ro to get a rotated matrix
        //seperated into two things depeonds on which direction we are moving
        if (dir > 0){
            return rotatedTetro.map(row => row.reverse())
        }
        return rotatedTetro.reverse()
    }

    const playerRotate = (stage, dir) => {
        const clonedPlayer = JSON.parse(JSON.stringify(player))
        clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir)

        const pos = clonedPlayer.pos.x
        let offset = 1
        //porbalby most advanced function from tutorial. try to understand this better
        while(checkCollision(clonedPlayer, stage, {x:0, y:0})){
            clonedPlayer.pos.x += offset
            offset = -(offset + (offset> 0 ? 1: -1))
            if( offset> clonedPlayer.tetromino[0].length){
                rotate(clonedPlayer.tetromino, -dir)
                clonedPlayer.pos.x = pos
                return
            }
        }

        setPlayer(clonedPlayer)
    }

    const updatePlayerPos = ({x , y, collided}) => {
        setPlayer(prev => ({
            ...prev,
            pos: {x: (prev.pos.x += x), y: (prev.pos.y +=y)},
            collided,
        }))
    }

    const resetTetro = useCallback(() => {
        const newTetro = randomTetromino()
        console.log(newTetro, 'new')
        setNextTetro(newTetro)
        console.log(nextTetro, 'next')
    }, [])

    // console.log(resetTetro, 'next')
    const resetPlayer = useCallback(() => {
            // console.log(nextTetro,'wadf')
            const clonedTetro = JSON.parse(JSON.stringify(nextTetro))
            // console.log(clonedTetro)
            setPlayer({
                pos: { x: STAGE_WIDTH / 2 - 2, y: 0},
                tetromino: clonedTetro.shape,
                collided: false
            })
            // console.log(player.tetromino, 'player')
        }, [nextTetro])

    return [player, updatePlayerPos, resetPlayer, playerRotate, nextTetro, resetTetro]
}