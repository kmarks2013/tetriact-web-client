import React from 'react'
import Cell from './Cell'
import {StyledNextBlock} from './styles/StyledNextBlock'

const NextBlock = () => {
    return (
        <StyledNextBlock>
            <Cell key='x' type='0'/>
        </StyledNextBlock>
    )
}

export default NextBlock
