//code to swap variables


let flower = 'rose'
let tree = 'apple'

console.log(flower); console.log(tree);

// temp variable is created to allow the swap of variable

let temp;

temp = flower;
flower = tree;
tree = temp;

console.log('floweris now :' ,flower );
console.log('yree is now:' ,tree )