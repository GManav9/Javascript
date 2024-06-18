var bill = 100;
var tax = 10;
var tip = 20;
var tipss = (bill * tip) / 100;
var amo = tipss + bill;
var final = (amo * tax) / 100 + bill + tipss;
console.log(final);
