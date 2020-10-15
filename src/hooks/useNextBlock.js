import { useState } from 'react'
import {createNext} from '../gameHelpers'


export const useNextBlock =  (player, resetPlayer) =>{
    const [nextBlock, setNextBlock] = useState(createNext()) 

    return [nextBlock, setNextBlock]
}


