const
    csv = require('csvtojson');

let
    list = [];

class Main {
    constructor() {
        console.log("node started");

        csv({
            'delimiter': ';'
        })
        .fromFile(__dirname + '/winequality-red.csv')
        .on('json', (jsonObj) => {
            //console.log(jsonObj[0]);
            list.push(jsonObj);
        })
        .on('done', (error, data) => {
            if (error)
                console.log(error)
            console.log(list[0]);
        })
    }
}

new Main();