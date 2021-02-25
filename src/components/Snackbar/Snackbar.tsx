import * as React from "react";
import styled from "styled-components";

const StyledSnackbar = styled.div`
  background-color: #e74c3c;
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
`;

interface Props {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const Snackbar = ({ children, open, onClose }: Props) => {
  React.useEffect(() => {
    if (open) {
      setTimeout(() => {
        onClose();
      }, 5000);
    }
  }, [onClose, open]);

  return open ? <StyledSnackbar>{children}</StyledSnackbar> : null;
};

export default Snackbar;
