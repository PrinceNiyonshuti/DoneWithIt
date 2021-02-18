import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,SafeAreaView,ActivityIndicator } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Testing app not connected </Text>
      <Image source={{
        width:200,
        height:300,
        uri:"https://picsum.photos/200/300",
      }}/>

      <Text>test data now</Text>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems:"center",
    justifyContent:"center",
  },
}); 
