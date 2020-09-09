import styled from "styled-components";

export const ContentContainer = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
`;

export const AppStyles = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap");
	font-family: "Kumbh Sans", sans-serif;

	* {
		box-sizing: border-box;
	}

	p,
	h1,
	h2 {
		margin: 0;
	}

	h1 {
		text-align: center;
		margin: 2rem 0 3rem;
	}
`;
