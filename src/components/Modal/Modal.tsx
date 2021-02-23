import * as React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px 30px;
  border-radius: 30px;
`;

interface Props {
  children: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
}

const Modal = ({ children, open = true, onClose }: Props) => {
  return open ? (
    <>
      <Overlay onClick={onClose} />
      <ModalWindow>{children}</ModalWindow>
    </>
  ) : null;
};

export default Modal;