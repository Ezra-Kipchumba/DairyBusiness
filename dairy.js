// This is the production per shed 

const shedA = document.getElementById("shedA").value;
const shedB = document.getElementById("shedB").value;
const shedC = document.getElementById("shedC").value;
const shedD = document.getElementById("shedD").value;

// Amount earned on regular basis 

const incomeOverTime = (dayProduce,buyingPrice) => {
    let amount = dayProduce * buyingPrice;
    return amount;

}
const totalWeekly = 13132 * 45;
const totalYearly = 684740 * 45;

console.log((totalWeekly, totalYearly));


// Amount per Month on a leap year 

const incomeMonth = (monthproduce, buyingPrice =45) => {
    let amount = monthproduce * 45;

    return amount;

}

const janAmount = incomeMonth(58156);
const febAmount = incomeMonth(54404);
const marAmount = incomeMonth(58156);
const aprAmount = incomeMonth(56280);
const mayAmount = incomeMonth(58156);
const junAmount = incomeMonth(56280);
const julAmount = incomeMonth(58156);
const augAmount = incomeMonth(58156);
const sepAmount = incomeMonth(56280);
const octAmount = incomeMonth(58156);
const novAmount = incomeMonth(56280);
const decAmount = incomeMonth(58156);





// Buying price at 49.60/= and difference from 45/= 

const monthlyIncome = (monthproduce,newPrice= 49.60) => {

    let amount = monthproduce * newPrice;

    return amount;

}

const janamountNew = monthlyIncome(58156);
const febAmountNew = monthlyIncome(54404);
const marAmountNew = monthlyIncome(58156);
const aprAmountNew = monthlyIncome(56280);
const mayAmountNew = monthlyIncome(58156);
const junAmountNew = monthlyIncome(56280);
const julAmountNew = monthlyIncome(58156);
const augAmountNew = monthlyIncome(58156);
const sepAmountNew = monthlyIncome(56280);
const octAmountNew = monthlyIncome(58156);
const novAmountNew = monthlyIncome(56280);
const decAmountNew = monthlyIncome(58156);

console.log((decAmountNew));

// x = totalNew(janamountNew,febAmountNew,marAmountNew,aprAmountNew,mayAmountNew,junAmountNew, julAmountNew,augAmountNew,sepAmountNew,octAmountNew, novAmountNew, decAmountNew);
// const totalNew = () => {
//     let add = 0;
//     for( let total= 0; total<arguments.length; total++){
//         sum +=arguments[total];
//     }
//     return add;

// }

// console.log((totalNew));

