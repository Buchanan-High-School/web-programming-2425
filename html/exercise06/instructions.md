# Packing a Website

So far, you've been building _single page websites_, with everything all in one file. This works for small projects, but often, you will have entire directories (folders) full of HTML pages or HTML snippets that are stitched together when the client requests the page. The same is true for assets like images or other code files which help the site look and function correctly.

In this section, you'll be learning how to link internally to multiple pages you control. You'll need to use the skills you've developed so far to put the pieces together for a small, functional website.

## Folder structure

Websites live in _directories_ - folders - on web servers. For this task, I've set up a basic folder structure that you will use. It looks like this:

```text
.
└── main/
    ├── index.html
    ├── pages/
    │   ├── sub-page1.html
    │   └── sub-page2.html
    └── img/
        ├── image1.jpg
        └── image2.jpg
```

There are several things to pay attention to:

1. `index.html` is your main page. This is the page that loads when the user goes to your URL.
2. `pages` and `img` are _directories_. Note the slash (`/`) at the end of the name - that means that it is a folder with other items in it.
3. `pages/sub-page1.html` and `pages/sub-page2.html` are other HTML pages which can be linked to from your home page (and to each other, or back to home, etc.).
4. `img/image1.jpg` and `img/image2.jpg` are just pictures you want to use on your site.

## Links

You've already learned that the anchor element, `<a>`, is used to link between pages. When we're sending users to other websites, we use a full web address:

```html
<a href="https://example.com">Some link</a>
```

This is called an _absolute URL_ which points to an exact spot on the Internet.

When you control the resources, you can use a structure called a _relative URL_. It's a shortened version of a link that points to another spot _on your website_ rather than to a spot on a different page.

If you're linking to another resource you own, you can use a _relative URL_ like this:

```html
<!-- in index.html -->
<a href="pages/sub-page1.html">Check out this other page I run</a>
```

Images are similar:

```html
<!-- in index.html -->
<img src="img/image1.jpg" alt="..." />
```

### Moving across directories

The examples above will work from `index.html` because it is at the _same level_ as the folders (look at the indentation). You will run into problems if you try to link from a _lower_ folder into a _higher_ folder. There is a special syntax which tells the browser to go _up_ instead of _down_.

Assume you're editing `sub-page1.html` and you want to link back to `index.html` which is _up_ one folder:

```html
<!-- on sub-page1.html -->
 <a href="../index.html">Go back home</a>
```

Notice the `..` in front of the slash - this tells the browser, "go up one directory" to find the right file. The great thing about this is that your editor will show you folders and file when you're linking.

## Try it

In `index.html`, start a link tag and begin typing a relative URL. You should see a list of directories and files available at that level. You can use the double dot (`..`) and slashes (`/`) in combination to move up and down and around your directories.

## Assignment

For this assignment, create a simple `index.html` page which:

1. has a valid `<nav>` landmark element with links to each of the sub pages.
2. includes both images from the `img` directory
3. a valid `<footer>` element with a copyright date and your name.

**Bonus task**: set up a relative URL to add a link _from a subpage_ back to the _main index file_.