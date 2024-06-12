import './App.css';
import { getCurrentWeather, cityList } from './getweather';
import updateClock from './clock';
import convertTime from './timeConverter';

let town = undefined;
let weather = await getCurrentWeather(town);

const updateWeather = () => {
  
};

setInterval(updateClock, 1000);

cityList.forEach((cityList, index, arr) => {
  arr[index] = <option value={cityList} />
});

function App() {
  return (
    <div className="App">
      <div className='weather-container'>
        <div className='container-header'>
          <h2 className='cityName'>City Name: 
          <input className='citySelector' list='cities'/>
            <datalist id='cities'>
              {cityList}
            </datalist>
          </h2>
          <button className='refresh' onClick={updateWeather}>Update</button>
        </div>

        <div className='head-info'>
          <p id='day'>Day: </p>
          <p>{(weather.weather[0].description).toUpperCase()}</p>
        </div>

        <div className='mid-info'>
          <p>Temperature: {Math.floor(weather.main.temp)} °C</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
        
        <div className='bottom-info'>
          <p>Sunrise: {convertTime(weather.sys.sunrise)} {weather.sys.sunrise}</p>
          <p>Sunset: {convertTime(weather.sys.sunset)} {weather.sys.sunset}</p>
        </div>
        
      </div>
    </div>
  );
}

export default App;
