import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>LISTA DE TAREFAS</Text>
      <View style={styles.viewVazia}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    marginTop:80,
    marginBottom:20,
  },
  headerText:{
    color:"#FFFFFF",
    fontSize:30,
    textAlign:"center",
    fontWeight:"bold",
  },
  viewVazia:{
    width:"50%",
    height:5,
    backgroundColor:"#635985",
    alignSelf:"center",
  },
});
