import styled from "styled-components";

export const MemberStyles = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	height: 15rem;
	width: 20rem;

	margin: 0.5rem 0;
	padding: 0 2rem;
	border: 8px solid crimson;
	border-radius: 10px;

	background-color: dodgerblue;

	h2 {
		font-size: 1.75rem;
		text-align: center;
		color: white;
		span {
			font-size: 1rem;
			color: black;
		}
	}

	p {
		text-align: center;
	}

	.role {
		text-decoration: underline;
	}
`;
