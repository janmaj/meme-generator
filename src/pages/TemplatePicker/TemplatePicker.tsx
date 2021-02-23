import * as React from "react";
import styled from "styled-components";

import Container from "../../components/Container/Container";
import TemplateList from "./TemplateList";
import ConfirmationDialog from "./ConfirmationDialog";
import Spinner from "../../components/Spinner/Spinner";
import { fetchAll } from "../../api";

export interface Template {
  id?: number;
  name: string;
  url: string;
}

interface Props {}

const Title = styled.h1`
  text-align: center;
  font-family: "Titillium Web", sans-serif;
  font-size: 4rem;
  margin: 20px;
`;

const TemplatePicker = (props: Props) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [templates, setTemplates] = React.useState<Template[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchTemplates = async () => {
      setLoading(true);
      const fetchedTemplates = await fetchAll();
      console.log(fetchedTemplates);

      setTemplates(fetchedTemplates);
      setLoading(false);
    };

    fetchTemplates();
  }, []);

  return (
    <Container>
      <Title>Pick a template</Title>
      {loading ? (
        <Spinner size={200} />
      ) : (
        <TemplateList templates={templates} />
      )}
      <ConfirmationDialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </Container>
  );
};

export default TemplatePicker;
