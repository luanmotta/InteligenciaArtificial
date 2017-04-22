const
    csv = require('csvtojson');

let
    list = [];
		fase;

class Main {
    constructor() {
        console.log("node started");

				if (process.env[2] === 'treinamento') {
					fase = treinamento;
				}
				else if (process.env[2] === 'generalizacao') {
					fase = generalizacao;
				} else {
					throw new Error('É preciso especificar a fase como "treinamento" ou "generalizacao"');
				}


        csv({
            'delimiter': ';'
        })
        .fromFile(__dirname + '/winequality-red.csv')
        .on('json', (jsonObj) => {
            //console.log(jsonObj[0]);
            list.push(jsonObj);
        })
        .on('done', (error, data) => {
            if (error)
                console.log(error)
						fase(list);
        })
    }
}

function treinamento(list) {
	const winesToTraning = parseInt(list.length * 0.8);

	// Treinamento
	let epocas = 0, i;
	let y, erro, erroGeral;
	let eta = 1; 
	// eta e a constante (taxa) de aprendizagem

	console.log("--- TREINAMENTO");
	while (true) {
		epocas++;
		erroGeral = 0;

		console.log("Epoca: " + epocas);
		for (i = 0; i < winesToTraning; i++) {

			// propagacao
			y = neuronio.calculaY(x1[i], x2[i]);
			
			// calcula do erro
			erro = d[i] - y;
			
			// ajuste dos pesos
			if (erro != 0) {
				neuronio.setW0(neuronio.getW0() + eta * erro);
				neuronio.setW1(neuronio.getW1() + eta * erro * x1[i]);
				neuronio.setW2(neuronio.getW2() + eta * erro * x2[i]);
			}
			console.log("Neuronio - pesos: " + neuronio);
			erroGeral = erroGeral + abs(erro);
		}
		
		// para quando para todas as entradas o erro for zero
		if (erroGeral == 0)
			break;
	}
}

function generalizacao(list) {
	const winesToGeneralizate = parseInt(list.length * 0.2);

	// Generalizacao - Teste da rede
	let entrada1, entrada2, i;
	console.log("\n--- GENERALIZACAO");

	for (i = winesToGeneralizate - 1 ; i > 0 ; i--) {
				
		console.log("Saida Gerada pela rede: "
				+ neuronio.calculaY(entrada1, entrada2));

	}	

}


new Main();