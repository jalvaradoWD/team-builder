import React, { useState } from "react";

import StyledForm from "./styles/Form.styles";

const Form = () => {
	const [fullName, setFullName] = useState();
	const [email, setEmail] = useState();

	const createUser = () => {};

	return (
		<form>
			<h2>Add Team Member</h2>
			<div>
				<label htmlFor="fullName">Full Name</label>
				<input
					onChange={(e) => setFullName(e.target.value)}
					type="text"
					placeholder="Full Name"
					name="fullName"
				/>
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					name="email"
					placeholder="Email"
				/>
			</div>
		</form>
	);
};

export default Form;
