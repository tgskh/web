import React from "react";

function SearchBar (props) {
  const onSubmit = () => {
      const userInput = document.getElementById("userInput").value;
      userInput ? props.onSearch(userInput) : alert('Please input data');
  }
  
  return (
    <div className="searchBar">
      <input type="text" className="searchInput" placeholder='Please enter song title...' id="userInput"></input>
      <input type="submit" className="button-6" value={'SEARCH'} onClick={onSubmit}></input>
    </div>
  )
}

export default SearchBar;