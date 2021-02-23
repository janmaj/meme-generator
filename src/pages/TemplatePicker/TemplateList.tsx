import * as React from "react";
import styled from "styled-components";
import { Template } from "./TemplatePicker";

import TemplateTile from "./TemplateTile";

const TemplateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
`;

interface Props {
  templates: Template[];
  onSelect?: (t: Template) => void;
}

const TemplateList = ({ templates, onSelect }: Props) => {
  return (
    <TemplateContainer>
      {templates.map((template) => (
        <TemplateTile
          imageUrl={template.url}
          key={template.id}
          onClick={() => onSelect?.(template)}
        />
      ))}
    </TemplateContainer>
  );
};

export default TemplateList;
