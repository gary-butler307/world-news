
##world map documentation

setup

1. run 'yarn';
2. run 'yarn server' to statt graphql server.
3. run 'yarn start' to start front end server.

Testing

Currenly there is an example test using enzyme on the NewsItems. to run tests run 'yarn test'.

#details

The current project is setup using Create react app, node-sass and Axios. It also has a node backend instance to work as a data layer using GraphQL.

Front end:

The front end application uses React with hooks for state managment, with more time it could have been cleaner to possible ustilise context API or customHooks to save passing props. The App.js makes a call to the  graphQL server and the server makes a call to an api to recieve the data required.

CSS is currently setup using BEM for syntax and node-sass for SASS features.
