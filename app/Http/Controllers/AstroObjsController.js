'use strict'
const Env = use("Env");
const rp = use('request-promise')
const nasaKey = Env.get('NASA_KEY')


class AstroObjsController {
    * nearEarth(req, res){
        console.log(nasaKey);
        let options = {
            method: 'GET',
            uri: 'https://api.nasa.gov/neo/rest/v1/feed?api_key=' + nasaKey,
            data:{
                'start_date': '2015-03-15',
                'end_date'  : '2015-03-22'

            },
            json: true // Automatically stringifies the body to JSON 
        };
        console.log(options.uri)
        rp(options)
            .then(function (body) {
               return res.json(body);        
            } );
    };

    * sounds(req, res){
        let options = {
            method: 'GET',
            uri: 'https://api.nasa.gov/planetary/sounds?api_key=' + nasaKey,
            data:{
                'q': 'apollo',
            },
            json: true // Automatically stringifies the body to JSON 
        };
        console.log(options.uri)
        rp(options)
            .then(function (body) {
               return res.json(body);        
            } );

    }
}

module.exports = AstroObjsController
