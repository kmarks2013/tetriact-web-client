import styled from "styled-components"

export const StyledPlayerForm = styled.div`
    width: auto;
    height: auto;
    margin: auto;
    padding: 0 0 13px 0;
    display: flex;
    flex-direction: column;
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

export const StyledPlayerFormButton = styled.button`
        box-sizing: border-box;
        margin: auto ;
        padding: 20px;
        min-height: 30px;
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
