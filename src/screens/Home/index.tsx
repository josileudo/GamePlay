import React from 'react'
import { View, Text } from 'react-native'

import {styles} from './styles'

export function Home(){
  return (
    <View style = {styles.container}>
      <View style = {styles.header}>

      </View>
      <Text>
        Olá, sou a tela Homes
      </Text>
    </View>
  )
}