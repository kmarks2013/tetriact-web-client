import { useState, useEffect } from 'react'
import { createNext } from '../gameHelpers'

export const useNextStage = () => {
    const [nextStage, setNextStage] = useState(createNext())

    useEffect( () => {
        console.log('i will set the next stage')
    },[])
}