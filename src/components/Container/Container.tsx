import * as React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
}

const ContainerDiv = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const Container = ({ children }: Props) => {
  return <ContainerDiv>{children}</ContainerDiv>;
};

export default Container;
