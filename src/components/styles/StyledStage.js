import styled from 'styled-components'

export const StyledStage = styled.div`
    display: grid;
    grid-template-rows: repeat(
        ${props => props.height},
        calc(25vh / ${props => props.width})
    );
    grid-template-columns: repeat(
        ${props => props.width}, 1fn
    );
    grid-gap: 1px;
    border: 2xp solid #333;
    width: 100%;
    max-width: 25vw;
    background: #111;
`
