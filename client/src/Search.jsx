import React from 'react';

const Search = ({ input, handleInput, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <input onInput={handleInput} value={input} />
    <button type="submit"> Search </button>
  </form>
);

export default Search;