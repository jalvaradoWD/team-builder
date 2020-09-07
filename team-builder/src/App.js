import React, { useState, useEffect } from "react";
import axios from "axios";

import Form from "./Form";

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
				<section>
					<Form />
				</section>
			</div>
		</>
	);
}

export default App;
