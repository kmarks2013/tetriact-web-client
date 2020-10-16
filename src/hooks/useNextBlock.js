import { useState, useEffect } from 'react'
import {createNext} from '../gameHelpers'


export const useNextBlock =  (player, resetTetro) =>{
    const [nextBlockStage, setNextBlockStage] = useState(createNext()) 

    useEffect( () =>{
        //this needs to now show the next tetromino block, and then clear it on collision and then add the new one to the next stage
        if (player.collided){
            resetTetro()
            console.log(player)
        }
    },[player, resetTetro])

    return [nextBlockStage, setNextBlockStage]
}


