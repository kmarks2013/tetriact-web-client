import styled from 'styled-components'

export const StyledNextBlock = styled.div`
    ${'' /* box-sizing: border-box;
    border: 1px solid black; */}
    margin: 40px 40px 0 0;
    ${'' /* height: 100px;
    width: 100px; */}
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
    width: 95px;
    height: 84px;
    max-width: 25vw;
    background-color: #222;
`