const BASE_URL = 'https://rallycoding.herokuapp.com/api'

function get (url)  {
  return fetch(url).then(res => res.json())
}

export function fetchAlbums(){
  return get(`${BASE_URL}/music_albums`)
}
