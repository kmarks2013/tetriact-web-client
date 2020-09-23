import React from 'react'
import { createStage } from '../gameHelpers'
import Display from './Display'
import Stage from './Stage'
import StartButton from './StartButton'
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris'

const Tetris = () => {
    return (
        <StyledTetrisWrapper>
            <Stage stage={createStage()} />
            <aside>
                <div>
                    <Display text="Score" />
                    <Display text="Rows"/>
                    <Display text="Level" />
                </div>
            </aside>
            <StartButton />
        </StyledTetrisWrapper>
    )
}

export default Tetris
