## Testing Productive.io API ##

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project is relying on environmental variables (env). Basic envs are located in .env file. Before you can start using the app in local environment, copy this file into <code>.env.local</code> and input your own data.

<code>.env.local</code> is not commited to source for security reasons.

Main goal of this app is to explore vas APIs that Productive.io provides. Currently only displaying of all time entries for a specific person and deleting of these records are supported.


How to get the project going in development mode, after you've set up envars:
```
yarn install
yarn start
```

In addition to create-react-app, these dependencies were installed:
```
"moment": "^2.20.1",            // for use with datepicker
"react-datepicker": "^1.1.0",   // for displaying date popup
"react-skylight": "^0.5.0",     // ReactJS popup module
"react-table": "^6.7.6"         // ReactJS bootstraped generic tables
```

TODOs:
 * find out how the POST data should look like
 * improve CSS link for react table in index.html (currently is just from CDN)
 * implement debugger
 * implement filters in time entries (before, after)
 * filter out just today's entries (currently displays all)
 * use async/await instead of promises and callbacks
 * extract authentication headers to a global function to avoid code duplication
 * make tests
 * rename API functions to avoid confusion
 * styling
 * and much, much more...

While testing, be sure to have dev tools open in the browser :)
