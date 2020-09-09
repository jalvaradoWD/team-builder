import React from "react";

import { MemberStyles } from "../styles/Member.styles";

const Member = ({ member }) => {
	const { id, name, email, role } = member;
	return (
		<MemberStyles>
			<h2>
				{name} <span>{id}</span>
			</h2>
			<p>{email}</p>
			<p>{role}</p>
		</MemberStyles>
	);
};

export default Member;
