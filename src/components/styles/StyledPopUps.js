import styled from 'styled-components'

export const StyledPopUpWrapper = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba( 118, 114, 138, 0.3 );
    display: flex;
`

export const StyledPauseMenu = styled.div`
    width: 50%;
    height: auto;
    flex-driectoin: column;
    margin: auto;
    align-content: center;
    background: #000;
    opacity: 0.8;

    h2 {
        font-family: Pixel, Arial, Helvetica, sans-serif;
        font-size: 50px;
        margin: auto;
        padding: 20px;
        color: white ;
    }
`
export const StyledGameOverMenu = styled.div`
    width: 50%;
    height: 50%;
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
        color: white ;
    }

    h3{
        font-family: Pixel, Arial, Helvetica, sans-serif;
        font-size: 24px;
        margin: auto;
        padding: 20px;
        color: white ;
    }
`