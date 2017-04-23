class Neuronio {
	// Neuronio para 2 entradas

	constructor(w0, w1, w2) {
		this.w0 = w0;
		this.w1 = w1;
		this.w2 = w2;
	}

	getW0() {
		return w0;
	}

	getW1() {
		return w1;
	}

	getW2() {
		return w2;
	}

	calculaV({x1, x2}) {
		return w0 + w1 * x1 + w2 * x2;
	}

	calculaY({x1, x2}, Q) {
		const v = calculaV(x1, x2);

		return (Q(v));
	}

	setW0(w0) {
		this.w0 = w0;
	}

	setW1(w1) {
		this.w1 = w1;
	}

	setW2(w2) {
		this.w2 = w2;
	}

	toString() {
		return "w0 = " + w0 + " w1= " + w1 + " w2= " + w2;
	}
}

module.exports = Neuronio;