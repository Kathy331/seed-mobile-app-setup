import { Heart, MessageSquare } from '@tamagui/lucide-icons';
import { QueryDocumentSnapshot } from 'firebase/firestore/lite';
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
        <YStack key={post.id} gap={10}>
            <Image width="100%" aspectRatio={1} source={{uri: String(post.data().imageUrl)}} />

            <XStack p={10} gap={20}> 
              <Heart/>
              <MessageSquare/>
            </XStack>

            <Paragraph p={10}>{post.data().caption} </Paragraph>
            <Button>Like</Button>

        </YStack>
   
  );
}