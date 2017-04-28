const
    csv           = require('csvtojson'),
	generalizacao = require('./generalizacao'),
	treinamento   = require('./treinamento'),
    config        = require('./../conf.json');

let
    wines   = [],
    wineMax = {},
	fase;

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
        .on('json', (wine) => {
            //console.log(wine);

            Object.keys(wine).map(key => {
                wineMax[key] = wineMax[key] || 0;

                if (wine[key] > wineMax[key])
                    wineMax[key] = wine[key];
            });

            wines.push(wine);
        })
        .on('done', (error, data) => {
            if (error)
                console.log(error);
			fase(wines, wineMax, config);
        });
    }
}

new Main();