import { ScrollView } from 'tamagui';
import { PostList } from '../components/PostList';
import { Stack } from 'expo-router';

//index means home page
export default function App() {
  
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Home',
        }}
      />

      <ScrollView flex={1}>
        <PostList />
      </ScrollView>

    </>
    
  );
}
