import styled from 'styled-components'

export const StyledNextBlock = styled.div`
    margin: 40px 40px 0 0;
    display: grid;
    grid-template-rows: repeat(
        ${props => props.height},
        calc(10.5vw / ${props => props.width})
    );
    grid-template-columns: repeat(
        ${props => props.width}, 1fr
    );
    grid-gap: 2px;
    border: 4px ridge #333;
    width: 15%;
    height: fit-content;
    max-width: 25vw;
    background-color: #222;
`