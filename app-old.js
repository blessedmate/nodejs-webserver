const http = require("http");

// Using Nodejs default http package
http
  .createServer((request, response) => {
    response.setHeader("Content-Disposition", "attachment; filename=list.csv");
    response.writeHead(200, { "Content-Type": "application/csv" });

    response.write("id, name\n");
    response.write("1, Yon\n");
    response.write("2, Pepe\n");
    response.write("3, Sapardo\n");
    response.end();
  })
  .listen(8080);

console.log("Listening in port", 8080);
