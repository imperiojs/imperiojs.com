# Project Init

This will be a repository for creating the boilerplate code for a new Imperio
project. Feel free to add to it or change it, as long as it will work with the
latest release version of our library.

## Included boilerplate

```
Basic file structure
Basic server implementation
Basic client templates
package.json with appropriate dependencies
keys.js file. Change the secret if you want!
.gitignore
.eslintrc
```

## Getting Started

Do this:

```bash
npm install
```

Don't forget to edit these files:

```
server/server.js: Define the routes to the appropriate version of Imperio
client/templates/footer.ejs: Define the src of the appropriate Imperio client
^ This one may not be necessary, as long as your static routes in express
  include the root directory of our library, regardless of where it is
```
