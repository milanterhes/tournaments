import React from "react";
import styled from "styled-components";
import moment from "moment";
import Container from "./Container";

export interface IProps {
  title: String;
  date?: string;
}

const Title = styled.h2`
  font-size: 21px;
  line-height: 29px;
  margin: 0;
`;

const Date = styled.p`
  font-size: 14px;
  line-height: 19px;
  margin: 0;
`;

const Header = ({ title, date }: IProps) => {
  return (
    <Container style={{ borderTop: "6px solid #28b662" }}>
      <Title>{title}</Title>
      <Date>{date ? moment(date).format("Do MMMM YYYY") : ""}</Date>
    </Container>
  );
};

export default Header;
