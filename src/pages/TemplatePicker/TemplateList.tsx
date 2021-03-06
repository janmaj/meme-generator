import * as React from "react";
import styled from "styled-components";
import { Template } from "./TemplatePicker";

import TemplateTile from "./TemplateTile";

const Message = styled.p`
  text-align: center;
  font-size: 2rem;
`;

const TemplateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 0 20px;
  @media (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

interface Props {
  templates: Template[];
  onSelect?: (t: Template) => void;
}

const TemplateList = ({ templates, onSelect }: Props) => {
  return templates.length > 0 ? (
    <TemplateContainer>
      {templates.map((template) => (
        <TemplateTile
          imageUrl={template.url}
          key={template.id}
          onClick={() => onSelect?.(template)}
          imageAlt={template.name}
        />
      ))}
    </TemplateContainer>
  ) : (
    <Message>No templates available</Message>
  );
};

export default TemplateList;
