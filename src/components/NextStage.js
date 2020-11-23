import React from 'react'
import Cell from './Cell'
import {StyledNextStage} from './styles/StyledNextStage'

const NextStage = ({ nextStage }) => {
    return (
        <StyledNextStage width={nextStage[0].length} height={nextStage.length}>
            {nextStage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} /> ))}
        </StyledNextStage>
    )
}

export default NextStage
