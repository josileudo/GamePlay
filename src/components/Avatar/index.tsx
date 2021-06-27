import React from 'react';
import {View, Image} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../Background/styles';
import {theme} from '../../global/styles/theme'

interface Props {
  urlImage: string
}

export function Avatar({urlImage} : Props){

  const {secondary80, secondary100} = theme.colors

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      <Image 
        source={{uri : urlImage}}
      />
     
    </LinearGradient>
  )
}