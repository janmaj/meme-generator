import * as React from "react";
import styled from "styled-components";

import theme from "../../theme/theme";

const StyledButton = styled.button`
  padding: 10px 20px;
  min-width: 60px;
  border-radius: 10px;
  border-width: 1px;
  background-color: ${theme.colors.primary.main};
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: #444;
  }
  &:disabled {
    background-color: #b6b6b6;
  }
`;

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "contained" | "outlined";
  color?: "primary" | "secondary";
  disabled?: boolean;
  className?: string;
}

const Button = ({
  children,
  onClick,
  variant,
  color,
  disabled,
  className,
}: Props) => {
  return (
    <StyledButton
      color={color}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
