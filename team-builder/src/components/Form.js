import React, { useState } from "react";

import FormStyles from "../styles/Form.styles";

const Form = ({ setMembers, members }) => {
	const [fullName, setFullName] = useState();
	const [email, setEmail] = useState();
	const [role, setRole] = useState();

	const createUser = (e) => {
		e.preventDefault();
		const newUser = {
			name: fullName,
			email,
			role,
			id: members.length,
		};

		setMembers([...members, newUser]);
		setFullName("");
		setEmail("");
		setRole("");
	};

	const onChange = (e) => {
		e.preventDefault();

		const textValue = e.target.value;

		switch (e.target.name) {
			case "fullName":
				setFullName(textValue);
				break;
			case "email":
				setEmail(textValue);
				break;
			case "role":
				setRole(textValue);
				break;
			default:
				break;
		}
	};

	return (
		<FormStyles onSubmit={createUser}>
			<h2>Add Team Member</h2>
			<div className="form-group">
				<label htmlFor="fullName">Full Name</label>
				<input
					onChange={onChange}
					type="text"
					placeholder="Full Name"
					name="fullName"
					id="fullName"
					value={fullName}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="email">Email</label>
				<input
					onChange={onChange}
					type="email"
					name="email"
					placeholder="Email"
					id="email"
					value={email}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="email">Role</label>
				<input
					onChange={onChange}
					type="role"
					name="role"
					placeholder="Role"
					id="role"
					value={role}
				/>
			</div>
			<input type="submit" value="Add Member" />
		</FormStyles>
	);
};

export default Form;
