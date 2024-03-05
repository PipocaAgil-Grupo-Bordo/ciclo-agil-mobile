import React from "react";
import { Text, StyleSheet, View } from "react-native";


const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Tela de ínicio</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});