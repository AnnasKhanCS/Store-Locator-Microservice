const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors());

const PORT = 3002;


app.use(express.json());


function locateStores(radius_miles){
    const radius = parseFloat(radius_miles);
    console.log('radius received:' , radius_miles, 'parsed: ', radius)
    const stores = [
        {
            name: "Safeway",
            address: "3333 Mowry Ave, Fremont, CA",
            distance_miles: 1.2,
            hours: "5:00 AM - 11:00 PM"
        },
        {
            name: "Trader Joe's",
            address: "39324 Argonaut Way, Fremont, CA",
            distance_miles: 1.5,
            hours: "8:00 AM - 9:00 PM"
        },
        {
            name: "Raley's",
            address: "39200 Paseo Padre Pkwy, Fremont, CA",
            distance_miles: 2.4,
            hours: "6:00 AM - 11:00 PM "
        },
        {
            name: "Mega Mart",
            address: "3900 Mowry Ave, Fremont, CA",
            distance_miles: 5.3,
            hours: "8:00 AM - 9:00 PM"
        }
    ];

   
    //only return stores within distance
    return stores.filter(store => store.distance_miles <=radius);
}


//APi route
app.get('/api', async (req,res) => {
    const {zip_code, radius_miles, store_type} = req.query;

    //check all parameters are present
    if (!zip_code || !radius_miles || !store_type) {
        return res.status(400).json({error: "Missing Parameter"});
    }

    try{
        const found_stores = locateStores(radius_miles);
        return res.json(found_stores);
    }catch (err){
        return res.status(400).json({error: err.message})
    }
    });

app.listen(PORT, () => {

    console.log(`Store Locator MS running on http://localhost:${PORT}`);
});