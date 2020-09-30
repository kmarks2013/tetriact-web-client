import { useState, useEffect } from 'react'
import { createStage } from '../gameHelpers'

export const useStage = (player, resetPlayer) =>{
    const [stage, setStage] = useState(createStage())

    return [stage, setStage]
}