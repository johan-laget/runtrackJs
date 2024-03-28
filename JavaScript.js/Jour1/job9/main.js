function tri(numbers, order) {

    const sortedNumbers = numbers.slice();

    if (order === "asc") {
        return sortedNumbers.sort((a, b) => a - b); 
    } else if (order === "desc") {
        return sortedNumbers.sort((a, b) => b - a);
    } else {
        console.error("Le paramètre 'order' doit être 'asc' ou 'desc'.");
        return numbers; 
    }
}

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log(tri(numbers, "asc")); 
console.log(tri(numbers, "desc"));

