import { StyleSheet } from "react-native";



export default StyleSheet.create( {
    container: {
        height: '100%',
        backgroundColor: '#edf3ff',
        flex: 1,
    },
    topo: {
        height: '10%',
        justifyContent: 'space-between',
        backgroundColor: '#87a1d4',
        flexDirection: 'row',
        borderColor: '#4f699c',
        borderBottomWidth: 1,

    },
    iconUser: {
        marginLeft: '5%',
        marginTop: '5%'
    },
    iconeEye: {
        marginTop: '8%',
        marginRight: '2%',
        fontSize: 20
    }, 
    nomeUsuario: {
        marginTop: '8%',
        fontSize: 20,
        fontFamily: 'Montserrat_600SemiBold' 
    }, 
    cardSaldo: {
        backgroundColor: '#87a1d4',
        paddingTop: 10,
        borderColor: 'gray',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingBottom: "2.5%"
    },
    tituloSaldo: {
        paddingLeft: '6%',
        paddingTop: '2%',
        backgroundColor: '#87a1d4',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        fontWeight: 'bold'
    },
    iconeMoney: {
        marginTop: '2%',
        marginLeft: '3%'
    },
    saldo: {
        marginTop: '1.5%',
        fontSize: 22,
        fontFamily: 'Montserrat_600SemiBold'
    },
    areaCard: {
        flex: 1,

    }, 
    imagemCard: {
        height: '70%',
        width: '100%',
        backgroundColor: '#edf3ff',
        alignSelf: 'center',
    },
    iconeReverso: {
        alignSelf: 'flex-end',
        padding:10,
        borderRadius: 90,
    },
    cardTitulo: {
        paddingLeft: '10%',
        fontSize: 20,
        fontFamily: 'Kreon_400Regular',
    },
    numeroConta: {
       paddingLeft: '11%',
       marginTop: '39.5%' ,
       fontFamily: 'Montserrat_500Medium'
    },
    vencimento: {
        marginTop: '39.5%',
        paddingLeft: '10%',
        fontFamily: 'Montserrat_500Medium'

    },
    numeroCartao: {
        marginTop: '31%',
        paddingLeft: '7%',
        fontSize: 20,
        fontFamily: 'Kreon_400Regular',
    },
    codidoSeg: {
        marginTop: '1.5%',
        paddingLeft: '45%',
        fontSize: 20,
        fontFamily: 'Kreon_400Regular'
    },
    areaService: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        marginLeft: '10%',
        paddingTop: '16%',
        flexDirection: 'row',

    },
    areaService2: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        marginLeft: '10%',
        marginTop: '10%',
        flexDirection: 'row',

    },
    iconeServico: {
        backgroundColor: '#edf3ff',
        padding: '5%',
        borderWidth: 2,
        borderRadius: 10,
        elevation: 10
        
    },
    textoServico: {
        fontSize: 15,
        fontFamily: 'Montserrat_500Medium'
    },
    textIcone: {
        alignItems: 'center'
    }
})   