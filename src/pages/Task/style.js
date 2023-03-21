import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        width: "90%",
        backgroundColor: '#635985',
        alignSelf:"center",
        padding:10,
        borderRadius:10,
        marginTop:10,
    },

    containerHeader: {  
      flexDirection:"row",
      justifyContent:"space-between",
    },

    title:{
      width:"60%",
      color:"#FFFFFF",
      fontSize:20,
      fontWeight:"bold",
      textAlign:"left",
    },
    titleChecked:{
        width:"60%",
        color:"#443C68",
        fontSize:20,
        fontWeight:"bold",
        textAlign:"left",
        textDecorationLine:"line-through",
    },

    iconsView:{
      width:"30%",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
    },

    textDescription:{
        color:"#FFFFFF",
        fontSize:16,
        textAlign:"left",

        borderTopWidth:2,
        borderTopColor: "#443C68",
        paddingTop:10,
    },
    textDescriptionChecked:{
        color:"#443C68",
        fontSize:16,
        textAlign:"left",

        borderTopWidth:2,
        borderTopColor: "#443C68",
        paddingTop:10,

        textDecorationLine:"line-through",
        
    },

    
  });

export default styles;