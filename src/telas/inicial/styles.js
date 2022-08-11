import { StyleSheet } from "react-native";
const branco = '#fafafa'
const marrom = '#7a5b3e'
const laranja = '#fa4b00'
const cinza = '#cdbdae'
const cinza_escuro = '#1f1f1f'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#edf3ff',
        height: '100%',
        //justifyContent: 'center'
        
    },
    areaLogo: {
        alignItems: 'center',
        marginVertical: '30%'
    },
    logo: {
        fontSize: 80,
        fontFamily: "LuckiestGuy_400Regular",
        color: '#213152',
        borderWidth: 5,
        paddingRight: 5,
        borderRadius: 10,
        borderColor: '#213152'
    },
    logo2: {
        fontSize: 60,
        letterSpacing: -30,
        fontFamily: "LuckiestGuy_400Regular",
        color: '#213152'
    },
    descricao: {
        fontFamily: 'Satisfy_400Regular',
        fontSize: 30,
        color: '#213152',
        textDecorationLine: 'underline'
    },
   input: {
        marginLeft: 5
   },
    areaInput: {
        width: '50%',
        borderWidth: 1,
        marginHorizontal: '25%',
        height: 25,
        marginVertical: 10,
   },
    areaBotao: {
        alignItems: 'center',
        marginTop: 15,
        
    },
    botao: {
        width: '40%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center'
    },
    textoBotao: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
})