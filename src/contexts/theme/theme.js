import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export const useTheme = () => React.useContext(ThemeContext);

const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState("light");

  useEffect(() => {
    const getColorScheme = async () => {
      try {
        const savedScheme = await AsyncStorage.getItem("colorScheme");
        if (savedScheme) {
          setColorScheme(savedScheme);
        }
      } catch (error) {
        console.log("Error loading color scheme:", error);
      }
    };
    getColorScheme();
  }, []);

  const toggleColorScheme = async () => {
    const newScheme = colorScheme === "light" ? "dark" : "light";
    setColorScheme(newScheme);
    await AsyncStorage.setItem("colorScheme", newScheme);
  };

  return { colorScheme, toggleColorScheme };
};

export { useColorScheme };
