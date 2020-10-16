import { useState, useEffect } from 'react'
import {createNext} from '../gameHelpers'


export const useNextBlock =  (player, resetPlayer) =>{
    const [nextBlockStage, setNextBlockStage] = useState(createNext()) 

    return [nextBlockStage, setNextBlockStage]
}


