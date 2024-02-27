// const getAgePlugin = require('get-age');
// import { getAge } from "./index";

export const getAge = ( birthdate:string ) => {
    // return getAgePlugin(birthdate);
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
}
