import { useState, useCallback } from 'react'
import { randomTetromino} from '../tetrominos'
import {STAGE_WIDTH} from '../gameHelpers'

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x:0, y:0 },
        tetromnio: randomTetromino().shape,
        collided: false
    })

    const updatePlayerPos = ({x , y, collided}) => {
        console.log('old', player.pos.x, 'new', x)
        setPlayer(prev => ({
            ...prev,
            pos: {x: (prev.pos.x += x), y: (prev.pos.y +=y)},
            collided,
        }))
    }

    return [player, updatePlayerPos]
}