const
    csv           = require('csvtojson'),
	generalizacao = require('./generalizacao'),
	treinamento   = require('./treinamento'),
    config        = require('./../conf.json'),
    fs            = require('fs');

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
        } else {
			throw new Error('É preciso especificar a fase como "treinamento" ou "generalizacao"');
		}

        let path;

        if (!fs.existsSync(process.argv[3])) {
            path = __dirname.split('\\');
            path = path.splice(0, path.length - 2).join('\\') + '\\' + process.argv[3];
        } else
            path = process.argv[3];

        csv({
            'delimiter': ';'
        })
        .fromFile(path)
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