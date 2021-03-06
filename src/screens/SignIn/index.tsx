import React, {useState} from "react"
import { 
  View, 
  Text, 
  Image,
  StatusBar 
} from 'react-native'

import {ButtonIcon} from "../../components/ButtonIcon"

import IllustrationImg from "../../assets/illustration.png"
import {styles} from "./styles"

export const Signin: React.FC = () => {

  return (
    <View style = {styles.container}>
      
        <Image 
        source = {IllustrationImg}
        style = {styles.image}
        resizeMode = "stretch" 
      />

      <View style= {styles.content}>
        <Text style = {styles.title}>
          Conecte-se {`\n`} 
          e oganize suas{`\n`} 
          jogatinas
        </Text>
        <Text style = {styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon 
          title=" Entrar com Discord"
          activeOpacity = {0.8}
        />
      </View>
    </View>
  )
}