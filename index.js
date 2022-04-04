const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(){
    return drivers.slice(0, -2)
}
console.log(returnFirstTwoDrivers());

function returnLastTwoDrivers(){
    return drivers.slice(2)
}
console.log(returnLastTwoDrivers());

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

console.log(selectingDrivers[0]);




function createFareMultiplier(){
    const fareMultiplier = function(num1){
        return num1 * 5
    }
    return fareMultiplier
}
console.log(createFareMultiplier(5));

const fareDoubler = function(num2){
    return num2 * 2
}

console.log(fareDoubler(10));

const fareTripler = function(num3){
    return num3 * 3
}

console.log(fareTripler(12));

function selectDifferentDrivers(drv, fun){
    return fun(drv)
}
console.log(selectDifferentDrivers(returnLastTwoDrivers(), function(drv){return drv}));



