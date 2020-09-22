import React from 'react'
import Display from './Display'
import Stage from './Stage'
import StartButton from './StartButton'

const Tetris = () => {
    return (
        <div>
            <p>I will be tetris</p>
            <StartButton />
            <Display />
            <Stage />
        </div>
    )
}

export default Tetris
