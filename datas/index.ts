
//executar: npx tsx .\datas\index.ts


function DataInicialAtual(datainicial:number):number[] {
    let datas:number[]=[];
    for (let dt = datainicial; dt <= new Date().getFullYear(); dt++){
        datas.push(dt)
     }     
     return datas;
}


function executeDatas(){

    console.log( DataInicialAtual(2023))
}


executeDatas();