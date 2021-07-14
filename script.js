'use strict'

function areaRectangle(firstSide, secondSide){

    firstSide = Number(firstSide); secondSide = Number(secondSide);
    
    if(firstSide && secondSide){}else{return 0;};

    if(firstSide <= 0 || secondSide <= 0){
        return 0;
    };
    
    var area = firstSide*secondSide;
    return area;
};

var firstSide = Number(prompt("Wprowadź wartość pierwszego boku: "));
if(firstSide && firstSide > 0){}else{firstSide = 0;};
var secondSide = Number(prompt("Wprowadź wartość drugiego boku: "));
if(secondSide && secondSide > 0){}else{secondSide = 0;};


var rectangle = {
    firstSide: firstSide,
    secondSide: secondSide,
};
rectangle.area = areaRectangle(rectangle.firstSide, rectangle.secondSide);

console.log(`Pierwszy bok: ${rectangle.firstSide}`);
console.log(`Drugi bok: ${rectangle.secondSide}`);
console.log(`Pole: ${rectangle.area}`);