//6) The area of a rectangle is equal to its length x width.

//Define a function and the required parameters to calculate the area of a rectangle.
//The function should return the area, NOT print it.
function areaOfRectangle(length, width) {
 if (width === undefined) {
   console.log("This is a square");
 } else {
   console.log(`The area is ${Math.round(length * width)}cm²`);
 } 
}
areaOfRectangle(6, 8);
areaOfRectangle(5);

//If only one argument is passed to the function, then the shape is a square. Modify your code to deal with this case.


//Call your area function, then use a template literal to print, “The area is ____ cm^2.”
