const
    csv           = require('csvtojson'),
	generalizacao = require('./generalizacao'),
	treinamento   = require('./treinamento');
    config        = require('./../conf.json');

let
    wines = [],
	fase;

require('./../util.js');

class Main {
    constructor() {
        console.log("node started");

		if (process.argv[2] === 'treinamento') {
			fase = treinamento;
		}
		else if (process.argv[2] === 'generalizacao') {
			fase = generalizacao;
        }/* else {
			throw new Error('É preciso especificar a fase como "treinamento" ou "generalizacao"');
		}*/

        fase = treinamento;


        csv({
            'delimiter': ';'
        })
        .fromFile(__dirname + '/winequality-red.csv')
        .on('json', (jsonObj) => {
            //console.log(jsonObj[0]);
            wines.push(jsonObj);
        })
        .on('done', (error, data) => {
            if (error)
                console.log(error);
			fase(wines, config);
        });
    }
}

new Main();