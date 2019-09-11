const Joi = require('joi');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use("/styles", express.static(__dirname + '/styles'));
app.use("/scripts", express.static(__dirname + '/scripts'));
app.use("/imgs", express.static(__dirname + '/imgs'));

var urlencodedParser = bodyParser.urlencoded({ extended: false })


const listings = [
    { id: 1, name: 'house1'},
    { id: 2, name: 'house2'},
    { id: 3, name: 'house3'}
];

app.get('/', (req, res) => {
    res.render('profile');
});


app.get('/api/listings', (req, res) => {
    res.send(listings);
});

app.get('/api/listings/:id', (req, res) => {
    const listing = listings.find(l => l.id == parseInt(req.params.id));
    if (!listing) return res.status(404).send('The listing with the given ID was not found');
    res.send(listing);
});

app.post('/api/listings', urlencodedParser, (req, res) => {

    console.log(req.body);
    const { error } = validateListing(req.body);
    if (error) return res.status(400).send(error.details[0].message);


    const listing = {
        id: listings.length + 1,
        name: req.body.name
    };
    listings.push(lisitng);
    res.send(listing);
});

app.put('/api/listings/:id', (req, res) => {
    const listing = listings.find(l => l.id == parseInt(req.params.id));
    if (!listing) return res.status(404).send('The listing with the given ID was not found');

    const { error } = validateListing(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    listing.name = req.body.name;
    res.send(listing);
});

function validateListing(listing) {
    const schema = {
        name: Joi.string().min(8).required() // name has to be atleast 8 characters long
    };

    return Joi.validate(listing, schema);
}

app.delete('/api/listings/:id', (req, res) => {
    const listing = listings.find(l => l.id == parseInt(req.params.id));
    if (!listing) return res.status(404).send('The listing with the given ID was not found');

    const index = listings.indexOf(listing);
    listings.splice(index, 1);

    res.send(listing);
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}....`);
});