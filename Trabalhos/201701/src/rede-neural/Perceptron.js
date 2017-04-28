const synaptic = require('synaptic'),
	Neuron    = synaptic.Neuron,
	Layer     = synaptic.Layer,
	Network   = synaptic.Network;

function Perceptron(input, hidden, output)
{
	var inputLayer  = new Layer(input);
	var hiddenLayer = new Layer(hidden);
	var outputLayer = new Layer(output);

	inputLayer.project(hiddenLayer);
	hiddenLayer.project(outputLayer);

	this.set({
		input: inputLayer,
		hidden: [hiddenLayer],
		output: outputLayer
	});
}

// extend the prototype chain
Perceptron.prototype = new Network();
Perceptron.prototype.constructor = Perceptron;

module.exports = Perceptron;