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

## B. Associative Arrays

1. Associative arrays are data structures in which string or integer keys are associated with values.
2. We use the `=>` operator to associate a key with its value. `$my_array = ["panda"=>"very cute"];`
3. To print an array’s keys and their values, we can use the `print_r()` function.
4. We access the value associated with a given key by using square brackets (`[ ]`). For example: `$my_array["panda"]` will return `"very cute"`.
5. We can assign values to keys using this same indexing syntax and the assignment operator (`=`): `$my_array["dog"] = "good cuteness";`
6. This same syntax can be used to change existing elements. `$my_array["dog"] = "max cuteness";`
7. We can remove a _key=>value_ pair entirely using the PHP `unset()` function.
8. Keys can be integers. In fact, ordered arrays are just arrays in which integer keys have been assigned to the values automatically.
9. In PHP, associative arrays and ordered arrays are different uses of the same data type.
10. The union (`+`) operator takes two array operands and returns a new array with any unique keys from the second array appended to the first array.
11. When writing a function with array parameters, we can pass the array by value or by reference depending on our intent.

### B.1. Example

```php
<?php
$doge_meme = ["top_text" => "Such Python", "bottom_text" => "Very language. Wow.", "img" => "very-cute-dog.jpg", "description" => "An adorable doge looks confused."];

$doge_meme["new value"] = "Woah I'm new";

echo "\n" . $doge_meme["new value"];

array_push($doge_meme, "just an example");

echo "\n" . $doge_meme[0] . "\n";

unset($doge_meme[0]);
unset($doge_meme["new value"]);

$doge_meme["description"] = "A wonderful dog picture with a brand new description.";

function createMeme ($meme) 
{
  $meme["top_text"] = "Much PHP";
  $meme["bottom_text"] = "Very programming. Wow.";
  return $meme;
}  

$php_doge = createMeme($doge_meme);

print_r($doge_meme);

print_r($php_doge);

function fixMeme (&$meme) 
{
  $meme["top_text"] = "I can haz";
  $meme["bottom_text"] = "PHP, plz?";
} 

$lame_meme = ["top_text" => "i don't know", "bottom_text" => "i can't think of anything", "img" => "very-fat-cat.jpg", "description" => "An very fat cat looks happy."];

print_r($lame_meme);

fixMeme ($lame_meme);

print_r($lame_meme);
```