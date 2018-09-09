import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { changeItem } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    changeItem: item => dispatch(changeItem(item))
  }
}
class ConnectedSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.fecthData(this.state.name);
    this.setState({ name: '' });
  }

  fecthData(name) {
    axios.get(`/api/description/${name}`).then(data => {
      data.data && this.props.changeItem(data.data);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="name" onInput={this.handleInput} value={this.state.name} />
        <button type="submit"> Search </button>
      </form>
    );
  }
}

const Search = connect(null, mapDispatchToProps)(ConnectedSearch);

export default Search;