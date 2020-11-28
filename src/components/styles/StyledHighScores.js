import styled from 'styled-components'

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
