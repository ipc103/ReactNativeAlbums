import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default ({headerText}) => {
  return(
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>
        {headerText}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2
  }
})
