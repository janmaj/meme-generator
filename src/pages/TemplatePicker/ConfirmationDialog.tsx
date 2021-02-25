import * as React from "react";
import styled from "styled-components";

import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";

const Header = styled.p`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
`;

const Img = styled.img`
  object-fit: contain;
  max-height: 50vh;
  min-height: 10em;
  width: 100%;
  margin: auto;
  display: block;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px auto 0;
  max-width: 20em;
`;

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  imageUrl?: string;
  imageAlt?: string;
}

const ConfirmationDialog = ({
  open,
  onClose,
  imageUrl,
  onConfirm,
  imageAlt,
}: Props) => {
  return (
    <Modal open={open} onClose={onClose} data-testid="confirmation-dialog">
      <Header>Do you want to use this template?</Header>
      <Img src={imageUrl || ""} alt={imageAlt} />
      <ButtonContainer>
        <Button color="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onConfirm}>Let's go!</Button>
      </ButtonContainer>
    </Modal>
  );
};

export default ConfirmationDialog;
