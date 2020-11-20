import React from 'react'
import Cell from './Cell'
import { NEXT_VW } from '../gameHelpers'
import {StyledNextStage} from './styles/StyledNextStage'

const NextStage = ({ nextStage }) => {
    return (
        <StyledStage width={nextStage[0].length} vw={NEXT_VW} height={nextStage.length}>
            {nextStage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} /> ))}
        </StyledStage>
    )
}

export default NextStage
