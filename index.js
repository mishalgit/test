const express = require('express');
const app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (request,response) => {
    response.sendFile(__dirname+'/index.html')
});


app.listen(3000, console.log('App Listening to port 3000'));
