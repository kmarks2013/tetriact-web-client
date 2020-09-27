import React, {useState} from 'react'
import Display from './Display'
import Stage from './Stage'
import StartButton from './StartButton'
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris'
import { usePlayer } from '../hooks/usePlayer'
import { useStage } from '../hooks/useStage'
import {createStage} from '../gameHelpers'


const Tetris = () => {
    const [ dropTime, setDropTime] = useState(null)
    const [ gameOver, setGameOver] = useState(false)

    const [player] = usePlayer()
    const [stage, setStage] = useStage(player)

    console.log('re-render')

    const movePlayer = dir => {

    }

    const startGame = () => {
        
     }

     const drop = () => {
   
    }

     const dropPlayer = () => {

    }

    const move = ({ keyCode }) => {
        if (!gameOver){
            console.log(keyCode)
            if(keyCode === 37){
                console.log('left')
            }
        }
    }

    return (
        <StyledTetrisWrapper role='button' tabIndex='0' onKeyDown={e => move(e)}>
            <StyledTetris>
            <Stage stage={stage} />
            <aside>
            j   {gameOver ? (
                    <Display gameOver={gameOver} text = "Game Over" />
            ): (
                <div>
                    <Display text="Score" />
                    <Display text="Rows"/>
                    <Display text="Level" />
                </div>
            )}
                <StartButton  callback={ () => console.log('hi')} />
            </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris
