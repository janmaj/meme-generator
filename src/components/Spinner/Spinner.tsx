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

const SpinnerElement = styled.div<{ size?: number; color?: string }>`
  width: ${(props) => props.size + "px" || "50px"};
  height: ${(props) => props.size + "px" || "50px"};
  border-radius: 999px;
  border-width: ${(props) => (props.size || 50) / 20 + "px"};
  border-style: solid;
  border-color: ${(props) => props.color || "#264b77"};
  border-bottom-color: transparent;
  animation: ${spin} 1s linear infinite;
`;

interface Props {
  size?: number;
  className?: string;
  color?: string;
}

const Spinner = ({ size, className, color }: Props) => {
  return (
    <SpinnerElement
      data-testid="spinner"
      size={size}
      className={className}
      color={color}
    />
  );
};

export default Spinner;
