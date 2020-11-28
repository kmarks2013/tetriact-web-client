import styled from 'styled-components'

export const StyledStage = styled.div`
    display: grid;
    grid-template-rows: repeat(
        ${props => props.height},
        calc(25vw / ${props => props.width})
    );
    grid-template-columns: repeat(
        ${props => props.width}, 1fr
    );
    grid-gap: 1px;
    border: 2px ridge #333;
    width: 100%;
    max-width: 25vw;
    height:fit-content;
    background-color: #222;
    @media (min-width: 1536px){
        grid-template-rows: repeat(
        ${props => props.height},
        calc(22vw / ${props => props.width})
    );
    grid-template-columns: repeat(
        ${props => props.width}, 1fr
    );
    max-width: 22vw;
    }
`
