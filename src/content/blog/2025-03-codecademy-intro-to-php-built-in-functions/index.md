---
title: "Writing Function Documentation in PHP"
description: "The summary of how to write function documentation in PHP."
date: "2025-02-19"
---

### Documentation

In order to understand built-in functions we’ve never used before, we’ll want to get comfortable understanding how they are represented in the documentation. Documentation typically includes:
- The name of the function.
- The versions of the PHP language the function is available in.
- An overview of how the function works.
- Additional details on the parameters and return value.
- Examples of the function in use.
- User comments further explaining features of the function.

### Example

```php
/**
 * Converts a string to lowercase.
 * 
 * @param string $string The string to convert to lowercase.
 * @return string The lowercase version of the input string.
 * 
 * @example
 * $lowercaseString = strtolower($string);
 * echo $lowercaseString;
 * 
 * @see https://www.php.net/manual/en/function.strtolower.php
 * @since 5.4.0
 */
function strtolower(string $string): string {
  // ...
  return $string;
}
```