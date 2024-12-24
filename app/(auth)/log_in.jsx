import { View, Text, ScrollView, Image, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { router } from "expo-router";

import { images } from "../../constants";

import { handleLogin } from "../../lib/appwrite";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

const LoginScreen = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onLoginSuccess = (message) => {
    router.replace("/home");
  };

  const onLoginError = (message) => {
    Alert.alert("Error", message);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[150px] h-[35px]"
          />
          <Text className="text-2xl text-semibold text-white mt-10 font-psemibold ">
            Log in to ZN
          </Text>
          <FormField
            title="Username"
            value={userName}
            handleChangeText={setUserName}
            otherStyles="mt-7"
            keyboardType="User-name"
          />
          <FormField
            title="Password"
            value={password}
            handleChangeText={setPassword}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Log in"
            handlePress={() =>
              handleLogin(userName, password, onLoginSuccess, onLoginError)
            }
            containerStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
