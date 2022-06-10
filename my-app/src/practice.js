const birds = [
    { name: 'steve', color: 'green'},
    { name: 'jachel', color: 'pink'},
    { name: 'prison', color: 'burple'}
]

// console.log(Object.entries(birds))

// filter method
// used when we want to take an array and filter certrain items out of it.

const someBirds = birds.filter((bird) => {
    return bird.color == 'green'
})

console.log(someBirds, "-------", birds)


// map
// fires a function for each array and fires a new function
// if we want a new array

const names = birds.map((birdy) => {
    return birdy.name + " gaku"

})

console.log(names)  