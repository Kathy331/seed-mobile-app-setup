import { Stack } from 'expo-router';
import { ScrollView, View } from 'tamagui'; // Use View from tamagui
import React from 'react';
import { PostList } from '../components/PostList';
import Navbar from '../components/Navbar';

export default function App() {
  return (
    <View flex={1} flexDirection="column" justifyContent="space-between"> 
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />

      <ScrollView flex={1}> 
        <PostList />
      </ScrollView>

      <Navbar /> 
    </View>
  );
}