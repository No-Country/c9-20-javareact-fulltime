/* import { SectionStyled } from "../styled-components"; */
import HeaderSubTitle from "../../../components/HeaderSubTitle";
import Input from "./Input";
const MyAccount = () => {
	return (
		<section>
			<HeaderSubTitle title='Mi cuenta' textAlign='left' level={1} />
			<div>
				<form>
					<Input type='text' name='text' />
					<Input type='text' name='text' />
					<Input type='text' name='text' />
					<Input type='text' name='text' />
				</form>
			</div>
		</section>
	);
};

export default MyAccount;
