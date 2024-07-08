import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './modules/header';
import SearchBar from './modules/search';
import {getSongs, getPlaylistSongs} from './modules/fetch';

function App() {
  const [songs, setSongs] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  async function searchAndDisplay(songTitle) {
    const results = await getSongs(songTitle);
    const playlist = await getPlaylistSongs();
    setSongs(results);
  }

  async function updatePlaylist() {
    const results = await getPlaylistSongs();
    setPlaylist(results);
  }

  useEffect(() => {
    updatePlaylist();
  }, []);

  function addSong(song) {
    const data = {
      track: {
        name: song.name,
        artists: [{name: song.artists[0].name}],
        id: song.id
      }
    }
     if (playlist.findIndex(el => el.track.id == song.id) >= 0) {
      alert('Already added');
     } else {
      console.log(data);
      setPlaylist(prevPlaylist => [...prevPlaylist, data]);  
     }
  }

  function removeSong(song) {
    setPlaylist(prevPlaylist => prevPlaylist.filter(el => el.track.id !== song.track.id))
  }

  return (
    <div className="App">
      <div className='container'>
        <Header />
        <SearchBar onSearch={searchAndDisplay} preview={searchAndDisplay}/>
        <div className="main">
          <div className="songContainer">
            <h2>Results</h2>
              <ul className='songsList'>
              {songs.map((song) =>
              <li key={song.id} className='song'>
                <div>
                  <h3>{song.name}</h3>
                  <p className='artist'>{song.artists[0].name}</p>
                </div>
                <div>
                  <button className='addPlaylist' onClick={()=> addSong(song)}>Add</button>
                </div>
              </li>
              )}</ul>
          </div> 
          <div className="songContainer">
            <h2>Playlist</h2>
            <ul className='songsList'> 
              {playlist.map((song) => 
                <li key={song.track.id} className='song'>
                <div>
                  <h3>{song.track.name}</h3>
                  <p className='artist'>{song.track.artists[0].name}</p>
                </div>
                <div>
                  <button className='addPlaylist' onClick={() => removeSong(song)}>Rem</button>
                </div>
              </li>
              )}
            </ul>
          </div>
      </div>

      </div>
    </div>
  );
}

export default App;
