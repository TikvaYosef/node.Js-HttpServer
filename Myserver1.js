const httpServer = require('http').Server;


class MyServer extends httpServer {
    constructor() {
        super();
        this.on('request', this.requestHandler);
        this.listen(3000);
    }
    requestHandler(request, response) {
        response.end('Hello World!')
    }
}
module.exports = new MyServer();