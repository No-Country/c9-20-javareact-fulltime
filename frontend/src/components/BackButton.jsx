import { useNavigate } from "react-router-dom"
import backArrow from "../../public/icons/back-arrow.svg"
import styled from "styled-components"


const BackButton = ({tabbar}) => {
  const navigate = useNavigate()
  return (
    <ContainerBackArrow onClick={() => navigate(-1)} tabbar={tabbar}>
      <BackArrow src={backArrow} />
      <span>Atrás</span>
    </ContainerBackArrow>
  )
}

export default BackButton;


const ContainerBackArrow = styled.div`
  display: flex;
  gap: .5em;
  align-items: center;
  cursor: pointer;
  padding: 0 1em;
  transform: translate(-40vw, 0);
  @media (max-width: 801px){
    padding: 1em;
    transform: translate(0, 0);
    display: ${({ tabbar }) => (tabbar ? "block" : "none")};
    span {
      display: ${({ tabbar }) => (tabbar ? "none" : "block")};
    }
  }
`
const BackArrow = styled.img`
  /* position: absolute; */
  display: block;
  width: 1.3em;
  height: 1.3em;
  @media (max-width: 801px){
    width: 0.9em;
    height: 0.9em;
  }
`