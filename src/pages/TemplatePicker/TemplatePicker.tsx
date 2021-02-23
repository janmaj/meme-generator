import * as React from "react";
import styled from "styled-components";

import Container from "../../components/Container/Container";
import TemplateList from "./TemplateList";
import ConfirmationDialog from "./ConfirmationDialog";
import Spinner from "../../components/Spinner/Spinner";
import { fetchAll } from "../../api";

export interface Template {
  id: number;
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

const CenteredSpinner = styled(Spinner)`
  margin: auto;
`;

const TemplatePicker = (props: Props) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [templates, setTemplates] = React.useState<Template[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [
    selectedTemplate,
    setSelectedTemplate,
  ] = React.useState<Template | null>(null);

  React.useEffect(() => {
    const fetchTemplates = async () => {
      setLoading(true);
      const fetchedTemplates = await fetchAll();

      setTemplates(fetchedTemplates);
      setLoading(false);
    };

    fetchTemplates();
  }, []);

  const handleSelectTemplate = (template: Template) => {
    setSelectedTemplate(template);
    setModalOpen(true);
    console.log("selected");
  };

  return (
    <Container>
      <Title>Pick a template</Title>
      {loading ? (
        <CenteredSpinner size={200} />
      ) : (
        <TemplateList templates={templates} onSelect={handleSelectTemplate} />
      )}
      <ConfirmationDialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        imageUrl={selectedTemplate?.url}
      />
    </Container>
  );
};

export default TemplatePicker;
