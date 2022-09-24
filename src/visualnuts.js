// This function will return the number variable unless it is divisible by 3, 5,
// or both. It will return 'Visual' when the number variable is divisible by 3, 
// If the number is divisible by 5 will return 'Nuts'. And for all numbers divisible 
// by both (eg: the number 15) 'Visual Nuts'.

function visualNuts(number){
    if (number % 15 == 0) return "Visual Nuts";
    else if (number % 3 == 0) return "Visual";
    else if (number % 5 == 0) return "Nuts";
    else return number;
}
module.exports = visualNuts
