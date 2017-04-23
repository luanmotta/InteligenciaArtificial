const Neuronio = require('./Neuronio.js');

function generateMLP(config) {
  const mlp = [];
  let i, j;
  for ( i = 0; i < config.layers.length - 1 ; i++ ) {
    mlp.push([]);
    for ( j = 0; j < config.layers[i] ; j++) {
      mlp[i].push(new Neuronio(config.weight[j]));
    }
  }
  return mlp;
}

class MLP {

	constructor(config) {
    this.mlp = generateMLP(config);
    this.learningRate = config.learningRate; 
  }

	setRandomWeight() {
    const weigth = Math.random() * (1 - 0) + 0;

    // se o peso for nulo, gera um novo peso
    if (weigth === 0) {
      return setWeight();
    }
    return weigth;
  }

  startWeights() {
    this.mlp.mergeAll().map((neuronio) => {
      neuronio.w0 = this.setRandomWeight();
    });
  }

  propagacao(wine) {
    this.mlp.mergeAll().map((neuronio) => {
      neuronio.w0 = this.setRandomWeight();
    });
  }


}
