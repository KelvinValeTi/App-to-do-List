import { Text, View, TouchableOpacity } from 'react-native';
import {useState} from "react";

import { FontAwesome } from '@expo/vector-icons';
import styles from "./style";

export default function Task({title}) {
  
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
        <View style={styles.containerHeader}>
            <Text style={ 
              !isChecked? styles.title 
              : 
              styles.titleChecked
              }
            >{title}</Text>
            
            <View style={styles.iconsView}>
            
                <TouchableOpacity>
                    <FontAwesome 
                      name="check" 
                      onPress={()=>setIsChecked(!isChecked)}
                      size={30} 
                      color="#FFFFFF" 
                    />        
                </TouchableOpacity>

                <TouchableOpacity style={styles.icon}>
                    <FontAwesome 
                      name="pencil" 
                      onPress={()=>console.log("Edit")}
                      size={30} 
                      color="#FFFFFF" 
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <FontAwesome 
                      name="trash" 
                      onPress={()=>console.log("excluir")}
                      size={30} 
                      color="#FFFFFF" 
                    />
                </TouchableOpacity>
            </View>
        </View>

        <View>
            <Text style={
              !isChecked? styles.textDescription 
              : 
              styles.textDescriptionChecked}>balsjaksajskajskajiajeaks  skasjkaj easkajsi asjkasj aejkaskaejkajs </Text>
        </View>
    </View>
  );
}
