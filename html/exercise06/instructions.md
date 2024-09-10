# HTML Tables

Tables used to be used for all web page layout. You would design a page and then manipulat table colums, rows, and cells to display the content in something that tried to match traditional print layout. 

We don't use tables anymore for layout. Now we use Cascading Style Sheets (CSS, our next unit) to layout websites. It is much more flexible and allows website creators to separate the _content_ from the _display_. You're able to create much more flexible web pages because you don't have to re-write all your content to fit a new design.

HTML tables are still used for _tabular data_ - information that is best shown in a series of rows and columns. This could be anything from Spotify streaming data to a banking app showing your transactions.

## Markup

Tables use the following markup:

```html
<table>
  <thead>
    <tr>
      <th>Month</th>
      <th>Days</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>31</td>
    </tr>
    <!-- more data ... -->
  </tbody>
</table>
```

The `<table>` element is similar to form - it is a wrapper which includes several elements:

- `<thead>` - "Table head," a wrapper for the column labels
- `<th>` - "Table heading," an individual column heading (Month)
- `<tbody>` - "Table body," the main body of data for the table display
- `<tr>` - "Table row," a wrapper for all data in a given row
- `<td>` - "Table data," an individual cell in the table for data

The tricky part about tables is remember what is a _wrapper_ vs what represents _content_. Some general rules:

1. The `<thead>` element generally has one `<tr>` with several `<th>` columns.
2. The table body will have several `<tr>` elements (as many as needed for the table)
3. You _can_ include a table footer (`<tfoot>`) for things like summary data for the column, but they're not common.

## Assignment

Pick some data you want to display in a table. This can be anything (do some research if you need to) you're interested in.

- Create an HTML page (no template this time!) and title it `index.html`
- Add your table with _correct semantic markup_
- Add a section explaining what your table is showing
- Check your code with the W3C Validator to make sure it is properly formatted.
- Submit your file when finished.
