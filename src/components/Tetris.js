import React, {useState} from 'react'
import Display from './Display'
import Stage from './Stage'
import StartButton from './StartButton'
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris'
import { usePlayer } from '../hooks/usePlayer'
import { useStage } from '../hooks/useStage'


const Tetris = () => {
    const [ dropTime, setDropTime] = useState(null)
    const [ gameOver, setGameOver] = useState(false)

    const [player] = usePlayer()
    const [stage, setStage] = useStage(player)

    console.log('re-render')
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
            <Stage stage={stage} />
            <aside>
                <div>
                    <Display text="Score" />
                    <Display text="Rows"/>
                    <Display text="Level" />
                </div>
                <StartButton  callback={ () => console.log('hi')} />
            </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris
