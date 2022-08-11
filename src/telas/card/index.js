import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text,  ScrollView, TouchableOpacity } from "react-native";

import IconPay from 'react-native-vector-icons/AntDesign';
import IconSummary from 'react-native-vector-icons/Foundation';
import IconDivision from 'react-native-vector-icons/MaterialCommunityIcons';
import IconLimit from 'react-native-vector-icons/Feather';
import IconCard from 'react-native-vector-icons/Feather';

import clientes from "../../mocks/usuarios";
import styles from './styles'

export default function Card(){
    const route = useRoute();
    let total = 0
    const limite = clientes[route.params.indice].card.limite
    const fechamentoFatura = clientes[route.params.indice].card.fechamentoFatura


    for (let i = 0; i < clientes[route.params.indice].card.fatura.length; i++){
        total +=  clientes[route.params.indice].card.fatura[i].valor
    }
    
       
    return(
        
        <ScrollView style={styles.container}>
            <View style={styles.topoFatura}>
                <Text style={styles.faturaAtual}>Fatura atual</Text>
                <Text style={styles.totalFatura}>R$ {total}</Text>
                <Text style={styles.texto1}>Limite disponivel <Text style={styles.limiteFatura}>R$ {limite - total}</Text></Text>
                <Text style={styles.texto1}>Fecha em <Text style={styles.fechamentoFatura}>{fechamentoFatura}</Text></Text>
            </View>
            <ScrollView style={styles.IconesHorizontais}
                horizontal={true}
                
             >
                <TouchableOpacity style={styles.areaIconeTexto1}>
                    <IconPay style={styles.iconeFatura1} name="barcode" size={35} />
                    <Text style={styles.textoIcone1}>Pay bill</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.areaIconeTexto}>
                    <IconSummary style={styles.iconeFatura} name="results" size={35}/>
                    <Text style={styles.textoIcone}>Summary</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.areaIconeTexto}>
                    <IconDivision style={styles.iconeFatura} name="division" size={35}/>
                    <Text style={styles.textoIcone}>Split</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.areaIconeTexto}>
                    <IconLimit style={styles.iconeFatura} name="git-commit" size={35}/>
                    <Text style={styles.textoIcone}>Adjust limit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.areaIconeTexto}>
                    <IconCard style={styles.iconeFatura} name="credit-card" size={35}/>
                    <Text style={styles.textoIcone}>My Card</Text>
                </TouchableOpacity>
            
            </ScrollView>
                    {clientes[route.params.indice].card.fatura.map(({destino, data, valor, horario, genero}) =>{
                    return(  
                        <View key={horario} style={styles.area1} >
                        <View>
                        <Text style={styles.faturaDestino}>{destino}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.faturaData}>{data} -</Text>
                            <Text style={styles.faturaHorario}>{horario}</Text>
                        </View>
                        </View>
                        <Text style={styles.faturaValor}>{valor}</Text>
                        </View>
                        
                    
                )
             
            })}
            
        </ScrollView>
    )
}