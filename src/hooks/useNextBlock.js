import { useState, useEffect } from 'react'
import {createNext} from '../gameHelpers'


export const useNextBlock =  (player, resetTetro) =>{
    const [nextBlockStage, setNextBlockStage] = useState(createNext()) 

    return [nextBlockStage, setNextBlockStage]
}


