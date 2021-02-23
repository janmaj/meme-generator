import * as React from "react";
import styled from "styled-components";

const Tile = styled.article`
  aspect-ratio: 1/1;
  box-shadow: 5px 5px 5px lightgray;
  border: 1px solid black;
  background-color: #f1f1f1;
  transition: all 0.4s ease;
  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 10px 10px 10px lightgray;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

interface Props {
  imageUrl: string;
}

const TemplateTile = ({ imageUrl }: Props) => {
  return (
    <Tile>
      <Img alt="meme template" src={imageUrl} />
    </Tile>
  );
};

export default TemplateTile;
