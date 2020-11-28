import styled from 'styled-components'

export const StyledButton = styled.button`
    box-sizing: border-box;
    margin: 0 0 13px ${props => props.margin}px ;
    margin: auto ;
    padding: 20px;
    min-height: 30px;
    width: ${props => props.width}%;
    height: auto;
    border-radius: 15px;
    border: none;
    color: white;
    background: #333;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
`