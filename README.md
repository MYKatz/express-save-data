# express-save-data

Express middleware to check \"data saver\" header on requests

## Install

```
npm install -s express-save-data
```

## Usage
Use it like any middleware for express:

```js
const expressSaveData = require("express-save-data")

app.get("/", expressSaveData, function(req, res){
    if req.dataSaver{ //alternatively, you can use req.saveData
        //Save-data is ON
    }
    else{
        //Save-data is OFF
    }
})
```
