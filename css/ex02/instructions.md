# Selectors

Learning to use classes and IDs effectively is critical for any web developer. These are attributes which let you select specific elements regardless of the _type_ of element. The `class` and `id` attributes have different purposes and can be used in combination with one another to write flexible CSS rules.

## `class` and `id`

### `class`

A `class` attribute can be used across as many elements as you'd like on a page. It can be used to apply specific styles to a type of content. Classes are _reusable_, so you should use a class when you want to repeat the style several times.

### id

The `id` attribute is _specific to one element_ and should not be repeated in your code. It identifies a single element that can be selected by CSS and styled appropraitely.

## Syntax

In the last assignment, you saw that CSS can target HTML elements directly by using their name as the selector. `class` and `id` attributes can also be selected directly with a special syntax. To select an style a class, add a period in front of the class name. So, `class="book"` in HTML would be selected with `.book` in CSS. 

An `id` is selected with a pound sign (hashtag) in front of the ID name. So, the element with `id="new"` can be selected with `#new`.

```html
<!-- index.html -->
<div class="book">
    <p>This is a book title</p>
</div>
<div class="book" id="new">
    <p>This is a new book</p>
</div>
```

```css
/* style.css */
/* Class selector */
.book {
    border: 1px;
}

/* id selector */
#new {
    color: red;
}
```

Styles that aren't conflicting will _both_ be applied to elements that match the selectors! This makes CSS incredibly flexible for writing designs that can be applied to all kinds of content.

## Assignment

Edit the attached HTML file to use classes and IDs to style the elements. 