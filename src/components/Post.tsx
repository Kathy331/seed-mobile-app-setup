import { Heart, MessageSquare } from '@tamagui/lucide-icons';
import { router } from 'expo-router';
import { QueryDocumentSnapshot } from 'firebase/firestore/lite';
import { Alert } from 'react-native';
import { Button, Paragraph, YStack, Image, XStack, View } from 'tamagui';

//different Props
type Props = {
    marginBottom: number;
    isLiked: boolean;
    post: QueryDocumentSnapshot;
};

//receive the post from the PostList component
export function Post(props: Props) {
    const post = props.post;

    return (
         //need a key for array
         //don't forget to import Image
         //button with a heart--> <Button><Heart/></Button>
        <YStack key={post.id} gap={5}>

          <View style={{borderRadius: 20, overflow: 'hidden'}}>
            <Image 
              width="100%" 
              aspectRatio={1} 
              source={{uri: String(post.data().imageUrl)}} 
            />
          </View>

          <XStack p={5} gap={10}> 

            <Button 
              padding={5}
              chromeless 
              onPress={()=> {
              Alert.alert('You liked this post');
            }}>
            <Heart/>
            </Button>


            <Button 
              padding={5}
              chromeless
              onPress={() => {
                router.navigate('/new-comment');
              }}>

            <MessageSquare/>
            </Button>

          </XStack>

          <Paragraph p={10}>{post.data().caption} </Paragraph>

        </YStack>
   
  );
}