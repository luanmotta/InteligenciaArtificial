const MLP = require('./MLP.js');

module.exports = function treinamento(wines, wineMax, config) {
	let Q = n => n * n * n;

	const winesToTraning = parseInt(wines.length * 0.8),
		  mlp            = new MLP(config, Q);

	// Treinamento
	let epocas = 0, i, erroGeral;
	let inputs;

	console.log("--- TREINAMENTO");
	while (erroGeral !== 0) {
		epocas++;
		erroGeral = 0;

		console.log("Epoca: " + epocas);
		for (i = 0; i < winesToTraning; i++) {
			inputs = [];

			inputs.push({
				'x1': wines[i]['fixed acidity']    / wineMax['fixed acidity'],
				'x2': wines[i]['volatile acidity'] / wineMax['volatile acidity']
			});

			inputs.push({
				'x1': wines[i]['citric acid']    / wineMax['citric acid'],
				'x2': wines[i]['residual sugar'] / wineMax['residual sugar']
			});

		 	mlp.propagacao(inputs);
			mlp.retropropagacao(wines[i]['quality']);
		}
	}
};