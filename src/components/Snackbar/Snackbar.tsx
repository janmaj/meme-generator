import * as React from "react";
import styled from "styled-components";

const StyledSnackbar = styled.div<{ error?: boolean }>`
  background-color: ${(props) => (props.error ? "#e74c3c" : "#5d80b6")};
  font-size: 1.25rem;
  padding: 20px 20px;
  min-width: 100px;
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  border-radius: 8px;
  font-weight: bold;
  box-shadow: 3px 3px 5px black;
`;

interface Props {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  error?: boolean;
}

const Snackbar = ({ children, open, onClose, error }: Props) => {
  React.useEffect(() => {
    if (open) {
      setTimeout(() => {
        onClose();
      }, 5000);
    }
  }, [onClose, open]);

  return open ? (
    <StyledSnackbar error={error}>{children}</StyledSnackbar>
  ) : null;
};

export default Snackbar;
