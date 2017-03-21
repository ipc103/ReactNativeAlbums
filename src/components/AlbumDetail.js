import React from 'react'
import { Text } from 'react-native'

import Card from './Card'

export default ({album}) => (
  <Card>
    <Text>{ album.title }</Text>
  </Card>
)
