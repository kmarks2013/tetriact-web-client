import React from 'react'
import Cell from './Cell'
import {StyledNextBlock} from './styles/StyledNextBlock'

const NextBlock = ({ nextBlockStage }) => {
    return (
        <StyledNextBlock width={nextBlockStage[0].length} height={nextBlockStage.length}>
            {nextBlockStage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} /> ))}
        </StyledNextBlock>
    )
}

export default NextBlock
