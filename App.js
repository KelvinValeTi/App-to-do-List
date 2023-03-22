import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from "./src/pages/Header";
import Task from "./src/pages/Task";
import Menu from "./src/pages/Menu";

export default function App() {
  return (
    <View style={styles.container}>
      
      <Header />

      <Menu />
      
      <Task title={"Estudar JavaScript"}/>
      <Task title={"Fazer lista de compras"}/>
      <Task title={"Treinar Jiu jitsu"}/>
      
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18122B',
  },
});
