import styled from 'styled-components'

export const CheckContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
justify-content: space-between;
min-height: 100vh;
background-color: var(--background-secondary);
color: var(--text-primary);
font-family: var(--font-family);

`
export const CheckData = styled.div`
margin: 15px;
width: 600px;
input[type="radio"] {
    accent-color: var(--button-primary);
    position: relative;
    margin-right: 10px;
    cursor: pointer;
    width: 20px;
    height: 20px;
}

button{
    background-color: var(--button-primary);
    color: black;
    font-weight: bold;
    width: 100%;
    height: 50px;
    font-size: 1.6rem;
}
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
        background-color: var(--background-secondary);
        color: white;
    }
}
`;

export const CheckCart = styled.div`
background-color: white;
color: black;
display: flex;
flex-direction: column;
border-left: 2px solid black;
height: 753px;
width: 700px;
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