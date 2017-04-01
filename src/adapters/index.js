import { get } from './requests'
const BASE_URL = 'https://api.spotify.com/v1/albums/'

export function fetchAlbums(){
  return get(`${BASE_URL}?ids=41MnTivkwTO3UUJ8DrqEJJ,6JWc4iAiJ9FjyK0B59ABb4,6UXCm6bOO4gFlDQZV5yL37`)
    .then(formatAlbums)
}

const formatAlbums = (data) => data.albums.map(formatAlbum)

const formatAlbum = (album) => (
  {
    title: album.name,
    thumbnail_image: album.images[2].url,
    image: album.images[0].url,
    url: album.external_urls.spotify
  }
)
