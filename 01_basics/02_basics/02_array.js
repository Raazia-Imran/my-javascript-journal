const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// -------------------- PUSH --------------------
// Adds dc_heros array as a single element inside marvel_heros
// (nested array problem)
marvel_heros.push(dc_heros)
console.log(marvel_heros)
// ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
console.log(marvel_heros[3][1]) // "flash" (access inside nested array)


// -------------------- CONCAT --------------------
// Joins two arrays into a new one (does not modify original)
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)
// ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]


// -------------------- SPREAD --------------------
// Easier, modern way to merge arrays (like concat but cleaner)
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)
// ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]


// -------------------- FLAT --------------------
// Removes nested arrays into a single-level array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// -------------------- isArray --------------------
// Checks if the value is an array
console.log(Array.isArray("Hitesh")) // false
console.log(Array.isArray([1, 2, 3])) // true


// -------------------- from --------------------
// Creates array from iterable (string, set, etc.)
console.log(Array.from("Hitesh"))
// ["H", "i", "t", "e", "s", "h"]

// If we give an object (not iterable), needs keys/values spec
console.log(Array.from({name: "hitesh"}))
// [] (empty, because object is not directly iterable)


// -------------------- of --------------------
// Creates an array from given values (not from iterable)
let score1 = 100, score2 = 200, score3 = 300
console.log(Array.of(score1, score2, score3))
// [100, 200, 300]
