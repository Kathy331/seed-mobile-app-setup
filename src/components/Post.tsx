import { Heart, MessageSquare } from '@tamagui/lucide-icons';
import { router } from 'expo-router';
import { QueryDocumentSnapshot } from 'firebase/firestore/lite';
import { Alert } from 'react-native';
import { Button, Paragraph, YStack, Image, XStack } from 'tamagui';

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
            <Image 
              
              width="100%" 
              aspectRatio={1} 
              source={{uri: String(post.data().imageUrl)}} 
            />

            <XStack p={10} gap={1}> 

              <Button 
                chromeless 
                onPress={()=> {
                Alert.alert('You liked this post');
              }}>
              <Heart/>
              </Button>

              <Button 
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