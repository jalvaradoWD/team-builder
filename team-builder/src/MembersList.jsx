import React from "react";

import Member from "./components/Member";

import { MembersContainer } from "./styles/MembersList.styles";

const MembersList = ({ members, setMembers }) => {
	return (
		<MembersContainer>
			{members
				? members.map((member, index) => {
						return <Member key={index} member={member} />;
				  })
				: null}
		</MembersContainer>
	);
};

export default MembersList;
