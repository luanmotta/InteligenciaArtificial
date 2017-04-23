const MLP = require('./MLP.js');
const config = require('./../config.json');

module.exports = function treinamento(list) {
	const winesToTraning = parseInt(list.length * 0.8);

	const mlp = new MLP(config);

	// Treinamento
	let epocas = 0, i;
	let y, erro, erroGeral;

	console.log("--- TREINAMENTO");
	while (true) {
		epocas++;
		erroGeral = 0;

		console.log("Epoca: " + epocas);
		for (i = 0; i < winesToTraning; i++) {

		 mlp.propagacao(list[i]);

			// y = neuronio.calculaY(x1[i], x2[i]);
			
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