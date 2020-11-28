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

export const StyledHighScores = styled.div`
    width: 50%;
    margin: auto;
    height: auto;
    align-content: center;
    background: #000;
    opacity: 0.8;

    h2 {
        font-family: Pixel, Arial, Helvetica, sans-serif;
        font-size: 24px;
        margin: auto;
        padding: 20px;
        color: white ;
    }

        h3 {
            font-family: Pixel, Arial, Helvetica, sans-serif;
            font-size: 24px;
            margin: auto;
            padding: 12px;
            color: white ;
        }

    table {
        ${'' /* margin: auto; */}
        font-family: Pixel, Arial, Helvetica, sans-serif;
        font-size: 16px;
        margin: auto;
        padding: 0px 20px 20px 20px;
        color: white;
        width: 75%;
    }
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