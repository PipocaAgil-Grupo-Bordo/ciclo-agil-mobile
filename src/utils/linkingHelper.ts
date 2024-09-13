import { Linking } from "react-native";

export async function handleLinking(url: string) {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    alert(`Don't know how to open this URL`);
  }
}
