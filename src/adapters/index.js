import { get } from './requests'
const BASE_URL = 'https://rallycoding.herokuapp.com/api'

export function fetchAlbums(){
  return get(`${BASE_URL}/music_albums`)
}
