import { Stack } from 'expo-router';
import { Paragraph, YStack, ScrollView } from 'tamagui';
import { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  QueryDocumentSnapshot,
} from 'firebase/firestore/lite';

//<Button onPress={() => router.navigate('/')}>Go back</Button>
//<Button onPress={() => router.push('/')}>Go back</Button>
export default function NewCommentForm() {
  const [comments, setComments] = useState<Array<QueryDocumentSnapshot>>([]);
  return (
    <>
      <Stack.Screen
        options={{
          title: 'New Comment',
          headerBackTitleVisible: false,

        }}
      />

      <ScrollView flex={1}>
        <YStack gap={10}>
          <Paragraph>Comment</Paragraph>
          <Paragraph>Post</Paragraph>
          <Paragraph>Submit</Paragraph>
        </YStack>
      </ScrollView>

    </>
  );
}
