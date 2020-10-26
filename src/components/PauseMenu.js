import React from 'react'
import Button from './Button'

const PauseMenu = ({callback}) => {
    return (
        <div>
            Game Paused
            <Button text='Resume Game' callback={callback} />
        </div>
    )
}

export default PauseMenu
