/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.writeMany = (req, res) => {
    let unused = req.query.unit || req.body.unit;

    const returnValue = "Many documents were into the collection.";
    // REQUIRE STATEMENTS FOR ADDITIONAL PACKAGES

    const MongoClient = require('mongodb').MongoClient;

    // PRIMARY APPLICATION LOGIC

    //PASTE A SAMPLE ARRAY OF JSON OBJECTS TO WRITE INTO THE DATABASE
    const objectData = [{"name": "Alabama","abbreviation": "AL"},{"name": "Alaska","abbreviation": "AK"},{"name": "American Samoa","abbreviation": "AS"},{"name": "Arizona","abbreviation": "AZ"},{"name": "Arkansas","abbreviation": "AR"},{"name": "California","abbreviation": "CA"},{"name": "Colorado","abbreviation": "CO"},{"name": "Connecticut","abbreviation": "CT"},{"name": "Delaware","abbreviation": "DE"},{"name": "District Of Columbia","abbreviation": "DC"},{"name": "Federated States Of Micronesia","abbreviation": "FM"},{"name": "Florida","abbreviation": "FL"},{"name": "Georgia","abbreviation": "GA"},{"name": "Guam Gu","abbreviation": "GU"},{"name": "Hawaii","abbreviation": "HI"},{"name": "Idaho","abbreviation": "ID"},{"name": "Illinois","abbreviation": "IL"},{"name": "Indiana","abbreviation": "IN"},{"name": "Iowa","abbreviation": "IA"},{"name": "Kansas","abbreviation": "KS"},{"name": "Kentucky","abbreviation": "KY"},{"name": "Louisiana","abbreviation": "LA"},{"name": "Maine","abbreviation": "ME"},{"name": "Marshall Islands","abbreviation": "MH"},{"name": "Maryland","abbreviation": "MD"},{"name": "Massachusetts","abbreviation": "MA"},{"name": "Michigan","abbreviation": "MI"},{"name": "Minnesota","abbreviation": "MN"},{"name": "Mississippi","abbreviation": "MS"},{"name": "Missouri","abbreviation": "MO"},{"name": "Montana","abbreviation": "MT"},{"name": "Nebraska","abbreviation": "NE"},{"name": "Nevada","abbreviation": "NV"},{"name": "New Hampshire","abbreviation": "NH"},{"name": "New Jersey","abbreviation": "NJ"},{"name": "New Mexico","abbreviation": "NM"},{"name": "New York","abbreviation": "NY"},{"name": "North Carolina","abbreviation": "NC"},{"name": "North Dakota","abbreviation": "ND"},{"name": "Northern Mariana Islands","abbreviation": "MP"},{"name": "Ohio","abbreviation": "OH"},{"name": "Oklahoma","abbreviation": "OK"},{"name": "Oregon","abbreviation": "OR"},{"name": "Palau","abbreviation": "PW"},{"name": "Pennsylvania","abbreviation": "PA"},{"name": "Puerto Rico","abbreviation": "PR"},{"name": "Rhode Island","abbreviation": "RI"},{"name": "South Carolina","abbreviation": "SC"},{"name": "South Dakota","abbreviation": "SD"},{"name": "Tennessee","abbreviation": "TN"},{"name": "Texas","abbreviation": "TX"},{"name": "Utah","abbreviation": "UT"},{"name": "Vermont","abbreviation": "VT"},{"name": "Virgin Islands","abbreviation": "VI"},{"name": "Virginia","abbreviation": "VA"},{"name": "Washington","abbreviation": "WA"},{"name": "West Virginia","abbreviation": "WV"},{"name": "Wisconsin","abbreviation": "WI"},{"name": "Wyoming","abbreviation": "WY"}];

    // SET CONNECTION STRING

    const uri = 'mongodb+srv://barney:3j7PwWEXxCSisliq@cluster0.pqpdf.mongodb.net/learning_mongo?retryWrites=true&w=majority';

    //////////////////////////////////////////////////////////////////////////////////////////
    // SET A CONSTANT THAT HOLDS THE DB NAME

    const dbName = "learning_mongo";

    // CREATE A NEW INSTANCE OF MongoClient

    const client = new MongoClient(uri, { useUnifiedTopology: true });

    // CONNECT TO THE SERVER

    client.connect(function(err) {
        console.log('Connected to the server!');


        // SET A POINTER TO OUR DB

        const db = client.db(dbName);

        // CALL OUR HELPER FUNCTION TO INSERT A DOCUMENT

        insertDocuments(db, objectData, function(){
            console.log('I inserted a lotta documents into the collection.');
            client.close();
            res.status(200).send(returnValue);
        });
    });

    //END OF PRIMARY APPLICATION LOGIC



    //HELPER FUNCTIONS

    const insertDocuments = function(db, stateData, callback) {
        // Sert constant that holds the documents collection
        const collection = db.collection('states');

        // Insert document

        collection.insertMany(stateData, function(err, result){
            callback();
        });
    }
};