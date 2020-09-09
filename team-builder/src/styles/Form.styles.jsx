import styled from "styled-components";

const FormStyles = styled.form`
	h2 {
		text-align: center;
	}

	.form-group {
		padding: 1rem;

		label {
			display: block;
			padding-bottom: 0.5rem;

			font-size: 1.25rem;
		}

		input {
			width: 100%;
			padding: 0.75rem;
			font-size: 1.05rem;
		}
	}

	input[type="submit"] {
		color: white;
		padding: 0.5rem;
		font-size: 1.15rem;
		font-weight: bold;
		border: none;
		border-radius: 10px;

		background-color: royalblue;
	}

	display: flex;
	flex-direction: column;
	background-color: lightgrey;
	row-gap: 1rem;
	border-radius: 10px;
`;

export default FormStyles;
