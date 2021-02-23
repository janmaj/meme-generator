import * as React from "react";
import styled from "styled-components";

import Container from "../../components/Container/Container";
import TemplateList from "./TemplateList";
import ConfirmationDialog from "./ConfirmationDialog";

interface Props {}

const Title = styled.h1`
  text-align: center;
  font-family: "Titillium Web", sans-serif;
  font-size: 4rem;
  margin: 20px;
`;

const TemplatePicker = (props: Props) => {
  const [modalOpen, setModalOpen] = React.useState(true);

  return (
    <Container>
      <Title>Pick a template</Title>
      <TemplateList />
      <ConfirmationDialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </Container>
  );
};

export default TemplatePicker;
