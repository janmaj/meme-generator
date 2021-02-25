import * as React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";

import Modal from "../../components/Modal/Modal";
import Spinner from "../../components/Spinner/Spinner";

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
  imageUrl: string;
  imageAlt: string;
  open: boolean;
  onClose: () => void;
  onSave?: () => void | Promise<void>;
  loading?: boolean;
  saved?: boolean;
}

const ResultModal = ({
  imageUrl,
  open,
  onClose,
  imageAlt,
  onSave,
  loading,
  saved,
}: Props) => {
  return (
    <>
      <Modal open={open} onClose={onClose} data-testid="result-modal">
        <Header>Your meme is ready</Header>
        <Img src={imageUrl} alt={imageAlt} />
        <ButtonContainer>
          <Button onClick={onClose}>Discard</Button>
          <Button onClick={onSave} disabled={saved || loading}>
            {loading ? <Spinner color="#b67929" size={30} /> : "Save"}
          </Button>
        </ButtonContainer>
      </Modal>
    </>
  );
};

export default ResultModal;
