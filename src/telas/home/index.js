import React, {useState} from "react";
import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground} from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles'


import IconUser from 'react-native-vector-icons/Feather';
import IconEye from 'react-native-vector-icons/Feather';
import IconMoney from 'react-native-vector-icons/MaterialIcons';
import IconReverse from 'react-native-vector-icons/AntDesign';
import IconTranfer from 'react-native-vector-icons/Ionicons';


import cardFrente from '../../../assets/cardFrente.png'
import cardVerso from '../../../assets/cardVerso.png'

import clientes from "../../mocks/usuarios";


export default function Home(){
    const [visualizarSaldo, setVisualizarSaldo] = useState(false)
    const [visualizarCard, setVisualizarCard] = useState(true);
    const route = useRoute();

    const saldo = clientes[route.params.indice].saldo
    const nome =  clientes[route.params.indice].nome
    const sobrenome =  clientes[route.params.indice].sobrenome
    const nConta =  clientes[route.params.indice].numeroConta
    const numeroCartao =  clientes[route.params.indice].card.number
    const dataVencimento =  clientes[route.params.indice].card.vencimento
    const codigoSeg =  clientes[route.params.indice].card.codigoSeg



    return(
        <SafeAreaView style={styles.container}>
           <View style={styles.topo}>
                <IconUser name="user" size={35} color='#000000' style={styles.iconUser}/> 
                <Text style={styles.nomeUsuario}>Hello, {nome}</Text>
            {
                visualizarSaldo === false? 
                <TouchableOpacity style={styles.iconeEye} onPress={()=> {setVisualizarSaldo(!visualizarSaldo)}}>
                <IconEye style={styles.iconeEye} name= 'eye-off' size={25}/>
                </TouchableOpacity>
            : 
                <TouchableOpacity style={styles.iconeEye} onPress={()=> {setVisualizarSaldo(!visualizarSaldo)}}>
                <IconEye style={styles.iconeEye} name= 'eye' size={25}/>
                </TouchableOpacity>
            }   
                </View>            
                    <View style={styles.cardSaldo}>
                <View style={{flexDirection:'row'}}>
                    <IconMoney style={styles.iconeMoney} name="attach-money" size={25}/>
                    <Text style={styles.saldo}>{visualizarSaldo === true? `R$ ${saldo}`:' - - - - - '}</Text>
                </View>
           </View>

            <View  style={styles.areaCard}>                
                {
                    visualizarCard === true?
                    <ImageBackground  source={cardFrente} resizeMode={'cover'} style={styles.imagemCard}>
                    <TouchableOpacity onPress={() => {setVisualizarCard(!visualizarCard)}}>
                        <IconReverse style={styles.iconeReverso} name="retweet" size={30}/>
                    </TouchableOpacity>
                    <Text style={styles.cardTitulo}>{nome.toUpperCase()} {sobrenome.toUpperCase()}</Text>
                        <View style={{flexDirection: 'row'}}>
                        <Text style={styles.numeroConta}>{nConta}</Text>
                        <Text style={styles.vencimento}>{dataVencimento}</Text>
                        </View>
                        
                        <Services/>
                        
                    </ImageBackground>

                    :
                    <ImageBackground  source={cardVerso} resizeMode={'cover'} style={styles.imagemCard}>
                    <TouchableOpacity onPress={() => {setVisualizarCard(!visualizarCard)}}>
                        <IconReverse style={styles.iconeReverso} name="retweet" size={30}/>
                    </TouchableOpacity>
                    <Text style={styles.numeroCartao}>{numeroCartao}</Text>
                    <Text style={styles.codidoSeg}>{visualizarSaldo === true? ` ${codigoSeg}` : ""}</Text>

                    <Services/>

                    </ImageBackground>
                }
               
            </View>

        </SafeAreaView>
        
    )
}

function Services() {
    const navigation = useNavigation();
    const route = useRoute();
    return(
        <View>
            <View  style={styles.areaService}>
                <TouchableOpacity style={styles.textIcone}>
                    <IconTranfer style={styles.iconeServico} name="key" size={40} />
                    <Text style={styles.textoServico}>Pix</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textIcone}>
                    <IconTranfer style={styles.iconeServico} name="swap-vertical" size={40} />
                    <Text style={styles.textoServico}>Transfers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textIcone} onPress={() => {
                    navigation.navigate('card', {indice: route.params.indice})
                }}>
                    <IconTranfer style={styles.iconeServico} name="card" size={40} />
                    <Text style={styles.textoServico}>Card</Text>
                </TouchableOpacity>
        </View>
        <View style={styles.areaService2}>
            <TouchableOpacity style={styles.textIcone}>
                <IconTranfer style={styles.iconeServico} name="qr-code" size={40} />
                <Text style={styles.textoServico}>Payments</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textIcone}>
                 <IconTranfer style={styles.iconeServico} name="document-text" size={40} />
                 <Text style={styles.textoServico}>Extract</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textIcone}>
                <IconTranfer style={styles.iconeServico} name="menu" size={40} />
                <Text style={styles.textoServico}>More</Text>
            </TouchableOpacity>
        </View>
        </View>
        
    )
}
