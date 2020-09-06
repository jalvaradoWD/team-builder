import React, { useState, useEffect } from "react";
import axios from "axios";

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

			<div>
				<section>
					{members
						? members.map(({ name, email, id }) => {
								return (
									<div>
										<h2>{name}</h2>
										<p>{email}</p>
										<p>{id}</p>
									</div>
								);
						  })
						: null}
				</section>
				<form>
					<h2>Add Team Member</h2>
					<input type="text" placeholder="Add team members" />
				</form>
			</div>
		</>
	);
}

export default App;
