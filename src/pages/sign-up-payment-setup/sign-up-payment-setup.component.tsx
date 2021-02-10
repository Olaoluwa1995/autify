import React from "react";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import { PageDivider } from "../../styles/divider.d";
import RegistrationSetup from "../../components/registration-setup/registration-setup.component";

const SignUpPaymentSetup = () => {
	return (
		<>
			<Header
				as="header"
				isButtonVisible={false}
				flexDir={{ base: "row-reverse", sm: "row" }}
			/>
			<RegistrationSetup />
			<PageDivider />
			<Footer />
		</>
	);
};

export default SignUpPaymentSetup;
