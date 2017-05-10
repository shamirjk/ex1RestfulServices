'use strict';
const   express= require ('express'),
        app = express(),
        port = process.env.PORT || 3000,
        bodyParser = require('body-parser'),
        myList = require('./holidayMdl');//**************

        app.use(bodyParser.json()); //parsing application/JSON
        app.use(bodyParser.urlencoded({extended:true})); //parsing application

app.all('*', (req, res, next) => {
    console.log ("runs for all HTTP verbs first");
    res.status(200);
    next();
});

app.get (`/getAllMovies`, (req,res) => {
    res.status(200).json(myList.getAllMovies());
    console.log (`get: ${req.params}`);///////////////////////////////////////
    //res.sendFile (__dirname + "API/api.html");//////////////////////////
});

app.get (`/getHolidayMovies`, (req,res) => {
    res.status(200).json(myList.getHolidayMovies());
    console.log (`get: ${req.params}`);///////////////////////////////////////
    //res.sendFile (__dirname + "API/api.html");//////////////////////////
});

app.get('/getMoviesByHolidayAndLanguage/:holiday_name/:language', (req, res)=>{
    res.status(200).json(myList.getMoviesByHolidayAndLanguage(req.params.holiday_name, req.params.language));
});

app.post('/getMoviesByHoliday/', (req, res)=>{
    res.status(200).json(myList.getMoviesByHoliday(req.body.holiday_name));
});

app.listen (port, () => {//create Server
    console.log(`listening on port ${port}`);
    });

/**
 * Created by Shamir on 07-May-17.
 */