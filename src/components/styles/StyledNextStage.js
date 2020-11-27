import styled from 'styled-components'

export const StyledNextStage = styled.div`
    margin-left: 41%;
    display: grid;
    grid-template-rows: repeat(
        ${props => props.height},
        calc(10.5vw / ${props => props.width})
    );
    grid-template-columns: repeat(
        ${props => props.width}, 1fr
    );
    grid-gap: 1px;
    border: 2px ridge #333;
    width: 100%;
    height: fit-content;
    max-width: 10.5vw;
    background-color: #222;
    @media (min-width: 1536px){
        grid-template-rows: repeat(
        ${props => props.height},
        calc(9.2vw / ${props => props.width})
    );
    grid-template-columns: repeat(
        ${props => props.width}, 1fr
    );
    max-width: 9.2vw;
    }
`