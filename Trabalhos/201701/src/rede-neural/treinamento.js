const MLP = require('./MLP.js');

module.exports = function treinamento(wines, config) {
	let Q = n => n * n * n;

	const winesToTraning = parseInt(wines.length * 0.8),
		  mlp            = new MLP(config, Q);

	// Treinamento
	let epocas = 0, i, erroGeral;
	let inputs, keysNeeded, firstKey;

	console.log("--- TREINAMENTO");
	while (erroGeral !== 0) {
		epocas++;
		erroGeral = 0;

		console.log("Epoca: " + epocas);
		for (i = 0; i < winesToTraning; i++) {

			inputs.push({
				'x1': wines[i]['fixed acidity'],
				'x2': wines[i]['volatile acidity']
			});

		 	mlp.propagacao(inputs);
			mlp.retropropagacao(outputs);
		}
	}
};