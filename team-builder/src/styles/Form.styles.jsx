import styled from "styled-components";

const FormStyles = styled.form`
	display: flex;
	flex-direction:column;

	h2 {
		text-align:center;
	}

	row-gap: 1rem;
	.form-group {
		padding: 1rem;
		border: 2px solid black;

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
			font-weight:bold;
			border: none;
			border-radius: 10px;

			background-color: royalblue;
		}


`;

export default FormStyles;
