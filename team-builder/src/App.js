import React, { useState, useEffect } from "react";
import axios from "axios";

import Form from "./components/Form";
import MembersList from './MembersList'

import {ContentContainer} from './styles/App.styles'

function App() {
	const [members, setMembers] = useState([]);

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
			const mappedMembers = res.data.map(({ id, name, email }) => {
				return { id, name, email };
			});

			setMembers(mappedMembers);
		});
	});

	return (
		<>
			<h1>Team Member Builder</h1>

			<ContentContainer>
				<MembersList setMembers={setMembers} members={members} />
				<Form />
			</ContentContainer>
		</>
	);
}

export default App;
