// const request = require('request')


//     const forecast = (latitude,longitude,callback)=>{
//     const url ='http://api.weatherstack.com/current?access_key=0501616883ed14b94b8005a2a8915623&query='+latitude+','+longitude+'';
//     request({ url,json:true }, (error, {body}) => {
//         if (error) {
//             callback("we are unable to connect weather app",undefined);
            
//         } else if (body.error){
//             callback(body.error.info,undefined);
            
//         }
//         else {
//             callback(undefined,body.current.weather_descriptions[0]+' it is currently '+body.current.temperature + ' degrees out. there is a ' + body.current.feelslike +'% chances of rain' )    
//         }
        
//         })
//     }

    // module.exports = forecast

const request = require('request')

const forecast = (latitude, longitude, callback) => {
    // console.log(latitude ,longitude);
    
    const url ='http://api.weatherstack.com/current?access_key=0501616883ed14b94b8005a2a8915623&query='+latitude+','+longitude+'';
    // console.log(url);
    
    request({ url,json:true }, (error, {body}) => {
                
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            // callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
            callback(undefined,body.current.weather_descriptions + ' It is currently temperature ' + body.current.temperature + ' currently!');
            
        }
    })
}

module.exports = forecast