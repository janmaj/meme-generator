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
  border: 1px solid gray;
`;

const StyledButton = styled(Button)`
  display: block;
  margin: 15px auto;
`;

interface Props {
  imageUrl: string;
  imageAlt: string;
  open: boolean;
  onClose: () => void;
  onSave?: () => void | Promise<void>;
  loading?: boolean;
}

const ResultModal = ({
  imageUrl,
  open,
  onClose,
  imageAlt,
  onSave,
  loading,
}: Props) => {
  return (
    <>
      <Modal open={open} onClose={onClose} data-testid="result-modal">
        <Header>Your meme is ready</Header>
        <Img src={imageUrl} alt={imageAlt} />
        <StyledButton onClick={onSave}>
          {loading ? <Spinner color="#b67929" size={30} /> : "Save"}
        </StyledButton>
        <a href="/">
          <StyledButton>Go back to main page</StyledButton>
        </a>
      </Modal>
    </>
  );
};

export default ResultModal;
