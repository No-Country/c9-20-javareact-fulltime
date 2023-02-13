import { useState } from 'react'
import { useSelector } from "react-redux";
import { Link, Outlet } from 'react-router-dom';
import { NavBarStyled } from "../styled-components/NavBarComponent";
import CardList from './CardList';

const NavBar = () => {
	const card = useSelector((state) => state.card);
  const [open, setOpen] = useState(false)
  const toogle = () => open ? setOpen(false) : setOpen(true)

  return (
    <>
      <NavBarStyled>
        <Link to="/">LOGO</Link>
        <input type="text" placeholder='Buscar' />
        <ul>
          <Link to="category">Carta</Link>
          <Link to="promotions">Promociones</Link>
          <Link to="contact">Contacto</Link>
          <Link to="myaccount">Mi Cuenta</Link>
        </ul>
        <button style={{ color: 'white' }} onClick={() => toogle()}>
          Cart
        </button>
      </NavBarStyled>
      {open && card.length > 0 && <CardList setOpen={setOpen}/>}
    </>
  )
}

export default NavBar