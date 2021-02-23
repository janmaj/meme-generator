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
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

interface Props {
  open: boolean;
  onClose: () => void;
}

const ConfirmationDialog = ({ open, onClose }: Props) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Header>Do you want to use this template?</Header>
      <Img src="https://i.imgflip.com/1bij.jpg" />
      <ButtonContainer>
        <Button color="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button>Let's go!</Button>
      </ButtonContainer>
    </Modal>
  );
};

export default ConfirmationDialog;
