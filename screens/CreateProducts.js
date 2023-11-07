import React, {useState} from 'react'
import {Text, StyleSheet, View, TextInput, Button, ScrollView, Alert} from 'react-native'

// importar firebase
import appFirebase from "../firebase";
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoct} from 'firebase/firestore'

const db = getFirestore(appFirebase)

export default function CreateProduct(props){


    const initialState = {
        nombre:'',
        color:'',
        stock:''
    }

    const [state, setState]=useState(initialState)


    const handleChangeText = (value, name)=>{
        setState({...state,[name]:value})
    }


    const SaveProduct = async()=>{

        try{
            await addDoc(collection(db, 'productos'),{
                ...state
            })

            Alert.alert('Atención', 'Guardado con exito')
            //console.log(state)
            props.navigation.navigate('Productos')
        }
        catch{
            console.error(error)
        }


    }


    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}> Crear Nuevo Producto</Text>

            <View style={styles.inputgroup}>
                <TextInput placeholder='Nombre' value={state.nombre}
                           onChangeText={(value)=>handleChangeText(value, 'nombre')} />
            </View>

            <View style={styles.inputgroup}>
                <TextInput placeholder='Color' value={state.color}
                           onChangeText={(value)=>handleChangeText(value, 'color')} />
            </View>

            <View style={styles.inputgroup}>
                <TextInput placeholder='Stock' value={state.stock}
                           onChangeText={(value)=>handleChangeText(value, 'stock')} />
            </View>

            <View>
                <Button title='Guardar Producto' onPress={SaveProduct} />
            </View>


        </ScrollView>
    )

}

const styles = StyleSheet.create({
    titulo:{
        textAlign:'center',
        fontSize:18,
        marginTop:12,
        marginBottom:20
    },
    container:{
        flex:1,
        padding:35
    },
    inputgroup:{
        flex:1,
        padding:0,
        marginBottom:20,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc'
    },

})