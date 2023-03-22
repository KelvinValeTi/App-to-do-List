import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function Menu() {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.btn}>
            <Ionicons name="add-circle" size={35} color="#FFFFFF" />
            <Text style={styles.textBtn}>Nova Tarefa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
            <Ionicons name="warning" size={35} color="#FFFFFF" />
            <Text style={styles.textBtn}>Pendencias</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btn}>
            <Ionicons name="checkmark-circle" size={35} color="#FFFFFF" />
            <Text style={styles.textBtn}>Concluídas</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",

    marginTop:15,
    marginBottom:20,

    paddingLeft:30,
    paddingRight:30,

  },

  btn:{
    alignItems:"center",
  },
  
  textBtn:{
    color: "#FFFFFF",
    fontSize:14,
    fontWeight:"bold",
    textTransform:"uppercase",
    
    marginTop:5,
  },
});
