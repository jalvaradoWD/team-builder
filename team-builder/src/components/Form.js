import React, { useState } from "react";

import FormStyles from "../styles/Form.styles";

const Form = () => {
	const [fullName, setFullName] = useState();
	const [email, setEmail] = useState();

	const createUser = () => {};

	return (
		<FormStyles>
			<h2>Add Team Member</h2>
			<div className="form-group">
				<label htmlFor="fullName">Full Name</label>
				<input
					onChange={(e) => setFullName(e.target.value)}
					type="text"
					placeholder="Full Name"
					name="fullName"
					id="fullName"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="email">Email</label>
				<input
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					name="email"
					placeholder="Email"
					id="email"
				/>
			</div>
			<input type="submit" value="Add Member" />
		</FormStyles>
	);
};

export default Form;
