const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const userInput = document.getElementById('search-input');
const userOutput = document.getElementById('dataResult');

// get data from somewhere

fetch(endpoint)
  .then(result => result.json())
  .then(data => cities.push(...data));

// search cities names

function dataFilter(userData, cities) {
  return cities.filter(place => {
    const regex = new RegExp(userData, 'gi')
    return place.city.match(regex);
  });
}

// generate output 

function displayData () {
  const matchArray = dataFilter(this.value, cities);
  const html = matchArray.map(place => {
    return `
      <li class='result'>
      ${place.city}, ${place.state}, ${place.population}
      </li>`;
  }).join('');
  userOutput.innerHTML = html;
}

userInput.addEventListener('input', displayData);







