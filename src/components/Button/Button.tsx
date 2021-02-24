import * as React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  padding: 10px 20px;
  min-width: 60px;
  border-radius: 10px;
  border-width: 1px;
  background-color: #264b77;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: #31629e;
  }
  &:disabled {
    background-color: #b6b6b6;
  }
  ${(props) =>
    props.color === "secondary" &&
    css`
      background-color: #723d2f;
      &:hover {
        background-color: #92422c;
      }
    `};
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
