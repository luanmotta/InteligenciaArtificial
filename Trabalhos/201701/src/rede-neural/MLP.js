class MLP {

	constructor(config) {
		
	}

	setRandomWeight() {
    const weigth = Math.random() * (1 - 0) + 0;

    // se o peso for nulo, gera um novo peso
    if (weigth === 0) {
      return setWeight();
    }
    return weigth;
  }

  startWeights(mlp) {
    return mlp.mergeAll().map((neuronio) => {
      neuronio.w0 = setRandomWeight();
    });
  }

  propagacao(neuronios) {
    
  }


}
