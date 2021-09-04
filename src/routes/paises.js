const { Router } = require('express');
const router = Router();

//recorre el json

const https = require('https')
const url = "https://restcountries.eu/rest/v2/all";
https.get(url, res => {
    let data = '';
    res.on('data', chunk => {
        data += chunk;
    });
    res.on('end', () => {
        data = JSON.parse(data);

        for (let i = 0; i < data.length; i++) {
            delete data[i].topLevelDomain
            delete data[i].callingCodes;
            delete data[i].capital
            delete data[i].altSpellings
            delete data[i].region
            delete data[i].subregion
            delete data[i].population
            delete data[i].latlng
            delete data[i].demonym
            delete data[i].area
            delete data[i].gini
            delete data[i].timezones
            delete data[i].borders
            delete data[i].nativeName
            delete data[i].numericCode
            delete data[i].currencies
            delete data[i].languages
            delete data[i].translations
            delete data[i].regionalBlocs
            delete data[i].cioc
            
         };
        

        // ruta 
        router.get('/', (req, res) => {
        
            console.log(data);
            res.json(data);
          
        });
    })
}).on('error', err => {
    console.log(err.message);
})


module.exports = router;