import React from "react";

const ItemsCard = ({ amount, name, cost, subTotal }) => {
	return (
		<>
			<header>
				<h2>
					{amount}x {name}
				</h2>
				<span>${subTotal}</span>
			</header>
			<hr />
			<ul>
				<li>
					<p>SubTotal:</p>
					<span>${subTotal}</span>
				</li>
				<li>
					<p>Costo de envió:</p>
					<span>$xx</span>
				</li>
				<li>
					<p>Total:</p>
					<span>${cost}</span>
				</li>
				<li>
					<p>Código des:</p>
					<span>$xx</span>
				</li>
			</ul>
		</>
	);
};

export default ItemsCard;
