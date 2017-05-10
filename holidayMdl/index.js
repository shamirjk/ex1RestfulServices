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
    return {"movies":list};
}

exports.getMoviesByHoliday = (holiday_name) => {
    var list = [];

    for (let i=0; i<data.holiday.length; i++){
        if (data.holiday[i].name === holiday_name){
            for (let k=0; k<data.movies.length; k++) {
                if (data.movies[k].holiday === data.holiday[i].value){
                    list.push(data.movies[k]);
                }
            }
            break;
        }
    }
    if(list.length <1 ){
        return {"Error":"No Matching Movies"};
    }
    else return{"movies":list};
}

exports.getMoviesByHolidayAndLanguage = (holiday_name, lang) =>{
    var list = [];

    for (let i=0; i<data.holiday.length; i++){
        if (data.holiday[i].name === holiday_name){
            for (let k=0; k<data.movies.length; k++) {
                if (data.movies[k].holiday === data.holiday[i].value && data.movies[k].language === lang){
                    list.push(data.movies[k]);
                }
            }
            break;
        }
    }
    if(list.length <1 ){
        return {"Error":"No Matching Movies"};
    }
    else return{"movies":list};
}