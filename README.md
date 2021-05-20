# Prefixed-bootstrap

This is an experiment is using multiple CSS frameworks on the same page.

We can use a postcss plugin to add a prefix to all classes.

However, there may be some CSS reset rules or other element rules that are still always affected.

Webpack `css-loader` tries to parse `@import`, however we want `postcss-import` to process the
Bootstrap import so we can apply the prefix rule after, so we use `/* webpackIgnore: true */`
in the bw-bootstrap.css file.