import React from 'react'
import Cell from './Cell'
import {StyledStage} from './styles/StyledStage'
import { STAGE_VW } from '../gameHelpers'

const Stage = ({ stage }) => {
    return (
        <StyledStage cellWidth={stage[0].length} vw={STAGE_VW} cellHeight={stage.length}>
            {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} /> ))}
        </StyledStage>
    )
}

export default Stage
