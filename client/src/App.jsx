import React from 'react';
import Description from './Description';
import axios from 'axios';
import styled from 'styled-components';
import Search from './Search';

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
      star1: 0,
      star2: 0,
      star3: 0,
      star4: 0,
      star5: 0,
      reviews: 0,
      questions: 0,
      price: 0,
      color: '',
      size: '',
      weight: '',
      text: '',
      input: '',
      showFull: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showMore = this.showMore.bind(this);
    this.showLess = this.showLess.bind(this);
  }

  calculateStars(star1, star2, star3, star4, star5) {
    let stars = star1 + 2 * star2 + 3 * star3 + 4 * star4 + 5 * star5;
    return stars / (star1 + star2 + star3 + star4 + star5);
  }

  renderStars(stars) {
    stars = Math.floor(stars);
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
    this.fecthData('ty');
  }

  fecthData(name) {
    axios.get(`/api/description/${name}`).then(data => {
      data.data && this.setState(data.data);
      console.log(data.data);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.fecthData(this.state.input);
    this.setState({input: ''});
  }

  handleInput(e) {
    this.setState({input: e.target.value});
  }

  showMore() {
    this.setState({showFull: true});
    document.getElementById('description').style.height = 'auto';
  }
  
  showLess() {
    this.setState({showFull: false});
    document.getElementById('description').style.height = '105px';
  }
  

  render() {
    return (
      <div>
        <Search
          input={this.state.input}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit} />
        <Description
          brand = {this.state.brand}
          name = {this.state.name}
          stars = {this.calculateStars(this.state.star1, this.state.star2, this.state.star3, this.state.star4, this.state.star5)}
          star1 = {this.state.star1}
          star2 = {this.state.star2}
          star3 = {this.state.star3}
          star4 = {this.state.star4}
          star5 = {this.state.star5}
          reviews = {this.state.reviews}
          questions = {this.state.questions}
          price = {this.state.price}
          color = {this.state.color}
          size = {this.state.size}
          weight = {this.state.weight}
          text = {this.state.text.split('. ')}
          renderStars={this.renderStars}
          showMore={this.showMore}
          showLess={this.showLess}
          showFull={this.state.showFull} />
      </div>
    )
  }
}

export default App;