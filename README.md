# aurelia-typing-trigger

This plugin simply allows you to add `typing-trigger` to elements in Aurelia, so that they dispatch CustomEvents named 'typing' when keypresses are generated for typing characters (like a-zA-Z0-9 and punctuation).

## Using the plugin

Install the plugin and configure the plugin in `main.js`

`$ jspm install npm:aurelia-typing-trigger`

```js
.plugin('aurelia-typing-trigger')
```

Use it in your html:

```html
<input type="text" typing-trigger typing="triggerWhenTyping()" />
```

### Options

The only option for this Custom Attribute is adding a debounce time in microseconds. **The default is 500ms (0.5 seconds)**

```html
<!-- Set the timeout to 1000ms (1 second) -->

<input type="text" typing-trigger="1000" typing="triggerWhenTyping()" />
```


## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. To build the code, you can now run:

  ```shell
  gulp build
  ```
5. You will find the compiled code in the `dist` folder, available in three module formats: AMD, CommonJS and ES6.

6. See `gulpfile.js` for other tasks related to generating the docs and linting.

## Running The Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following commnand:

  ```shell
  npm install -g jspm
  ```
3. Install the client-side dependencies with jspm:

  ```shell
  jspm install
  ```

4. You can now run the tests with this command:

  ```shell
  karma start
  ```

## Contributing

Source code is located in `src/index.js`. To build the source, run `gulp build`. Please follow [Aurelia/Durandal Contribution Guidelines](https://github.com/DurandalProject/about/blob/master/CONTRIBUTING.md#type) where possible through the use of GitHub pull requests.