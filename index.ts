


function execute() {
    const objeto = { pessoa: { nome: 'Elias', endereco: { casa: { portao: 2 } } } }
    const portaonormal = objeto.pessoa.endereco.casa.portao;
    //desestruturando
    const { pessoa: { endereco: { casa: { portao } } } } = objeto;
    let numero = portao
    console.log('Numero do portão: '+numero)
}

execute();