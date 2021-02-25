import * as React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Container from "../../components/Container/Container";
import TemplateList from "./TemplateList";
import ConfirmationDialog from "./ConfirmationDialog";
import Spinner from "../../components/Spinner/Spinner";
import { fetchAllTemplates } from "../../api";
import Snackbar from "../../components/Snackbar/Snackbar";

export interface Template {
  id: number;
  name: string;
  url: string;
  boxCount?: number;
}

interface Props {
  onPick: (t: Template) => void;
}

const Title = styled.h1`
  text-align: center;
  font-family: "Titillium Web", sans-serif;
  font-size: 4rem;
  margin: 20px;

  @media (max-width: 960px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const CenteredSpinner = styled(Spinner)`
  margin: auto;
`;

const TemplatePicker = ({ onPick }: Props) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [templates, setTemplates] = React.useState<Template[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [
    selectedTemplate,
    setSelectedTemplate,
  ] = React.useState<Template | null>(null);
  const history = useHistory();

  React.useEffect(() => {
    const fetchTemplates = async () => {
      setLoading(true);
      try {
        const fetchedTemplates = await fetchAllTemplates();
        setTemplates(fetchedTemplates);
      } catch (error) {
        setSnackbarOpen(true);
      }

      setLoading(false);
    };

    fetchTemplates();
  }, []);

  const handleSelectTemplate = (template: Template) => {
    setSelectedTemplate(template);
    setModalOpen(true);
  };

  const handleConfirm = () => {
    onPick(selectedTemplate!);
    history.push("/editor");
  };

  return (
    <>
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
          onConfirm={handleConfirm}
          imageUrl={selectedTemplate?.url}
        />
      </Container>
      <Snackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        error
      >
        An error ocurred. Try again later
      </Snackbar>
    </>
  );
};

export default TemplatePicker;
