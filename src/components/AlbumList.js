import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { fetchAlbums} from '../adapters'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {

  state = {albums: []}

  componentDidMount(){
    fetchAlbums()
      .then(albums => this.setState({albums: albums}))
  }

  renderAlbums(){
    return this.state.albums.map((album, i) => < AlbumDetail key={i} album={album}/>)
  }

  render(){
    return(
      <View>
        <Text>Album List!</Text>
        { this.renderAlbums() }
      </View>
    )
  }
}

export default AlbumList
