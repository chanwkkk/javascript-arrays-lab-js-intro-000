var kittens = ["Milo", "Otis", "Garfield"];

 //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  var kittens2=[...kittens,name];
  return kittens2;
}

function prependKitten(name){
  var kittens2=[name,...kittens];
  return kittens2;
}

function removeLastKitten(){
  var kittens2=kittens.slice(-1);
  return kittens2;
}
