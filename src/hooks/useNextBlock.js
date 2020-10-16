import { useState, useEffect } from 'react'
import {createNext} from '../gameHelpers'


export const useNextBlock =  (player, resetTetro) =>{
    const [nextBlockStage, setNextBlockStage] = useState(createNext()) 

    useEffect( () =>{
        if (player.collided){
            resetTetro()
            console.log(player)
        }
    },[player, resetTetro])

    return [nextBlockStage, setNextBlockStage]
}


