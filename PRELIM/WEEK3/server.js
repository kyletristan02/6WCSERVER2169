var http = require('http'); 

var server = http.createServer(function (req, res) { 
if (req.url == '/') { 

res.writeHead(200, { 'Content-Type': 'text/html' });

res.write("<html><body>This is home Page.</body></html>");
res.end();

}
else if (req.url == "/student") {

res.writeHead(200, { 'Content-Type': 'text/html' });
res.write('<html><body>This is student Page.</body></html>');
res.end();

}
else if (req.url == "/admin") {

res.writeHead(200, { 'Content-Type': 'text/html' });
res.write('<html><body>This is admin Page.</body></htm1>');
res.end();

}
else
res.end('Invalid Request!');
});
server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running .. ')