class Trolley {
	constructor(
		id = 0,
		amount = 0,
		name = "",
		cost = "",
		subTotal = "",
		ShippingCost = "",
		total = "",
		DiscountCode = "",
	) {
		this.id = id;
		this.cargar;
		this.amount = amount;
		this.name = name;
		this.cost = cost;
		this.subTotal = subTotal;
		this.ShippingCost = ShippingCost;
		this.total = total;
		this.DiscountCode = DiscountCode;
	}
}

export default Trolley;
