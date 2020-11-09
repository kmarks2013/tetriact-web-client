import styled from 'styled-components'

export const StyledStage = styled.div`
    margin: 0 0 0 40px;
    display: grid;
    grid-template-rows: repeat(
        ${props => props.cellHeight},
        calc(${props => props.vw}vw / ${props => props.cellWidth})
    );
    grid-template-columns: repeat(
        ${props => props.cellWidth}, 1fr
    );
    grid-gap: 2px;
    border: 4px ridge #333;
    width: 100%;
    max-width: ${props=> props.vw}vw;
    height:fit-content;
    background-color: #222;
`
