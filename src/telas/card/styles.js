import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
       backgroundColor: '#edf3ff',
    },
    area1: {
        flexDirection: 'row', 
        justifyContent:'space-between',
        paddinHorizontal: '5%',
        marginTop: '2%',

    },
    faturaDestino: {
        marginLeft: '5%',
        fontSize: 20, 
        color: '#87a1d4',
        fontFamily: ''    
    },
    faturaData: {
        marginLeft: '5%',
        fontSize: 15,
        color: '#87a1d4',
        fontFamily: 'Montserrat_400Regular_Italic'  
    }, 
    faturaHorario: {
        marginLeft: '2%',
        fontSize: 13,
        color: '#87a1d4',
        fontFamily: 'Montserrat_400Regular_Italic'  

    },
    faturaValor: {
        marginRight: '3%',
        marginTop: '3%',
        fontSize: 20,
        color: '#87a1d4',
        fontFamily: 'Montserrat_600SemiBold'  
    },
    topoFatura: {
        justifyContent: 'center',
        marginLeft: '5%',
        paddingVertical: '20%'
    },
    faturaAtual: {
        fontSize: 15,
        fontFamily: 'Montserrat_500Medium'  
    },
    totalFatura: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: '5%'
    },
    fechamentoFatura: {
        fontSize: 15,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#000000'
    },
    limiteFatura: {
        fontSize: 15,
        color: '#000000',
        fontFamily: 'Montserrat_600SemiBold'
    },
    texto1:{
        fontSize: 13,
        color: 'gray',
        fontFamily: 'Montserrat_500Medium'
    },
    IconesHorizontais: {
        paddingBottom: '10%',
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    iconeFatura: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#4f699c', 
    },
    
    areaIconeTexto:{
        alignItems: "center",
        marginHorizontal: 5
    },
    textoIcone: {
        color: '#000000',
        fontFamily: 'Montserrat_500Medium'
    },
    textoIcone1: {
        marginLeft: 150,
        fontFamily: 'Montserrat_500Medium',
        color: '#000000',
    },
    iconeFatura1: {
        marginLeft: 150,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#4f699c',
    },
    areaIconeTexto1: {
        marginRight: 5,
        alignItems: 'center'
    }

})