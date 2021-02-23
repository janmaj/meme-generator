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
}

const TemplateList = ({ templates }: Props) => {
  return (
    <TemplateContainer>
      {templates.map((template) => (
        <TemplateTile imageUrl={template.url} />
      ))}
    </TemplateContainer>
  );
};

export default TemplateList;
