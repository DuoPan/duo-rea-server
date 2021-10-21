# duo-rea-server
This project is the backend of the UI code challenge.
Based on Express(4.17.1).

### How to Run
```npm install```
```node index.js```

### Project Structure
* actions.js:  Implement business logic to manipulate data.
* db.json:     Work as the database.
* index.js:    Entrance of the server, initialize data and handle routes.

### Others
* The server will run on port 3001 by default. If there is any conflict, please manually change it to some other port number.
* Will not lose data after refreshing the page, unless the server restart.
* Add an other call to reset the data.
* If users access the server by sending requests directly, they may forget to pass the property id or pass a wrong id. The server will return some error messages.
