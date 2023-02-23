const jsonServer = require("json-serve")
const server = jsonServer.create();
const route = jsonServer.route("db.json");
const middlewares = jsonServer.defaulets();
const port = process.env.PORT||8080;
server.use(middlewares);
server.use(route);
server.listen(port);