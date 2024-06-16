import { QueryDocumentSnapshot } from 'firebase/firestore/lite';
import { Button, Paragraph, YStack, Image } from 'tamagui';

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
        <YStack key={post.id} gap={5}>
             <Image width="100%" aspectRatio={1} source={{uri: String(post.data().imageUrl)}} />
             <Paragraph key={post.id}>{post.data().caption} </Paragraph>
            <Button>Like</Button>
        </YStack>
   
  );
}