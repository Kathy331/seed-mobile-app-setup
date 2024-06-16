import { ScrollView } from 'tamagui';
import { PostList } from '../components/PostList';


export default function App() {
  
  return (
    ///map through the posts array and display the caption
    <ScrollView flex={1}>
      <PostList />
    </ScrollView>
  );
}
