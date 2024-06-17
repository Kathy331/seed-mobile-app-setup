import { Paragraph, YStack } from "tamagui";
import { router } from "expo-router";
import { Stack } from "expo-router";

//<Button onPress={() => router.navigate('/')}>Go back</Button>
//<Button onPress={() => router.push('/')}>Go back</Button>
export default function NewCommentForm(){
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'New Comment',
          headerBackTitleVisible: false,
        }}
      />

      <YStack p={50}>
        <Paragraph>new comment form go here..</Paragraph>
        
      </YStack>


    </>
  );
}