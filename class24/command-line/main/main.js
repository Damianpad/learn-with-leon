let arr = [1,2,3,4,5]

let sum = arr.reduce((acc, c) => acc + c ,0)

console.log(sum);

// Write a function that checks if a person is a member.
// Use the ternary operator to see if is a member. 
// If member: FREE
// ELse: $10 FEE

function getFee(isMember) {
    return (isMember ? 'FREE' : '$10.00')
}

console.log(getFee(false));