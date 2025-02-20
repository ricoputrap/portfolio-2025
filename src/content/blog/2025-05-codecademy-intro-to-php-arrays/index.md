---
title: "Codecademy: Intro to PHP Arrays"
description: "The summary of PHP arrays taught by Codecademy."
date: "2025-02-20"
---

## A. Ordered Arrays

1. Arrays are ordered collections of data that are a type of data structure fundamental to computer science.
2. In PHP, we refer to this data structure as **ordered arrays**.
3. The location of an element in an array is known as its **index**.
4. The elements in an ordered array are arranged in ascending numerical order starting with index zero.
5. We can construct ordered arrays with a built-in PHP function: `array()`.
6. We can construct ordered arrays with **short array syntax**, e.g. `[1,2,3]`.
7. We can print arrays using the built-in `print_r()` function or by converting them into strings using the `implode()` function.
8. We use square brackets (`[]`) to access elements in an array by their index.
9. We can add elements to the end of an array by appending square brackets (`[]`) to an array variable name and assigning the value with the assignment operator (`=`).
10. We can change elements in an array using array indexing and the assignment operator.
11. The `array_pop()` function removes the last element of an array.
12. The `array_push()` function adds elements to the end of an array.
13. The `array_shift()` function removes the first element of an array.
14. The `array_unshift()` function adds elements to the beginning of the array.
15. We can use chained square brackets (`[]`) to access and change elements within a nested array.

### A.1. Example

```php
<?php
// Using array() to construct an array:
$prime_numbers = array(2, 3, 5, 7, 11, 13, 17);  
  
// Using short array syntax:
$animals = ["dog", "cat", "turtle", "cow"];  

// Printing with print_r():
print_r($prime_numbers);

echo "\n\n";

// Printing with echo and implode()
echo implode(", ", $animals);

// Adding an element with square brackets:
$prime_numbers[] = 19;

// Accessing an array element:
$favorite_animal = $animals[0];
echo "\nMy favorite animal: " . $favorite_animal;

// Reassigning an element:
$animals[1] = "tiger";

// Using array_pop():
echo "\nBefore pop: " . implode(", ", $animals);
array_pop($animals);
echo "\nAfter pop: " . implode(", ", $animals);

// Using array_push():
echo "\nBefore push: " . implode(", ", $prime_numbers);
array_push($prime_numbers, 23, 29, 31, 37, 41);
echo "\nAfter push: " . implode(", ", $prime_numbers);

//Using array_shift():
echo "\nBefore shift: " . implode(", ", $animals);
array_shift($animals);
echo "\nAfter shift: " . implode(", ", $animals);

//Using array_unshift():
echo "\nBefore unshift: " . implode(", ", $animals);
array_unshift($animals, "horse", "zebra", "lizard");
echo "\nAfter unshift: " . implode(", ", $animals);

//Using chained operations with nested arrays:
$treasure_hunt = ["garbage", "cat", 99, ["soda can", 8, ":)", "sludge", ["stuff", "lint", ["GOLD!"], "cave", "bat", "scorpion"], "rock"], "glitter", "moonlight", 2.11];

echo "\nWe found " . $treasure_hunt[3][4][2][0];
```