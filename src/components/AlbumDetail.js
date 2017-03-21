import React from 'react'
import { Text } from 'react-native'

import Card from './Card'
import CardSection from './CardSection'

export default ({album}) => (
  <Card>
    <CardSection>
      <Text>{ album.title }</Text>
    </CardSection>
  </Card>
)
