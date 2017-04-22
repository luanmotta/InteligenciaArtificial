module.exports = function generalizacao(list) {
	const winesToGeneralizate = parseInt(list.length * 0.2);

	// Generalizacao - Teste da rede
	let entrada1, entrada2, i;
	console.log("\n--- GENERALIZACAO");

	for (i = winesToGeneralizate - 1 ; i > 0 ; i--) {
				
		console.log("Saida Gerada pela rede: "
				+ neuronio.calculaY(entrada1, entrada2));

	}	

}