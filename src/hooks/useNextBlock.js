import { useState, useEffect } from 'react'
import {createNext, NEXT_WIDTH} from '../gameHelpers'


export const useNextBlock =  (player, nextTetro, resetTetro) =>{
    const [nextBlockStage, setNextBlockStage] = useState(createNext()) 

    useEffect( () =>{
        //this needs to now show the next tetromino block, and then clear it on collision and then add the new one to the next stage
        console.log(nextTetro)

        if (player.collided){
            resetTetro()
            console.log(player)
        }
    },[player, resetTetro])

    return [nextBlockStage, setNextBlockStage]
}


