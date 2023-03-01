class InfoCheckout {
	constructor(
		shipment = "local",
		pay = "",
		cardNumber = "",
		dueDate = "",
		cvv = "",
		paymentMethod = "Debito",
	) {
		this.shipment = shipment;
		this.pay = pay;
		this.cardNumber = cardNumber;
		this.dueDate = dueDate;
		this.cvv = cvv;
		this.paymentMethod = paymentMethod;
	}
}
export default InfoCheckout;
