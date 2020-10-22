import { useState, useEffect } from 'react'
import { createNext } from '../gameHelpers'

export const useNextStage = () => {
    useEffect( () => {
        console.log('i will set the next stage')
    },[])
}