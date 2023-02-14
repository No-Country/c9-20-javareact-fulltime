import styled from "styled-components";

export const SectionStyled = styled.section`
    margin: 5em 3em;
    display: grid;
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
width: 365px;
height: 426px;
padding: 1em;
background-color: #FFF;
border-radius: 20px;

section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    transform: translateY(-3em);
}
h2{
    margin: 10px;
    font-size: 28px;
}
button{

}
`;
export const ItemImg = styled.div`
width: 300px;
height: 192px;
img{
    border-radius: 30px;
    width: 100%;
    height: 100%;
}
`;
export const ItemDescription = styled.div`
    font-size: 12px;
`;
export const ItemButton = styled.button`
background-color: #FFA800; //TODO cambiar a variable
font-family: 'Poppins', sans-serif;
font-size: 20px;
width: 289px;
height: 55px;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
border-radius: 4px;

img {
    margin-left: .5em;
    filter: invert(100%);
}
&:hover{
}
h4 {
    font-weight: 400;
}
`;
export const ItemPeople = styled.div`
    font-size: 16px;
    margin: .5em;
`;
export const ItemPrice = styled.div`
    font-size: 24px;
    font-weight: 600;
    margin: .5em;
`;

/* ------------------------------ COMENTS ITEMS ----------------------------- */

export const CommentContainer = styled.section`
    width: 563px;
    height: 142px;
    color: #FFF;
    display: flex;
    border: 1px solid #FFFFFF;
    border-radius: 8px;
`;
export const CommentImg = styled.div`
    width: 150px;
    height: 150px;
    margin: 0 1.5em;
    transform: translateY(-1.5em);
    border-radius: 208px;
`;
export const CommentName = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 10px;
`;
export const Comment = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
`;
export const CommentDate = styled.span`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
`;