## Store Locator Microservice

### Description
Microservice returns a list of nearby grocery stores based on US zip code, a search radius and type of store (ex. supermarket) via REST API


### How to request data
Send an HTTP Get request to api with the required query parameters: zip_code, radius_miles, store_type. Parameters described below:

Supported Store Types: 'supermarket', 'grocery', 'convenience'

| Parameter | Description | Required | Valid Values|
|---|---|---|---|
| zip_code | the US zip code to search around | Yes | Any valid US zip code (ex. 94515)|
| radius_miles | The search radius in miles. Only stores within this search distance from zip code are returned | Yes | Any positive number (ex. 1, 5, 10)|
| store_type | the type of store to search for | Yes |One of the Supported store types above (Ex. supermarket, grocery)|

Javascript Example:

```javascript
//Example Req for searching supermarkets within 5 miles of zipcode 94538
//zip_code = 94538 
//radius_miles = 5 
//store_type = 'supermarket'

//send the rquest with required parmeters embedded
const response = await fetch('https://localhost:3002/api?zip_code=94538&radius_miles=5&store_type=supermarket');

//receive the JSON response
const data = await response.json();

```

### How to receive data
Returns a JSON object containing an array of stores. Each store contains name, address, distance_miles and hours. The output fields are described in table below.

| Output | Description | Valid Values |
|---|---|---|
|name|The name of the store|Ex. "Safeway"|
|address|The address of the store including city and state| Ex. "3333 Mowry, Ave, Fremont, CA"|
|distance_miles|The distance in miles the store is from the provided zip code| Ex. 1.2|
|hours| The stores operational hours| Ex. "5:00 AM - 11:00 PM"|

Example Response in Javascript: 

Example Res for searching supermarkets within 5 miles of zipcode 94538

```json

[
    {
        "name": "Safeway",
        "address": "3333 Mowry Ave, Fremont, CA",
        "distance_miles": 1.2,
        "hours": "5:00 AM - 11:00 PM"
    },
    {
        "name": "Trader Joe's",
        "address": "39324 Argonaut Way, Fremont, CA",
        "distance_miles": 1.5,
        "hours": "8:00 AM - 9:00 PM"
    }
]

```

Error Response
If parameter is missing in the request, the MS returns with an error message and 400 status as shown below:
```json

{
    "error": "Missing Parameter"
}

```

### UML Sequence Diagram
![alt text](image.png)




