import styled from "styled-components";

export const SectionStyled = styled.section`
    padding: 30px;
`;

export const ContainerListStyled = styled.ul`

    display: flex;
    flex-direction: column;
    gap: 50px;

`;

export const ContainerFormClaimsStyled = styled.form`


    inline-size: 1200px;

    textarea{

        inline-size: 100%;
        padding: 10px;
        border-radius: 10px;
        resize: none;

    }
`;
/* Card Resposive abieto a que lo configuren */
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
/* Container del item responsive abierto a que lo modifiquen */
export const ItemContainer = styled.div`
height: 500px;
width: 350px;
margin: 10px;
background-color: #e6ebe9;
display: flex;
flex-direction: column;
border: 2px solid black;
justify-content: center;
justify-content: space-between;
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
button{

}
`;
export const ItemImg = styled.div`
height: 180px;
img{
    width: 100%;
    height: 100%;
}
`;
export const ItemDescription = styled.div`
margin: 10px;
h2{
    font-weight: bold;
}
`;
export const ItemButton = styled.button`
background-color: #4ec2e9;
color: black;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
width: 300px;
border-radius: 15px;
&:hover{
    background-color: #6666f7;
    color: antiquewhite;
}
`;
