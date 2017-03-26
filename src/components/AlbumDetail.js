import React from 'react'
import { Image, Text, View, Linking } from 'react-native'

import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

export default ({album}) => (
  <Card>
    <CardSection>
      <View style={styles.imageContainer }>
        <Image style={styles.thumbnailImage} source={{uri: album.thumbnail_image}} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>{ album.title }</Text>
        <Text>{ album.artist }</Text>
      </View>
    </CardSection>

    <CardSection>
        <Image style={styles.albumImage} source={{uri: album.image}} />
    </CardSection>

    <CardSection>
      < Button buttonText="Click to Buy Album" onPress={() => Linking.openURL(album.url)}/>
    </CardSection>
  </Card>
)

const styles = {
  albumImage: {
    width: null,
    height: 300,
    flex: 1
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailImage: {
    width: 50,
    height: 50
  },
  textContainer: {
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  headerText: {
    fontSize: 18
  }
}
