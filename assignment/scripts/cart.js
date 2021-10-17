console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem( item ){
  basket.push( item );
  for (var i = 0; i < basket.length; i++){
    let item = basket[i];
    if (item === basket[i]) {
      contents = true
    }
  }
return contents;
}

additem(bread);
console.log(`Basket contents; ${basket}`);
