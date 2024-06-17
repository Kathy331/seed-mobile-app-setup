import { ScrollView } from 'tamagui';
import { PostList } from '../components/PostList';

//index means home page
export default function App() {
  
  return (
    ///map through the posts array and display the caption
    <ScrollView flex={1}>
      <PostList />
    </ScrollView>
  );
}
