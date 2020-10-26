import React from 'react'
import Button from './Button'

const PauseMenu = () => {
    return (
        <div>
            Game Paused
            <Button text='Resume Game' callback={() => console.log('resumeGame')} />
        </div>
    )
}

export default PauseMenu
