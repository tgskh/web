import React from "react";

function SearchBar (props) {
  const onSubmit = () => {
      const userInput = document.getElementById("userInput").value;
      userInput ? props.onSearch(userInput) : alert('Please input data');
  }

  const onChange = () => {
    const userInput = document.getElementById("userInput").value;
    props.preview(userInput);
  }
  
  return (
    <div className="searchBar">
      <input type="text"
        className="searchInput"
        placeholder='Please enter song title...'
        id="userInput"
        onChange={onChange}></input>
      <input type="submit" className="button-6" value={'SEARCH'} onClick={onSubmit}></input>
    </div>
  )
}

export default SearchBar;