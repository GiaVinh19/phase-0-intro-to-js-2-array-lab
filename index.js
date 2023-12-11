// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
 
function destructivelyAppendCat(name) {
    cats.push(name); //add a cat to the end of array
}

function destructivelyPrependCat(name) {
    cats.unshift(name); //add a cat to the beginning of array
}

function destructivelyRemoveLastCat() {
    cats.pop(); //remove a cat at the end of array
}

function destructivelyRemoveFirstCat() {
    cats.shift(); //remove a cat at the beginning of array
}

function appendCat(name) {
    return [...cats, name]; //non-destructively copy cats array to a new array with new name at the end
}

function prependCat(name) {
    return [name, ...cats]; //non-destructively copy cats array to a new array with new name at the beginning
}

function removeLastCat() {
    return [...cats.slice(0, cats.length-1)]; //non-destructively copy cats array without the last element.
}

function removeFirstCat() {
    return [...cats.slice(1)];
}