
// const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/vizianagaram.json?access_token=pk.eyJ1Ijoic3VubnliYWdnYW0iLCJhIjoiY2tubHQwYmtuMGE4aTJ2a3htN3RocjE0NiJ9.XX1Qg1uj2yn5gBGdjq0CwQ&limit=1';

// request({ url: url,json:true }, (error, response) => {
//     // const data = JSON.parse(response.body)

   
//     if (error) {
//         console.log("we are unable to connect weather app");
        
//     } else if (!response.body.features.length === 0){ //!response.body.features[0]
//         console.log("no data found");
        
//     }else{
//         latitude= response.body.features[0].center[0];
//         longitude = response.body.features[0].center[1];
//     console.log(`latitude is ${latitude} and longitude is ${longitude} of vizianagaram`);
//     }
    
//         })


const request = require('request')

const geocode = (address, callback) => {
    console.log(address);
    
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoic3VubnliYWdnYW0iLCJhIjoiY2tubHQwYmtuMGE4aTJ2a3htN3RocjE0NiJ9.XX1Qg1uj2yn5gBGdjq0CwQ&limit=1';
    // console.log(url);
    

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode