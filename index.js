// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat (Jardson) {
  cats.push(Jardson);
}
function destructivelyPrependCat (Jardson) {
  cats.unshift(Jardson);
}
function destructivelyRemoveLastCat () {
  cats.pop();
}

function destructivelyRemoveFirstCat () {
  cats.shift();
}
function appendCat (name) {
  return [...cats, name];
}

function prependCat (name) {
  return [name, ...cats];
}