import * as React from "react";
import styled from "styled-components";

const StyledSnackbar = styled.div<{ error?: boolean }>`
  background-color: ${(props) => (props.error ? "#e74c3c" : "#00224F")};
  font-size: 1.25rem;
  padding: 10px 10px;
  min-width: 100px;
  position: fixed;
  bottom: 20px;
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
