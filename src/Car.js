/**
 * Created by Edward_J_Apostol on 2016-08-29.
 */
export default class Car{

    constructor(manufacturer){

        if(typeof manufacturer != "undefined"){
        console.log("A car was created from " + manufacturer);
            this.manufacturer = manufacturer;
        } else {
          console.log("hey man, check the code, creating a car " +
              "requires the name of an auto maker as an argument.");
            this.manufacturer = "no name";
        }

    }

    // an example of an ES6 method. not quite the same
    // as fat arrow functions.

    drive(person) {
        let output = ""; // single-line quote assignment
        if ( typeof person.firstName != "undefined" ){
            let output = `
            ${person.firstName} is driving the car;
        `;
        } else {
            let output = ` OMG!
            no one is driving the car`;
        }
        console.log( output );

    };

}
