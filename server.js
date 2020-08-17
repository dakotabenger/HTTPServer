const http = require('http')

http.createServer((req,res) => {
    res.end();



}).listen(8080,function() {
    console.log("Listening on port 8080!")

})