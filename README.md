# feathers-currentie

> A Feathers service for GE Current Intelligent Environments
**This is a work in progress**

## Installation

```
npm install feathers-currentie --save
```

## Complete Example

Here's an example of a Feathers server that uses `feathers-currentie`.

```js
const feathers = require('feathers')
const rest = require('feathers-rest')
const hooks = require('feathers-hooks')
const bodyParser = require('body-parser')
const errorHandler = require('feathers-errors/handler')
const currentIEService = require('../lib').asset

// Initialize the application
const app = feathers()
  .configure(rest())
  .configure(hooks())
  // Needed for parsing bodies (login)
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  // Initialize your feathers plugin
  .use(errorHandler())

app.use('/currentie/asset', currentIEService({
  token: 'jwt',
  zoneId: 'predix-zone-id'
}))

app.service('currentie/asset').get(1000019).then((result) => {
  console.log(result)
}).catch(err => {
  console.log(err)
})

app.listen(3030)

console.log('Feathers app started on 127.0.0.1:3030')
```

## License

Copyright (c) 2016 Christopher Combs

Licensed under the [MIT license](LICENSE).
