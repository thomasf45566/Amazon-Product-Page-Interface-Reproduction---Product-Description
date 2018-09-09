import React from 'react';
import { connect } from "react-redux";
import { YellowStar, WhiteStar, Div, Name, Price, Para, List, Op, OneLine, Link, Box, BoxText, Bar, Row, Strong, UL } from '../styles/Description';

const mapStateToProps = state => {
  return state;
};

class ConnectedDescription extends React.Component {
  constructor() {
    super();
    this.state = {
      showFull: false
    };
    this.showMore = this.showMore.bind(this);
    this.showLess = this.showLess.bind(this);
  }
  mouseOver() {
    document.getElementById('box').style.display = 'block';
  }
  
  mouseOut() {
    document.getElementById('box').style.display = 'none';
  }
  
  calculateStars(star1, star2, star3, star4, star5) {
    let stars = star1 + 2 * star2 + 3 * star3 + 4 * star4 + 5 * star5;
    return stars / (star1 + star2 + star3 + star4 + star5);
  }
  
  renderStars(stars) {
    stars = Math.round(stars);
    const arr = [];
    for (let i = 0; i < stars; i++) {
      arr.push(<YellowStar></YellowStar>);
    }
    for (let i = 0; i < 5 - stars; i++) {
      arr.push(<WhiteStar></WhiteStar>);
    }
    return arr;
  }
  
  showMore() {
    this.setState({showFull: true});
    document.getElementById('desc').style.height = 'auto';
  }
  
  showLess() {
    this.setState({showFull: false});
    document.getElementById('desc').style.height = '105px';
  }
  
  render() {
    const { brand, name, star1, star2, star3, star4, star5, reviews, questions, price, color, size, weight, text } = this.props;
    const stars = this.calculateStars(star1, star2, star3, star4, star5);
    return (
      <Div>
        <Para> <Link href = '#'> {brand} </Link></Para>
        <Name> {name} </Name>
        <OneLine onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}> {this.renderStars(stars)} &#x25BE; <Para><Link href = '#'> {reviews.toLocaleString()} customer reviews </Link> | <Link href = '#'>{questions.toLocaleString()} anwsered questions </Link> </Para></OneLine>
        <Box id="box" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
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
        {text.split('. ').map(line => (
          <List>{line}</List>
        ))}
        </UL>
        {text.split('. ').length > 7 && !this.state.showFull && <Link href="#" onClick={this.showMore}>&#x2304; Show more </Link>}
        {this.state.showFull && <Link href="#" onClick={this.showLess}>&#x2303; Show less </Link>}
      </Div>
    );
  }
}

const Description = connect(mapStateToProps)(ConnectedDescription);

export default Description;