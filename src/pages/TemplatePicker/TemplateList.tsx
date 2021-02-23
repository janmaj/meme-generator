import * as React from "react";
import styled from "styled-components";

import TemplateTile from "./TemplateTile";

const TemplateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
`;

interface Props {}

const TemplateList = (props: Props) => {
  return (
    <TemplateContainer>
      <TemplateTile imageUrl="https://i.imgflip.com/1bij.jpg" />
      <TemplateTile imageUrl="https://i.imgflip.com/26am.jpg" />
      <TemplateTile imageUrl="https://i.imgflip.com/1bij.jpg" />
      <TemplateTile imageUrl="https://i.imgflip.com/26am.jpg" />
      <TemplateTile imageUrl="https://i.imgflip.com/1bij.jpg" />
      <TemplateTile imageUrl="https://i.imgflip.com/26am.jpg" />
      <TemplateTile imageUrl="https://i.imgflip.com/1bij.jpg" />
      <TemplateTile imageUrl="https://i.imgflip.com/26am.jpg" />
    </TemplateContainer>
  );
};

export default TemplateList;
