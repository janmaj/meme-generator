import * as React from "react";
import styled, { css } from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.25rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0px;
  }
`;

const Input = styled.input<{ error?: boolean }>`
  font-size: 1.25rem;
  padding: 5px 10px;
  border-radius: 8px;
  border-width: 1px;
  ${(props) =>
    props.error &&
    css`
      border-color: red;
      border-width: 2px;
    `}
`;

interface Props {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  error?: boolean;
  value?: string;
  className?: string;
}

const InputField = ({ value, onChange, error, label, className }: Props) => {
  return (
    <Label className={className}>
      {label}
      <Input error={error} value={value} onChange={(e) => onChange?.(e)} />
    </Label>
  );
};

export default InputField;
