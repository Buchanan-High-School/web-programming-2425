/* This line controls the state of whether or not the page is inverted. It can be read and updated by the function.
 */
let inverted = false;

/*
  Javascript has the option to write _functions_ - bits of code that can be reused over and over.

  In this example, the function is run every time the user clicks the button, inverting the color scheme.
*/
function invert() {
  /*
  The document object is the entry point for working with the DOM. An object can hold data or functions, called _methods_.

  The .querySelector() method is a function which access different parts of the DOM tree. You can get any element on your page using the element type (button, html, etc) or a CSS class or ID.

  You can access each DOM node directly or set them as _variables_ like we did below. A variable is a keyword used to identify something else. It does two things:
    1. The code is easier to read because you're not constantly typing document.querySelector() over and over.
    2. It makes your code more readable.

  Variables can be whatever you want them to be. The convention in Javascript is to use uppercase words _except_ for the first word in the name.
*/
  let button = document.querySelector(`button`);
  let html = document.querySelector(`html`);

  /*
    Because Javascript is run in the browser without necessarily showing the user anything, it can be difficult to debug problems. The most helpful line when you're fist starting is console.log(). It will display data, messages, and other information while you're writing your programs.
  */
  console.log("Clicked the button!");

  /*
    Each element on the DOM tree has attributes which can _also_ be accessed. You can set the value of any of these attributes using Javascript which will immediately change on the page.

    Here, we're accessing the <html> element and toggling the class "inverted". The same change in HTML would look like this:

    <html class="inverted">...</html>

    DOM attributes do not always match what we call those same attributes in HTML. In our HTML pages, it would just be <html class="...">, but it can hold many values, so JS calls it `classList`. 

    .toggle() is a method (a function) which handles some kind of action. It will flip back and forth between adding and removing "inverted" from the <html> element's class. This immediately applies our CSS rules.
  */
  html.classList.toggle("inverted");

  // Toggle the button based on the current state
  /*
    JS has true or false values which can be checked to do different things. In this case, we're checking the current state of the "inverted" value. If it is true, then change it to light mode. If it is false, then change it to dark.

    Because we can access everything, we can also update the icon on the button to let the user know what it will do if it's clicked. This is flair, nothing else.
  */
  if (inverted) {
    button.innerText = "🌙";
  } else {
    button.innerText = "☀";
  }

  /*
    After the page updates, we need to reset the state. This is using the `inverted` variable and changing it to be the _opposite of it's current value_.

    The ! in Javascript means "not". It will tell you the _inverse_ of the value.
  */
  inverted = !inverted;
}
