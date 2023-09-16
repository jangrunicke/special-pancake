import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const Index = () => {
  return (
    <SafeAreaView className="bg-[#1F104A]">
      {/* Changes page title visible on the header */}
      <Stack.Screen options={{ title: "Home Page" }} />
      <View className="h-full w-full p-4">
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default Index;
