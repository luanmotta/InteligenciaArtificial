const Neuronio = require('./Neuronio.js');

function getNeuronios(length, layerIndex, config) {
  const neuronios = [];
  
  for (var i = 0; i < config.layers[i] ; i++)
      neuronios.push(new Neuronio(...config.weights[layerIndex][i]));

  return neuronios;
}

function generateMLP(config) {
  const mlp = [];

  for (var i = 0, l = config.layers.length - 1; i < l; i++ )
    mlp.push({
      'isOcult': i > 0 && i < l,
      'neuronios': getNeuronios(config.layers[i], i, config)
    });

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
      self.vk.push([]);
      self.yk.push([]);
      layer.neuronios.map((neuronio, neuronioIndex) => {
        if (layerIndex === 0) {
          self.vk[layerIndex].push(self.mlp[layerIndex].neuronios[neuronioIndex].calculaV(inputs[neuronioIndex]));
          self.yk[layerIndex].push(self.mlp[layerIndex].neuronios[neuronioIndex].calculaY(inputs[neuronioIndex], self.Q));
        } else {
          self.vk[layerIndex].push(self.mlp[layerIndex].neuronios[neuronioIndex].calculaV({
              x1: self.yk[layerIndex - 1][neuronioIndex], 
              x2: self.yk[layerIndex - 1][neuronioIndex],
            }));
          self.yk[layerIndex].push(self.mlp[layerIndex].neuronios[neuronioIndex].calculaY({
              x1: self.yk[layerIndex - 1][neuronioIndex], 
              x2: self.yk[layerIndex - 1][neuronioIndex],
            }, self.Q));
        }
      });
    });
  }

  retropropagacao() {
    
  }

//inputs [{x1:0.4, x2:0.3}, {x1:0.4, x2:0.3}]
}

module.exports = MLP;