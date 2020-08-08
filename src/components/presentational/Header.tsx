import React from 'react';
import styled from 'styled-components';

interface IProps {
    title: String,
    date: String
}

const HeaderContainer = styled.div`
    width: 500px;
    background-color: #FFFFFF;
    border-radius: 2px;
    border-top: 6px solid #28B662;
    padding: 16px;
`

const Title = styled.h2`
    font-size: 21px;
    line-height: 29px;
    margin: 0;
`

const Date = styled.p`
    font-size: 14px;
    line-height: 19px;
    margin: 0;
`

const Header = ({title, date}: IProps) => (
    <HeaderContainer>
        <Title>{title}</Title>
        <Date>{date}</Date>
    </HeaderContainer>
);

export default Header;