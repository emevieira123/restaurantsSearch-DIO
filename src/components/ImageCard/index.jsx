import React from 'react'
import styled from 'styled-components';

const Card = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  display: flex;
  justify-content: center;
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #fff;
  font-size: 16px;
  margin-top: 5px;
  margin-left: 2px;
`;

const ImageCard = ({ photo, title }) => (
  <Card photo={photo}>
    <Title>{title}</Title>
  </Card>);

export default ImageCard;
