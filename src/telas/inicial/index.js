import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView  } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from './styles'
import { useNavigation } from "@react-navigation/native";

import clientes from '../../mocks/usuarios'


export default function Inicial(){
    const [loginCpf, setLoginCpf] = useState('123456789');
    const [loginSenha, setLoginSenha] = useState('1234');
    const [indice, setIndice] = useState(0);

    
    const navigation = useNavigation();
    
   function checagem(loginCpf, loginSenha){
    for(let i = 0; i < clientes.length; i++){
        if(clientes[i].cpf === loginCpf) {
            if(clientes[i].senha === loginSenha) {
               setIndice(i)
                navigation.navigate('home',  {indice: indice})}
    } 
}} 
    return(
        
        
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-500}
         style={styles.container} >

        
        <View style={styles.areaLogo}>
            <Text style={styles.logo}> B <Text style={styles.logo2}>m</Text> </Text>
            <Text style={styles.descricao}>O seu banco massa</Text>
        </View>


            <View style={styles.areaInput}>
            <TextInput
          style={styles.input}
          placeholder="CPF"
          placeholderTextColor="#999"
          autoCapitalize="none"
          keyboardType="number-pad"
          value={loginCpf}
          onChangeText={setLoginCpf}
        />
            </View>

            <View style={styles.areaInput}>
            <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          keyboardType="number-pad"
          value={loginSenha}
          onChangeText={setLoginSenha}
        />
            </View>
           
            <View style={styles.areaBotao}>
            <LinearGradient
                 style={styles.botao}
                    colors={['#4f699c','#213152']}
                >
            <TouchableOpacity onPress={() => checagem(loginCpf, loginSenha)}>
            <Text style={styles.textoBotao}>Entrar</Text>
            </TouchableOpacity>
                </LinearGradient>
            </View>
        </KeyboardAvoidingView>
        
        
    )
}