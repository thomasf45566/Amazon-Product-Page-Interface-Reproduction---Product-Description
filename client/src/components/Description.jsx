import React from 'react';
import { Div, Title, Price, Para, List, Op, OneLine, Link, Box, BoxText, Bar, Row, Strong, UL } from '../styles/Description';

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
    <Box id="box" onMouseOver={mouseOver} onMouseOut={mouseOut}>
      <BoxText> {stars.toFixed(1)} out of 5 stars </BoxText>
      <dt>
        <OneLine><Link href="#"> 5 star </Link><Row><div style={{width: `${Math.floor(star5 / reviews * 100)}%`}}><Bar></Bar></div></Row>{Math.floor(star5 / reviews * 100)}%</OneLine>
        <OneLine><Link href="#"> 4 star </Link><Row><div style={{width: `${Math.floor(star4 / reviews * 100)}%`}}><Bar></Bar></div></Row>{Math.floor(star4 / reviews * 100)}%</OneLine>
        <OneLine><Link href="#"> 3 star </Link><Row><div style={{width: `${Math.floor(star3 / reviews * 100)}%`}}><Bar></Bar></div></Row>{Math.floor(star3 / reviews * 100)}%</OneLine>
        <OneLine><Link href="#"> 2 star </Link><Row><div style={{width: `${Math.floor(star2 / reviews * 100)}%`}}><Bar></Bar></div></Row>{Math.floor(star2 / reviews * 100)}%</OneLine>
        <OneLine><Link href="#"> 1 star </Link><Row><div style={{width: `${Math.floor(star1 / reviews * 100)}%`}}><Bar></Bar></div></Row>{Math.floor(star1 / reviews * 100)}%</OneLine>
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
    <UL id="desc">
    {text.map(line => (
      <List>{line}</List>
    ))}
    </UL>
    {text.length > 7 && !showFull && <Link href="#" onClick={showMore}>&#x2304; Show more </Link>}
    {text.length > 7 && showFull && <Link href="#" onClick={showLess}>&#x2303; Show less </Link>}
  </Div>
);

export default Description;