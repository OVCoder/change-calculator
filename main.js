// Write your JavaScript here
function changeCalculator(){
    var totalSale = document.getElementById("amount-due").value;
    var totalCash = document.getElementById("amount-received").value;
    var dollars;
    var dimes;
    var nickels;
    var pennies;
    var quarters;
    var change = (totalCash - totalSale);
    document.getElementById("calculatedTotalChange").innerText = "$ "+change.toFixed(2);
    dollars = Math.floor(change);
    document.getElementById('dollars-output').innerText = dollars;
    quarters  = (change - dollars)/0.25;
    document.getElementById('quarters-output').innerText =  Math.floor(quarters);
    dimes = ((change-dollars)-(Math.floor(quarters)*0.25))/0.1;
    document.getElementById('dimes-output').innerText = +Math.floor(dimes);
    nickels =  ((change-dollars)-(Math.floor(quarters)*0.25)-(Math.floor(dimes)*0.1))/0.05;
    document.getElementById('nickels-output').innerText  = Math.floor(nickels);
    pennies = ((change-dollars)-(Math.floor(quarters)*0.25)-(Math.floor(dimes)*0.1)-(Math.floor(nickels)*0.05))/0.01;
    if((pennies.toFixed(0)) == 5){
        document.getElementById('nickels-output').innerText  = Math.floor(nickels)+1;
        document.getElementById('pennies-output').innerText = 0;
        } else {document.getElementById('pennies-output').innerText = pennies.toFixed(0);
    }
}
// THE CODE BELOW WORKS AND SHOWS LABELS LIKE "DOLLARS","QUARTERS" ETC, BUT WON'T PASS TESTS!
//function changeCalculator(){
//    var totalSale = document.getElementById("amount-due").value;
//    var totalCash = document.getElementById("amount-received").value;
//    var dollars;
//    var dimes;
//    var nickels;
//    var pennies;
//    var quarters;
//    var change = (totalCash - totalSale);
//    document.getElementById("calculatedTotalChange").innerText = "$ "+change.toFixed(2);
//    dollars = Math.floor(change);
//    document.getElementById('dollars-output').innerText ="Dollars: "+ dollars;
//    quarters  = (change - dollars)/0.25;
//    document.getElementById('quarters-output').innerText = "Quarters: " + Math.floor(quarters);
//    dimes = ((change-dollars)-(Math.floor(quarters)*0.25))/0.1;
//    document.getElementById('dimes-output').innerText = "Dimes: "+Math.floor(dimes);
//    nickels =  ((change-dollars)-(Math.floor(quarters)*0.25)-(Math.floor(dimes)*0.1))/0.05;
//    document.getElementById('nickels-output').innerText  = "Nickels: " + Math.floor(nickels);
//    pennies = ((change-dollars)-(Math.floor(quarters)*0.25)-(Math.floor(dimes)*0.1)-(Math.floor(nickels)*0.05))/0.01;
//    if((pennies.toFixed(0)) == 5){
//        document.getElementById('nickels-output').innerText  = "Nickels:" + Math.floor(nickels)+1;
//        document.getElementById('pennies-output').innerText = 0;
//        } else {document.getElementById('pennies-output').innerText = "Pennies "+pennies.toFixed(0);
//    }
//}

