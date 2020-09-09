import styled from "styled-components";

export const MemberStyles = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	max-height: 15rem;
	width: 20rem;

	margin: 0.5rem 0;
	padding: 0 2rem;
	border: 3px solid black;

	h2 {
		font-size: 1.75rem;
		text-align: center;
		span {
			font-size: 1rem;
			color: gray;
		}
	}
`;
