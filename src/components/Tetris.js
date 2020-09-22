import React from 'react'
import Cell from './Cell'
import Display from './Display'
import StartButton from './StartButton'

const Tetris = () => {
    return (
        <div>
            <p>I will be tetris</p>
            <StartButton/>
            <Cell/>
            <Display />
        </div>
    )
}

export default Tetris
