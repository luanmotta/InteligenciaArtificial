const Neuronio = require('./Neuronio.js');

function generateMLP(config) {
  const mlp = [];
  let i, j;
  for ( i = 0; i < config.layers.length - 1 ; i++ ) {
    mlp.push([]);
    for ( j = 0; j < config.layers[i] ; j++) {
      mlp[i].push(new Neuronio(...config.weight[j]));
    }
  }
  return mlp;
}

class MLP {

	constructor(config, Q) {
    this.mlp = generateMLP(config);
    this.learningRate = config.learningRate; 
    this.Q = Q;
    this.vk = [];
    this.yk = [];
  }

  propagacao(inputs) {

    var self = this;
    self.mlp.map((layer, layerIndex) => {
      self.mlp.vk[layerIndex].push([]);
      self.mlp.yk[layerIndex].push([]);
      layer.map((neuronio, neuronioIndex) => {
        if (layerIndex === 0) {
          self.mlp.vk[layerIndex][neuronioIndex] = 
            mlp[layerIndex][neuronioIndex].calculaV(input[neuronioIndex]);
          self.mlp.yk[layerIndex][neuronioIndex] = 
            mlp[layerIndex][neuronioIndex].calculaY(input[neuronioIndex], Q);
        } else {

        }
      });
    });
  }

//inputs [{x1:0.4, x2:0.3}, {x1:0.4, x2:0.3}]

}

module.exports = MLP;