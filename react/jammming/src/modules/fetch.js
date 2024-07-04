const tokenGlobal = await getToken();

async function getToken () {
  const clientId = '9695df66110c4070ab27fdcb07f9d022';
  const clientSecret = 'eb859c7faacb4037977fed00a8d04b19';
  const urlToken = 'https://accounts.spotify.com/api/token';
  const headersToken = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  
  const body = new URLSearchParams({
    'grant_type': 'client_credentials',
    'client_id': clientId,
    'client_secret': clientSecret
  });

  try {
    const response = await fetch(urlToken, {
      method: 'POST',
      headers: headersToken,
      body: body
    });
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.log("Error:", error);
  }
}


async function getUserID () {
  const urlToFetch = 'https://api.spotify.com/v1/me'; 
  const headersSearch = {
    'Authorization': `Bearer ${tokenGlobal}`
  }
  try {
    const response = await fetch(urlToFetch, {
      method: 'GET',
      headers: headersSearch
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}


async function getSongs (songTitle) {
  const urlSearch = 'https://api.spotify.com/v1/search?q=';
  const trackLimit = '15';
  const options = '&type=track&limit=';
  const urlToFetch = `${urlSearch}${songTitle}${options}${trackLimit}`;
  const headersSearch = {
    'Authorization': `Bearer ${tokenGlobal}`
  }
  try {
    const response = await fetch(urlToFetch, {
      method: 'GET',
      headers: headersSearch
    });
    const data = await response.json();
    return data.tracks.items;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

async function getPlaylistId () {
  const urlToFetch = 'https://api.spotify.com/v1/users/31dipugljtp6ucegjxisbc7sjuo4/playlists';
  const headersSearch = {
    'Authorization': `Bearer ${tokenGlobal}`
  }
  try {
    const response = await fetch(urlToFetch, {
      method: 'GET',
      headers: headersSearch
    });
    const playlistId = await response.json();
    return playlistId;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

async function getPlaylistSongs () {
  const playlistId = await getPlaylistId();
  const id = "3GIJtafqlkVVSuMFaKybyU";
  const urlToFetch = `https://api.spotify.com/v1/playlists/${id}/tracks`;
  const headersSearch = {
    'Authorization': `Bearer ${tokenGlobal}`
  }
  try {
    const response = await fetch(urlToFetch, {
      method: 'GET',
      headers: headersSearch
    });
    const playlistsTracks = await response.json();
    return playlistsTracks.items;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

export  {getSongs, getPlaylistSongs};