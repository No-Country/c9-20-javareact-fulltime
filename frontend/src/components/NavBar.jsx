import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { openCart } from "../redux/slice/cart.slice";
import { NavBarStyled } from "../styled-components";
import ButtonAction from "./ButtonAction";
import CardList from "./CardList";
import cart from "/icons/carWhite.svg";
const NavBar = ({ items }) => {
	const dispatch = useDispatch();
	const card = useSelector((state) => state.card);
	const [open, setOpen] = useState(false);
	const activeStyle = {
		backgroundColor: " #FFA800",
	};
	const handleOpen = () => dispatch(openCart());
	return (
		<NavBarStyled>
			<menu>
				{items.map((name, index) => (
					// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<li key={index}>
						<NavLink
							to={name}
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							{name}
						</NavLink>
					</li>
				))}
				<ButtonAction
					img={cart}
					size='cover'
					backgroundColor={"transparent"}
					onClick={handleOpen}
					padding={"1em"}
				/>
			</menu>
			{open && card.length > 0 && <CardList setOpen={setOpen} />}
		</NavBarStyled>
	);
};

export default NavBar;
