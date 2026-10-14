import { View, Text,Pressable } from 'react-native'
import React from 'react'

export default function customButtonAndroid(onPress,title) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [
      {
        backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'red'
      },
      {
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
      }
    ]}>
      <Text style={{color:'white', fontSize: 16}}>{title}</Text>
    </Pressable>
  )
} 
    