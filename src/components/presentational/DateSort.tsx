import React from "react";
import styled from "styled-components";

interface ISort {
  desc: Boolean;
  setSort(): void;
}

const DateSortContainer = styled.div`
  background: #ffffff;
  border: 1px solid #bdc3c7;
  box-sizing: border-box;
  border-radius: 2px;
  display: inline-flex;
  padding: 5px 8px 5px 8px;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  span {
    margin-right: 4px;
  }
  ${({ desc }: Pick<ISort, "desc">) =>
    !desc
      ? `
  svg {
    transform: rotate(180deg) translate(0, -50%);
  }`
      : ""}
`;

const DateSort = ({ desc, setSort }: ISort) => (
  <DateSortContainer desc={desc} onClick={setSort}>
    <span>Date</span>
    <svg
      width="11"
      height="9"
      viewBox="0 0 11 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.5 0L10.2631 3.75H0.73686L5.5 0Z" fill="#333333" />
    </svg>
  </DateSortContainer>
);

export default DateSort;
