import styled from "styled-components";
export const CardContainer = styled.div`
height: 300px;
width: 350px;
margin: 10px;
background-color: #e6ebe9;
display: flex;
flex-direction: column;
border: 2px solid black;
justify-content: space-around;
flex-wrap: wrap;
border-radius: 15px;
-webkit-box-shadow:5px -8px 52px 0px rgba(62,66,66,0.16);
-moz-box-shadow: 5px -8px 52px 0px rgba(62,66,66,0.16);
box-shadow: 5px -8px 52px 0px rgba(62,66,66,0.16);
&:hover{
    -webkit-box-shadow:0px 10px 39px 10px rgba(62,66,66,0.22);
    -moz-box-shadow: 0px 10px 39px 10px rgba(62,66,66,0.22);
    box-shadow: 0px 10px 39px 10px rgba(62,66,66,0.22);
}
h1{
    margin: 15px;
    font-size: 1.5rem;
}
`;
export const CardContent = styled.div`
height: 180px;
margin: 10px;
img{
    width: 100%;
    height: 100%;
}
`;
/* export const cardContainer = styled.div`

`
export const cardContainer = styled.div`

` */
