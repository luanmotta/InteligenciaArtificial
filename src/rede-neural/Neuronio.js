class Neuronio {
	// Neuronio para 2 entradas

	constructor(w0, w1, w2) {
		this.w0 = w0;
		this.w1 = w1;
		this.w2 = w2;
	}

	getW0() {
		return this.w0;
	}

	getW1() {
		return this.w1;
	}

	getW2() {
		return this.w2;
	}

	calculaV(x1, x2) {
		return this.w0 + this.w1 * x1 + this.w2 * x2;
	}

	calculaY(input, Q) {
		const v = this.calculaV(input.x1, input.x2);

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
		return "w0 = " + this.w0 + " w1= " + this.w1 + " w2= " + this.w2;
	}
}

module.exports = Neuronio;