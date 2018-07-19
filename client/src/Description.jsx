import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  font-family: 'Lato';
  text-transform: capitalize;
`;

const Title = styled.p`
  font-size: 20px;
`;

const Price = styled.a`
  font-size: 18px;
  color: red;
`;

const Para = styled.p`
  display: flex;
  font-size: 13px;
`;

const List = styled.li`
  font-size: 13px;
`;

const Op = styled.option`
  font-size: 13px;
`;
const Stars = styled.div`
  display: flex;
`;

const Description = ({ brand, name, stars, reviews, questions, price, color, size, weight, text, renderStars }) => (
  <Div>
    <Para> {brand} </Para>
    <Title> {name} </Title>
    <Stars>{renderStars(stars)} &#x25BC; <Para> {reviews.toLocaleString()} customer reviews | {questions.toLocaleString()} anwsered questions </Para></Stars>
    <Para> Price: <Price>{'$' + price.toFixed(2)}</Price> </Para>
    <Para> <strong>Color: </strong> {color} </Para>
    <Para> <strong>Size: </strong>
    <select>
    {size.split(' ').map(s => (
      <Op>{s}</Op>
    ))}
    </select>
    </Para>
    <Para> <strong>Weight:</strong> {weight} lbs </Para>
    <ul>
    {text.split('. ').map(line => (
      <List>{line}</List>
    ))}
    </ul>
  </Div>
);

export default Description;