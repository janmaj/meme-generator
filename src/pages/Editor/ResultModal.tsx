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
  max-width: 50vh;
  width: 100%;
`;

const StyledButton = styled(Button)`
  display: block;
  margin: 15px auto;
`;

interface Props {
  imageUrl: string;
  open: boolean;
  onClose: () => void;
}

const ResultModal = ({ imageUrl, open, onClose }: Props) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Header>Your meme is ready</Header>
      <Img src={imageUrl} alt="meme" />
      <a href="/">
        <StyledButton>Go back to main page</StyledButton>
      </a>
    </Modal>
  );
};

export default ResultModal;
