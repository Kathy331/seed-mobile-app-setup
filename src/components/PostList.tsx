//could called "PostListView"

import { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  QueryDocumentSnapshot,
} from 'firebase/firestore/lite';
import { YStack } from 'tamagui';

import { db } from '../support/firebase';
import { Post } from './Post';

export function PostList() {
  //save it in a useState to keep track of the posts (array of posts)
  //make sure to import QueryDocumentSnapshot
  const [posts, setPosts] = useState<Array<QueryDocumentSnapshot>>([]);

  //react feature to automatically let the component to render on view
  useEffect(() => {
    const getPosts = async () => {
      const postRef = collection(db, 'posts');
      const postsSnapshot = await getDocs(postRef);

      setPosts(postsSnapshot.docs);
    };
    void getPosts();

  }, []);

  

  
  //view being displayed
  //map through the posts array and display the caption
  //individual components can be added to the y stack too <Paragraph>home</Paragraph>
  return (
    <YStack gap={10}>
      {posts.map((post) => (
        //pass information from one component to another
        //isLiked is false because the user has not liked the post yet
        <Post key={post.id} post={post} isLiked={false} />
      ))}
    </YStack>
  );

}
