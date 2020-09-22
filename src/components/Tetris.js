import React from 'react'
import Display from './Display'
import Stage from './Stage'
import StartButton from './StartButton'

const Tetris = () => {
    return (
        <div>
            <Stage />
            <p>I will be tetris</p>
            <aside>
                <div>
                    <Display text="Score" />
                    <Display text="Rows"/>
                    <Display text="Level" />
                </div>
            </aside>
            <StartButton />
        </div>
    )
}

export default Tetris
