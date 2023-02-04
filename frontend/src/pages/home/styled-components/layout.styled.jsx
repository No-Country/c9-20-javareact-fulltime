import styled from "styled-components";

export const HeaderSubtitleStyled = styled.header`
    text-align: ${({ textAlign }) => textAlign}; 
`;

export const ContainerFlexBoxStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    block-size: ${({ blockSize }) => blockSize};
    inline-size: ${({ inlineSize }) => inlineSize};
    align-items: center;
    gap: ${({ gap }) => gap};
`;

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
