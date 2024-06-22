import { Alert } from 'react-native';
import { Heart, MessageSquare, Star } from '@tamagui/lucide-icons';
import { router } from 'expo-router';
import { QueryDocumentSnapshot } from 'firebase/firestore/lite';
import { Button, Image, Paragraph, View, XStack, YStack } from 'tamagui';
import { useState } from 'react';

//different Props
type Props = {

  isLiked: boolean;
  post: QueryDocumentSnapshot;
  comments: Array<QueryDocumentSnapshot>;
};

//receive the post from the PostList component
export function Post(props: Props) {
  const post = props.post;
  const [isHeartPressed, setIsHeartPressed] = useState(props.isLiked);

  return (
    //need a key for array
    //don't forget to import Image
    //button with a heart--> <Button><Heart/></Button>
    <YStack key={post.id} gap={5}>
      <View style={{ borderRadius: 20, overflow: 'hidden' }}>
        <Image
          width="100%"
          aspectRatio={1}
          source={{ uri: String(post.data().imageUrl) }}
        />
      </View>

      <XStack p={5} gap={10}>
        <Button
          padding={5}
          chromeless
          onPress={() => {
            setIsHeartPressed(!isHeartPressed);
            Alert.alert(isHeartPressed ? 'You unliked this post' : 'You liked this post');
          }}>
          <Heart 
          color = {isHeartPressed ? '#F02641' : 'black'}
          fill ={isHeartPressed ? '#F02641' : 'transparent'} />
        </Button>
        
        <Button
          padding={5}
          chromeless
          onPress={() => {
            router.navigate('/new-comment');
          }}
        >
          <MessageSquare />
        </Button>

        <Button
          padding={5}
          chromeless
          onPress={() => {
            router.navigate('/new-comment');
          }}
        >
          <Star fill={'#EFB5D5'} />
        </Button>

        <Paragraph padding={5} justifyContent='center'>🌶️</Paragraph>
      </XStack>

      <Paragraph p={10}>{post.data().caption} </Paragraph>
    </YStack>
  );
}
