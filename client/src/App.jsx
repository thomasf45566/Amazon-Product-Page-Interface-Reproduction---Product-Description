import React from 'react';
import Description from './Description';
import axios from 'axios';
import styled from 'styled-components';

const WhiteStar = styled.div`
  background: url(https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/customer-reviews/RYP_mobile_spritex2-v8._V316463287_.png) no-repeat;
  width: 18.48px;
  height: 18.48px;
  background-position: -42.9px -99px;
  background-size: 73.04px 120.78px;
`;

const YellowStar = styled.div`
  background: url(https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/customer-reviews/RYP_mobile_spritex2-v8._V316463287_.png) no-repeat;
  width: 18.48px;
  height: 18.48px;
  background-position: -1.98px -99px;
  background-size: 73.04px 120.78px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      name: '',
      stars: 0,
      reviews: 0,
      questions: 0,
      price: 0,
      color: '',
      size: '',
      weight: '',
      text: '',
    };
  }

  renderStars(stars) {
    const arr = [];
    for (let i = 0; i < stars; i++) {
      arr.push(<YellowStar></YellowStar>);
    }
    for (let i = 0; i < 5 - stars; i++) {
      arr.push(<WhiteStar></WhiteStar>);
    }
    return arr;
  }

  componentDidMount() {
    axios.get('/api/description').then(data => {
      this.setState(data.data[Math.floor(Math.random() * data.data.length)]);
    });
  }

  render() {
    return (
      <div>
        <Description
          brand = {this.state.brand}
          name = {this.state.name}
          stars = {this.state.stars}
          reviews = {this.state.reviews}
          questions = {this.state.questions}
          price = {this.state.price}
          color = {this.state.color}
          size = {this.state.size}
          weight = {this.state.weight}
          text = {this.state.text}
          renderStars={this.renderStars} />
      </div>
    )
  }
}

export default App;