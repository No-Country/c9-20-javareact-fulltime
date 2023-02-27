import styled from 'styled-components'

export const CheckContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
//max-height: 100vh;
background-color: var(--background-secondary);
color: var(--text-primary);
font-family: var(--font-family);
@media (max-width: 1329px){
    max-height: 100%;
}
@media (max-width: 768px){

}
`;
export const CheckData = styled.div`
width: 50%;
//height: 100vh;
padding: 120px 120px 150px 150px;

.subtitulos{
    font-family: var(--font-family);
    font-size: 24px;
    margin: 0px 0 5px 0;
    font-weight: 500;
}

.menor{
    font-family: var(--font-family);
    font-size: 20px;
    font-weight: 500;
}

.envio{
    padding-bottom: 39px;
}
hr{
    background-color: white;
    margin: 0px 0 38px 0;
}
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
@media (max-width: 1320px){
    height: 100vh;
    width: 50%;
}
@media (max-width: 576px){
    height: 100%;
    width: 100%;
}
`;

export const CheckCart = styled.div`
background-color: white;
color: black;
display: flex;
flex-direction: column;
border-left: 2px solid black;
//height: 100vh;
width: 50%;
padding: 120px 120px 150px 66px;

.subtitulos{
    font-family: var(--font-family);
    font-size: 24px;
    margin: 0px 0 5px 0;
    font-weight: 500;
}
.detallePlato{
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin-bottom: 10px;
}
.detallesub{
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
}
hr{
    background-color: rgba(172, 172, 172, 1);
    margin: 0px 0 38px 0;
}
@media (max-width: 1320px){
    height: 100vh;
    width: 50%;
}
@media (max-width: 576px){
    height: 100vh;
    width: 100%;
    border: none;
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

/* --------THANKS---------- */
export const ThxContainer = styled.div`
    height: 100vh;
    margin: 0px;
    background-color: var(--background-primary);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    img{
        height: 50px;
        width: 50px;
    }
    button{
        background-color: var(--button-primary);
        color: black;
        height: 50px;
        width: 533px;
        left: 0px;
        top: 0px;
        border-radius: 4px;
    }
`;