import styled from 'styled-components'

export const StyledPauseMenu = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    margin: auto;
    background: #000;
    opacity: 0.8;

    h2 {
        font-family: Pixel, Arial, Helvetica, sans-serif;
        font-size: 50px;
        margin: auto;
        padding: 40px;
        color: white ;
    }
`

export const StyledUnpauseButton = styled.button`
        box-sizing: border-box;
        margin: auto ;
        padding: 20px;
        min-height: 30px;
        width: 45%;
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