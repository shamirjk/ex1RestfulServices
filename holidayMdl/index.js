'use strict';
const data = require ('../data/libraryData.json');

exports.getAllMovies = () => {
    return {"movies":data.movies};
};

exports.getHolidayMovies =() => {
    let list = [];
    for (let i=0; i<data.movies.length; i++){
        if (data.movies[i].holiday !== undefined){
            list.push(data.movies[i]);
        }
    }
    if(list.length <1 ) {
        return {"Error": "No Matching Movies"};
    }
    return {"movies":list};
}

exports.getMoviesByHoliday = (holiday_name) => {
    var list = [];
    if (holiday_name != undefined) {
        for (let i = 0; i < data.movies.length; i++) {
            if (data.movies[i].holiday == holiday_name) {
                list.push(data.movies[i]);
            }
        }
    }
    if(list.length <1 ){
        return {"Error":"No Matching Movies"};
    }
    else return{"movies":list};
}

exports.getMoviesByHolidayAndLanguage = (holiday_name, lang) =>{
    var list = [];

    for (let i=0; i<data.movies.length; i++){
        if (data.movies[i].holiday === holiday_name && data.movies[i].language.original === lang){
            list.push(data.movies[i]);
        }
    }
    if(list.length <1 ){
        return {"Error":"No Matching Movies"};
    }
    else return{"movies":list};
}