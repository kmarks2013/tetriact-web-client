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

export const StyledGameOverMenu = styled.div`
    width: auto;
    height: auto;
    margin: auto;
    background: #03427f;
    color: white;
    background: #000;
    opacity: 0.8;

    h2 {
        font-family: Pixel, Arial, Helvetica, sans-serif;
        font-size: 50px;
        margin: auto;
        padding: 20px;
        color: red ;
    }

    h3 {
        font-family: Pixel, Arial, Helvetica, sans-serif;
        font-size: 24px;
        margin: auto;
        ${'' /* padding: 20px; */}
        color: white ;
    }

    h4 {
        font-family: Pixel, Arial, Helvetica, sans-serif;
        font-size: 20px;
        margin: auto;
        padding: 20px;
        color: white ;
    }

    form {
        padding-bottom: 15px ;
    }

    label, input {
        font-family: Pixel, Arial, Helvetica, sans-serif;
        padding: 0px 10px 0px 10px;
        margin: auto;
    }

    input {
        font-family: Arial, Helvetica, sans-serif;
    }
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
    ${'' /* min-height: 30px; */}
    ${'' /* margin: 0px 0px 0px ${props => props.margin}px; */}
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