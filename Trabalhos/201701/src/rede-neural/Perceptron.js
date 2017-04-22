class Perceptron {
	constructor() {
		this.neuronio = new Neuronio();
		this.x1[] = new int[4]; // 1a entrada
		this.x1[] = new int[4]; // 1a entrada
		this.x2[] = new int[4]; // 2a entrada
		this.d[] = new int[4]; // saida desejada
	}

	treinamento() {
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
			for (i = 0; i < x1.length; i++) {

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

		// Generalizacao - Teste da rede
		let entrada1, entrada2;
		console.log("\n--- GENERALIZACAO");

		while (true) {
			// digita novas entradas
			console.log("Digite -100 para encerrar");
			console.log("Digite a entrada (x1): ");
			entrada1 = dados.nextInt();
			if (entrada1 == -100)
				break;

			console.log("Digite a entrada (x2): ");
			entrada2 = dados.nextInt();
			if (entrada2 == -100)
				break;

			// propagacao
			console.log("Saida Gerada pela rede: "
					+ neuronio.calculaY(entrada1, entrada2));
		}	
	}
}
