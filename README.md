# NodeJS tutorial

## CJS
```js
{
  ....
  {
    "type": "commonjs"
  }
}
```

### import modules like this
```js
const getUsers = require('./getUsers.js');
```
### export modules like this
```js
module.exports = function getUsers(raw_data) {
  .... code goes here
  return users;
}
```

## ESM

package.json

```json
{
  ....
  {
    "type": "module"
  }
}
```


### export modules like this:
```js
const User = () =>  {
  ....
}
export default User;
```

### import modules like this

```js
import { User } from './User'
```

#### Access the node console to access DB
```
node
> const Student = require('./src/student')
> const oliver = new Student({})
> oliver.articleCount
> .exit

> const Student = require('./src/student')
> const oliver = new Student({articles: [{title: 'JS'}]})
> oliver.articleCount
```

