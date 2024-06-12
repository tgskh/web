const apiKey = '6a2da4b136b21ac640f2e167d55d132d';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';

const cityList = [
  'Irpin', 
  'Bila Tserkva', 
  'Kyiv', 
  'London', 
  'New York', 
  'Misto Uhilyantiv'
];

const location = {
  irpin: ['Irpin', 50.51, 30.23],
  bilaTserkva: ['Bila Tserkva', 49.79, 30.12],
  kyiv: ['Kyiv', 50.45, 30.52],
  london: ['London', 51.50, -0.12],
  newYork: ['New York', 40.70, -74.01],
  krakow: ['Misto Uhilyantiv', 50.06, 19.94]
};

const getCurrentWeather = async (town) => {
  const lat = location.irpin[1];
  const lon = location.irpin[2];
  const urltoFetch = `${baseUrl}lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  try {
    const result = await fetch(urltoFetch, {method: 'GET'});
    const weather = await result.json();
    return weather;
  } catch(e) {
    console.log(e);
  }
}



export {cityList, getCurrentWeather};

