// production per shed

const ofShed1 = (cows= 10, milk= 51) => {
    return cows * milk;

}
console.log(ofShed1());

const ofShed2 = (cows=7, milk= 44) => {
    return cows * milk;

}
console.log (ofShed2());

const ofShed3 = (cows=18, milk= 27) => {
    return cows * milk;

}
console.log (ofShed3());

const ofShed4 = (cows=22, milk= 26) => {
    return cows * milk;

}
console.log (ofShed4());


// const ofSheds = {
//     ofShed1 : 510,
//     ofShed2 : 308,
//     ofShed3 : 486,
//     ofShed4 : 572,
//   };
//   document.getElementById("daily").innerHTML = ofSheds.ofShed1 +  ofSheds.ofShed2 + ofSheds.ofShed3 + ofSheds.ofShed4;



// Total amount of milk produced in all sheds 

function totalProducts(Shed1= 510, Shed2=308, Shed3=486, Shed4=572)
 {
    return Shed1 + Shed2 + Shed3 + Shed4;

}

console.log(totalProducts());

// // Amount from milksales in  a week

const ofSheds = (totalProducts=1876, days= 7) => {
    return 1876 * 7;

}
console.log (ofSheds());

const oneWeek = (ofSheds=13132, buyingPrice=45) =>{
    return ofSheds * 45;
}
console.log (oneWeek())

