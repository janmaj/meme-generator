import * as React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const ContainerDiv = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const Container = ({ children, className }: Props) => {
  return <ContainerDiv className={className}>{children}</ContainerDiv>;
};

export default Container;
