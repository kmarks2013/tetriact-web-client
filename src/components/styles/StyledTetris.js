import styled from 'styled-components'
import bgpng from '../../images/bg.png'

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${bgpng}), #000;
    background-size: cover;
    overflow:hidden;
`

export const StyledTetris = styled.div`
    display:flex;
    aligh-items: flex-start;
    padding: 40px;
    margin: 0 auto;
    max-width: 900px;
`
