import styled from 'styled-components'

export const CheckContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
justify-content: space-around;
max-height: 100vh;
div{
    margin: 10px;
    width: 400px;
}


`
export const CheckData = styled.div`
form{
    display: flex;
    flex-direction: column;
    margin: 15px;
    label{
        font-size: 1.2rem;
        margin: 15px;
    }
    input{
        height: 30px;
    }
}
`;

export const CheckCart = styled.div`
display: flex;
flex-direction: column;
background-color: #ffffff;
border-left: 2px solid black;
height: 500px;
h1{
    margin-left: 25px;
}
`;
export const Unwrapped = styled.div`
select {
    position: relative;
    -webkit-appearance: button;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    height: 2.2em;
    margin: 2px;
    padding: 0.3em 0.6em;
    background: white;
    border: 1px solid #aaaaaa;
    border-radius: 0.3em;
    box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.3),
    0 1px 2px rgba(0, 0, 0, 0.4);
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 0.85em;
    font-weight: normal;
    overflow: hidden;
    text-shadow: 0 1px 0 white;
    -webkit-transition: box-shadow 200ms, border-color 200ms;
    -moz-transition: box-shadow 200ms, border-color 200ms;
    transition: box-shadow 200ms, border-color 200ms;
    white-space: nowrap;
    select option {
    text-shadow: none;
}
    }
`;