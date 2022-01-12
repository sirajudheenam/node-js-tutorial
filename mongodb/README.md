# README.md
MongoDB
brew install mongodb-community
brew services start mongodb-community

Robo MongoDB install
Robo 3T

yarn add mocha nodemon mongoose --save

Step 1: Mocha Starts
Step 2: Tell Mongoose to connect to MongoDB
Step 3: Wait -- Mongoose connect to MongoDB
Step 4: If Connection successful, run tests.
Step 5: If Connection failed, show error.


npm run test

# To seed data to MongoDB
yarn add mongoose-seed --save


package.json
```
{  
  "scripts": {
    "test": "nodemon --exec mocha -R min"
  },
}
```

# Access the node console to access articleCount
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