import React, { useState } from "react";

import Form from "./components/Form";
import MembersList from "./MembersList";

import { ContentContainer, AppStyles } from "./styles/App.styles";

const dummyData = [
	{
		id: 0,
		name: "Jose Alvarado",
		email: "jalvarado@gmail.com",
		role: "Frontend",
	},
	{
		id: 1,
		name: "John Doe",
		email: "jdoe@gmail.com",
		role: "Backend",
	},
];

function App() {
	const [members, setMembers] = useState(dummyData);

	return (
		<AppStyles>
			<h1>Team Member Builder</h1>

			<ContentContainer>
				<MembersList members={members} />
				<Form setMembers={setMembers} members={members} />
			</ContentContainer>
		</AppStyles>
	);
}

export default App;
