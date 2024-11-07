# Introduction to Javascript

Websites are built with three main technologies:

- HTML - the _markup_ or content
- CSS - the _style_ of the markup
- Javascript - the _interaction with_ the markup

Javascript (JS) provides additional functionalty to your website. This is called _progressive enhancement_. It allows you to do things that are not doable with HTML and CSS on their own. 

## Including Javascript in HTML

You can include Javascript in your pages in several ways. It can be embedded right in the HTML by writing your code inside of the `<script>` tag. 

The `<script>` element can be in the document head: 

```html
<html lang="en">
  <head>
    <title>My Document</title>
    <script>
      /*  This is a multiline
          JS comment.

          You can put <script> elements in the document head.
      */

      // This is a single line comment.
      console.log("Hello world")
    </script>
  </head>
  <body>
    <h1>Header</h1>
    <p>Paragraph</p>
  </body>
</html>
```

...or in the body of the HTML:

```html
<html lang="en">
  <head>
    <title>My Document</title>
  </head>
  <body>
    <h1>Header</h1>
    <p>Paragraph</p>
    <script>
      /*  This is a multiline
          JS comment.
          You can put <script> elements in the document body.
      */

      // This is a single line comment.
      console.log("Hello world")
    </script>
  </body>
</html>
```

This isn't ideal because you're now mixing contexts and you will run into syntax errors. Like CSS, JS can be included by linking separate files with the `<script>` tag.

```html
<html lang="en">
  <head>
    <title>My Document</title>
  </head>
  <body>
  ...
  <script src="script.js"></script>
  </body>
</html>
```

## The DOM

The DOM is a representaiton of your HTML in your computer's memory. It allows scripting languages, like JS, to interact with _anything_ on your site. This includes anything from toggling a class on an element to fetching and displaying data from third-parties. The DOM is the point of interaction between your HTML markup, your CSS, and your Javascript files.

Consider the following HTML:

```html
<html lang="en">
  <head>
    <title>My Document</title>
  </head>
  <body>
    <h1>Header</h1>
    <p>Paragraph</p>
  </body>
</html>
```

The browser turns this markup into a tree, like this:

![A diagram of the DOM tree](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model/using_the_w3c_dom_level_1_core-doctree.jpg)

Using Javascript, you can access any part of your website through the `document` object.

In this exercise, you will code along with the instructor to make a simple light/dark mode toggle switch for a simple webpage. This is easily done with Javascript and adds a nice interaction to the page but it isn't _reqiured_ for the site to work.

The full commented source code for the activity is in the `src/` directory.
