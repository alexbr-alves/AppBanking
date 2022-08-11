const clientes = [
    {
        nome: 'Jimmy',
        sobrenome: 'Page',
        cpf: '123456789',
        senha: '1234',
        saldo: 3600,
        numeroConta: '1/89658',
        card: {
            number: '8458 8879 8854 6354',
            vencimento: '06/30',
            codigoSeg: '684',
            limite: 2800,
            fechamentoFatura: '30/08',
            fatura: [
                {
                    destino: 'Uber',
                    valor: 16.55,
                    data: '01/08/2022',
                    horario: '11: 30',
                    genero: 'transporte'
                },
                {
                    destino: 'Ifood',
                    valor: 25.12,
                    data: '01/08/2022',
                    horario: '20: 11',
                    genero: 'alimentacao'
                },
                {
                    destino: 'Mercearia RR',
                    valor: 127.05,
                    data: '04/08/2022',
                    horario: '8: 34',
                    genero: 'feira'
                },
                {
                    destino: 'Netflix',
                    valor: 39.91,
                    data: '07/08/2022',
                    horario: '00: 13',
                    genero: 'entreterimento'
                },
                {
                    destino: 'American Pub',
                    valor: 16.55,
                    data: '08/08/2022',
                    horario: '22: 30',
                    genero: 'bebidas'
                },
                
            ]

        },


    },
]
export default clientes