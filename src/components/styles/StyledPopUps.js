import styled from 'styled-components'

export const StyledPopUpWrapper = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba( 118, 114, 138, 0.3 );
    display: flex;
    z-index: 1;
`

export const StyledCloseButton = styled.button`
    box-sizing: border-box;
    align-self: flex-end;
    width: 4%;
    height: 4%;
    border-radius: 15px;
    border: none;
    color: black;
    background: white;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 1rem;
    outline: none;
    cursor: pointer;

`