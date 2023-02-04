import { SectionStyled } from "../styled-components";
import HeaderSubTitle from "./HeaderSubTitle";
import Input from "./Input";
const MyAccount = () => {
	return (
		<SectionStyled>
			<HeaderSubTitle title='Mi cuenta' textAlign='left' />
			<div>
				<form>
					<Input type='text' name='text' />
					<Input type='text' name='text' />
					<Input type='text' name='text' />
					<Input type='text' name='text' />
				</form>
			</div>
		</SectionStyled>
	);
};

export default MyAccount;
