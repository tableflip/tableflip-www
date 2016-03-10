tableflip-www
=============

The [TABLEFLIP](https://tableflip.io) website.

![screenshot 2015-07-01 15 41 09](https://cloud.githubusercontent.com/assets/58871/8457160/b63c4a32-2007-11e5-804f-88a66f6984f4.png)

## Getting started

Get the dependencies and start the dev server...

```sh
npm install
npm start
```

The static site is built out to the `dist` folder by the scripts in the `package.json`.

The `src` dir contains the `jade` templates and markdown fragments for the layout and content. `npm run build:html` is responsible for that. The jade templates handle the markdown transformation internally via [filters][1].

The css in `src/main.css` is processed by [`cssnext`][2], so it'll have vendor prefixes applied automatically where needed, and we can use future css syntax today. `npm run build:css` generates a production ready version in `dist/main.css` that has had all the futuristic parts swapped out for better supported alternatives.

`(╯°□°）╯︵ ┻━┻`

[1]: http://jade-lang.com/reference/filters/
[2]: http://cssnext.io/features/