import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const handleLogin = async (username, password, onSuccess, onError) => {
  try {
    const response = await axios.post("https://znservis.ba/app_login.php", {
      user_name: username,
      password: password,
    });

    if (response.data.status === "success") {
      // Sačuvaj token ili korisničke podatke
      await AsyncStorage.setItem("userToken", "dummy-token");
      onSuccess(response.data.message);
    } else {
      onError(response.data.message);
    }
  } catch (error) {
    console.error("Login error:", error);
    onError("Something went wrong. Please try again.");
  }
};
