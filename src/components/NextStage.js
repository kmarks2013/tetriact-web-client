import React from 'react'
import Cell from './Cell'
import {StyledNextBlock} from './styles/StyledNextBlock'

const NextStage = ({ nextStage }) => {
    return (
        <StyledNextBlock width={nextStage[0].length} height={nextStage.length}>
            {nextStage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} /> ))}
        </StyledNextBlock>
    )
}

export default NextStage
