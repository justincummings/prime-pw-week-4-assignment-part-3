console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [ "tomatoes", "rice", "beans", "fritos" ];

function addItem( item ){
  basket.push( item );
  return true;
}
addItem("bread");
console.log("Was something added to the basket?;", addItem());
console.log(`Current contents of basket; ${basket}`);

function listItems() {
  for (let i=0; i<basket.length; i++){
    console.log(basket[i]);
    //I cannot figure out how to console out each element of the array to a new line
  }
}

function empty(){
  basket = [];
  return "basket is empty";
}
console.log("What's in the basket?", empty());
console.log(basket);

//There's no way it was this simple? After spending literal hours on the first two?
