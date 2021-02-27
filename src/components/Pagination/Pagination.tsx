import * as React from "react";
import styled from "styled-components";
import theme from "../../theme/theme";

const PaginationContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const PaginationButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  background-color: transparent;
  font-weight: 500;
  color: ${theme.colors.primary.main};
  font-size: 1.3rem;
  cursor: pointer;
`;

const PageNumber = styled.span<{ active?: boolean }>`
  padding: 5px 10px;
  border: 1px solid ${theme.colors.primary.main};
  margin: 0 5px;
  text-decoration: ${(props) => (props.active ? "underline" : "none")};
  font-weight: ${(props) => (props.active ? "bold" : "regular")};
  cursor: pointer;
`;

interface Props {
  maxPage: number;
  current: number;
  onSelect: (x: number) => void;
}

const comp = ({ maxPage, current, onSelect }: Props) => {
  const paginationNumbers: number[] = [];
  for (
    let i = Math.max(current - 3, 1);
    i <= Math.min(current + 3, maxPage);
    i++
  ) {
    paginationNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {current > 1 && (
        <PaginationButton onClick={() => onSelect(current - 1)}>
          &lt;
        </PaginationButton>
      )}
      {paginationNumbers.map((number) => (
        <PageNumber
          active={number === current}
          onClick={() => onSelect(number)}
        >
          {number}
        </PageNumber>
      ))}
      {current < maxPage && (
        <PaginationButton onClick={() => onSelect(current - 1)}>
          &gt;
        </PaginationButton>
      )}
    </PaginationContainer>
  );
};

export default comp;
