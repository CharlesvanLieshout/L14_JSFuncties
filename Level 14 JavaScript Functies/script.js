//DEEL A

// makeCheeseSandwich
    //Get one slice of bread
    //Add cheese
    //Put slice of bread on top


function makeCheeseSandwich(){
    console.log('Get one slice of bread');
    console.log('Add Cheese');
    console.log('Put slice of bread on top');
}
makeCheeseSandwich();

// DEEL B

// function declaration
function makeSandwichWith(topping){
 console.log("There you go, a sandwich with " + topping);    
}


let topping = 'pindakaas';

// function call
makeSandwichWith(topping);

let topping = 'worst';
makeSandwichWith('pindakaas');

// DEEL C

function calculateDiscountedPrice(totalAmount, discount){
    let totaalPrijs = totalAmount-discount;
    return totaalPrijs;
}
console.log("te betalen: € " + calculateDiscountedPrice(20, 5));

// DEEL D


function calculateBulkPrice(totalAmount, discount){
    let totaalPrijs = totalAmount-discount;
    if (totalAmount >=25) {
    return totaalPrijs}
    else {return totalAmount}

}
console.log("te betalen: € " + calculateBulkPrice(35, 5));

