import * as React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
	from {
		transform: rotate(0);
	}

	to{
		transform: rotate(360deg);
	}
`;

const SpinnerElement = styled.div<{ size?: number }>`
  width: ${(props) => props.size + "px" || "50px"};
  height: ${(props) => props.size + "px" || "50px"};
  border-radius: 999px;
  border: ${(props) => (props.size || 50) / 20 + "px"} solid #264b77;
  border-bottom-color: transparent;
  animation: ${spin} 1s linear infinite;
`;

interface Props {
  size?: number;
}

const Spinner = ({ size }: Props) => {
  return <SpinnerElement size={size} />;
};

export default Spinner;
