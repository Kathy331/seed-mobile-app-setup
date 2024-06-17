import { router, Stack } from 'expo-router';
import { Paragraph, YStack } from 'tamagui';

//<Button onPress={() => router.navigate('/')}>Go back</Button>
//<Button onPress={() => router.push('/')}>Go back</Button>
export default function NewCommentForm() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'New Comment',
          headerBackTitleVisible: false,
        }}
      />

      <YStack p={50}>
        <Paragraph>New Comments here...</Paragraph>
      </YStack>
    </>
  );
}
