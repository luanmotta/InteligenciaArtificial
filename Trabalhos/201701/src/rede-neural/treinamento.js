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
			inputs     = [];
			keysNeeded = config.layers[0] * 2;
			firstKey   = null;

			if (keysNeeded - 1 > Object.keys(wines).length)
				throw new Error('Você colocou mais neuronios de entradas do que campos no objeto vinho');

			Object.keys(wines[i]).every(key => {
				if (firstKey) {
					inputs.push({
						'x1': firstKey,
						'x2': wines[i][key]
					});
					firstKey = null;
				} else 
					firstKey = wines[i][key];

				if (keysNeeded === 1 && firstKey)
					inputs.push({
						'x1': firstKey,
						'x2': 0
					});

				return --keysNeeded;
			});

		 	erroGeral = mlp.propagacao(inputs);
		}
	}
};