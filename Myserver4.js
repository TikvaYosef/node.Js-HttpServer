const { readFile } = require("fs");



const htmlServer = require("http").Server;


class Myserver4 extends htmlServer {
    constructor() {
        super();
        this.on("request", this.onReadFromJson)
        this.listen(9090)
    }
    onReadFromJson(request, response) {
        readFile("./names.json", (err, result) => {
            if (err) throw err
            response.end(result)
        })
    }
}
module.exports = new Myserver4();