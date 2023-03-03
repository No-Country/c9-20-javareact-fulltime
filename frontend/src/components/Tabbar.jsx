import { useDispatch } from "react-redux";
import { openMenu } from "../redux/slice/cart.slice";
import { TabbarStyled } from "../styled-components"
import menuTabbarIcon from "../../public/icons/menu-tabbar.svg"
import BackButton from "./BackButton";

const Tabbar = () => {
  const dispatch = useDispatch();
  const title = document.title
  
  return (
    <TabbarStyled>
      {title === "Carta" || title === "Promociones" ? 
      <BackButton tabbar={true}/> :
      <img
        onClick={() => dispatch(openMenu(true))}
        src={menuTabbarIcon}
        alt="menu icon"
      ></img> }
    </TabbarStyled>
  )
}

export default Tabbar