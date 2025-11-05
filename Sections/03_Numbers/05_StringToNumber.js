/**
 * Convert string to number
 * 
 * → In some scenarios (explained below), you'd like to convert from a string to a number. For that, 
 * you'd have to use the 'Number.parseInt()' method. Here's an example:
 * 
 */

let str = "42";
console.log(Number.parseInt(str, 10)); // 42

/**
 * → The function name is called 'Number.parseInt()'. Yes, including the 'Number'. bit. This is because
 * there's a global object called 'Number' which contains a method called parseInt().
 * 
 * → This 'Number.parseInt()' method expects 2 parameters:
 * 
 * • Number.parseInt(string, radix);
 * 
 * → The first parameter is the string that you'd like to convert into a number. The second argument is 
 * the 'radix' that will be used in the conversion;
 * 
 * → The 'radix' is the base of the numerical system that you'd like to use. For most use cases the radix
 * you'd like to use is 10 which represents the way we count numbers in our everyday lives. This system is
 * called the decimal system (because we have 10 fingers, so we use the digits from 0 to 9);
 * 
 * → Another example of radix is 2 which represents binary (a numerical system used by computers). As a 
 * quick summary, the 'radix' will most often be 10. If you're not sure what radix to choose, then it's 
 * most likely 10.
 * 
 * ---------------------------------------------------------------------------------------------------------
 * 
 * Can I skip the 'radix'?
 * 
 * → Even though the 'radix' is an optional parameter, you should not skip it. That's because it does not 
 * always default to '10'. So make sure to always pass the radix as the 2nd parameter.
 * 
 * • Number.parseInt(string, radix) does not always default to a radix of 10.
 * 
 * → If you do try 'Number.parseInt()' without a radix of 10, it will work. However, there are some edge 
 * cases (numbers starting with 0x) that would break. Thus, to be safe, it's always recommended to pass 
 * the radix.
 * 
 * ---------------------------------------------------------------------------------------------------------
 * 
 * Legacy notes
 * 
 * → 'Number.parseInt()' and 'parseInt()' are exactly the same thing. PREFER 'Number.parseInt()' over 
 * 'parseInt()'.
 * 
 * → A while ago, 'parseInt(string, radix)' was the only way to convert numbers, however, a while later, 
 * this function has been cloned under the 'Number' object and became 'Number.parseInt(string, radix)' 
 * in an effort to group similar functions together under their relevant object.
 * 
 * → They both work exactly the same. We do recommend that you stick with the modern approach which is 
 * 'Number.parseInt()'.
 * 
 */