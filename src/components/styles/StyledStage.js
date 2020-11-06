import styled from 'styled-components'

export const StyledStage = styled.div`
    margin: 0 0 0 40px;
    display: grid;
    grid-template-rows: repeat(
        ${props => props.height},
        calc(25vw / ${props => props.width})
    );
    grid-template-columns: repeat(
        ${props => props.width}, 1fr
    );
    grid-gap: 2px;
    border: 4px ridge #333;
    width: 100%;
    max-width: ${props=> props.vw}vw;
    background-color: #222;
`
