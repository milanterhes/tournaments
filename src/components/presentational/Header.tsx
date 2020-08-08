import React from "react";
import styled from "styled-components";
import Container from "./Container";

interface IProps {
  title: String;
  date: String;
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

const Header = ({ title, date }: IProps) => (
  <Container style={{borderTop: '6px solid #28b662'}}>
    <Title>{title}</Title>
    <Date>{date}</Date>
  </Container>
);

export default Header;
