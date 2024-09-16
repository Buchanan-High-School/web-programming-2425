# Specificity

CSS rules can be combined and applied to multiple elements at a time. The method and order in which you select and order your stylesheet matter. _Specificity_ is the way the browser understands your CSS and decided which ruleset to apply to which elements.

Using good habits when naming classes and IDs can help you avoid specificity issues and unexpected styles being applied.

## Calculating rulesets

Specificity is applied by calcluating the values for the following properties in the document:

ID|For each id in a matching selector, like `#example`, add 1-0-0 to the total.
Class|Class selectors, attribute selectors, and pseudo-classes, add 0-1-0 to the total.
Type|Element selectors (`p`,`h1`,etc) add 0-0-1 to the total.