import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  font-family: 'Lato';
  font-size: 13px;
  line-height: 1.2;
`;

const Title = styled.p`
  font-size: 20px;
  text-transform: capitalize;
`;

const Price = styled.a`
  margin-left: 5px;
  font-size: 18px;
  color: #cc0000;
`;

const Para = styled.p`
  display: flex;
  text-transform: capitalize;
`;

const List = styled.li`
  font-size: 13px;
`;

const Op = styled.option`
  font-size: 13px;
`;
const OneLine = styled.div`
  display: flex;
`;

const Link = styled.a`
  // vertical-align: middle;
  margin-left: 5px;
  margin-right: 5px;
  text-decoration: none;
  color: #4169E1;
`;

const Box = styled.div`
  display: none;
  position: fixed;
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  height: 180px;
  width: 250px;
`;

const BoxText = styled.p`
  vertical-align: middle;
  text-align: center;
`;

const DD = styled.dd`
  margin: 2px;
  margin-left: 10px;
  line-height: 1;
  height: 15px;
  // width: 30%;
  vertical-align: middle;
  background-color: #ffcc00;
  // background-size: ;
  // background: repeating-linear-gradient(
  //   to right,
  //   #ddd,
  //   #ddd 1px,
  //   #fff 1px,
  //   #fff 5%
  // );
`;

const Row = styled.div`
  width: 70%;
`;

const Strong = styled.strong`
  margin-right: 5px;
`;

const UL = styled.ul`
  overflow: hidden;
  height: 105px;
`;

const mouseOver = () => {
  document.getElementById('box').style.display = 'block';
}

const mouseOut = () => {
  document.getElementById('box').style.display = 'none';
}

const Description = ({ brand, name, stars, star1, star2, star3, star4, star5, reviews, questions, price, color, size, weight, text, renderStars, showMore, showLess, showFull }) => (
  <Div>
    <Para> <Link href = '#'> {brand} </Link></Para>
    <Title> {name} </Title>
    <OneLine onMouseOver={mouseOver} onMouseOut={mouseOut}> {renderStars(stars)} &#x25BE; <Para><Link href = '#'> {reviews.toLocaleString()} customer reviews </Link> | <Link href = '#'>{questions.toLocaleString()} anwsered questions </Link> </Para></OneLine>
    <Box id="box">
      <BoxText> {stars.toFixed(1)} out of 5 stars </BoxText>
      <dt>
        <OneLine><Link href="#"> 5 star </Link><Row><DD style={{width: `${Math.floor(star5 / reviews * 100)}%`}}></DD></Row>{Math.floor(star5 / reviews * 100)}%</OneLine>
        <OneLine><Link href="#"> 4 star </Link><Row><DD style={{width: `${Math.floor(star4 / reviews * 100)}%`}}></DD></Row>{Math.floor(star4 / reviews * 100)}%</OneLine>
        <OneLine><Link href="#"> 3 star </Link><Row><DD style={{width: `${Math.floor(star3 / reviews * 100)}%`}}></DD></Row>{Math.floor(star3 / reviews * 100)}%</OneLine>
        <OneLine><Link href="#"> 2 star </Link><Row><DD style={{width: `${Math.floor(star2 / reviews * 100)}%`}}></DD></Row>{Math.floor(star2 / reviews * 100)}%</OneLine>
        <OneLine><Link href="#"> 1 star </Link><Row><DD style={{width: `${Math.floor(star1 / reviews * 100)}%`}}></DD></Row>{Math.floor(star1 / reviews * 100)}%</OneLine>
      </dt>
      <Link href="#"><BoxText> see all {reviews.toLocaleString()} reviews &#x25B8;</BoxText></Link>
    </Box>
    <Para> Price: <Price>{'$' + price.toFixed(2)}</Price> </Para>
    <Para> <Strong>Color: </Strong> {color} </Para>
    <Para> <Strong>Size: </Strong> </Para>
    <select>
    {size.split(' ').map(s => (
      <Op>{s}</Op>
    ))}
    </select>
    <Para> <Strong>Weight:</Strong> {weight.toLocaleString()} lbs </Para>
    <UL id="description">
    {text.map(line => (
      <List>{line}</List>
    ))}
    </UL>
    {text.length > 7 && !showFull && <Link href="#" onClick={showMore}>&#x2304; Show more </Link>}
    {text.length > 7 && showFull && <Link href="#" onClick={showLess}>&#x2303; Show less </Link>}
  </Div>
);

export default Description;