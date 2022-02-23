

const htmlServer = require("http").Server;
const fs = require("fs");
const util = require("util");
const readFilePromise = util.promisify(fs.readFile)


class Myserver3 extends htmlServer {
    constructor() {
        super();
        this.OnWriteToFile();
        this.on("request", this.onReadFromFile)
        this.listen(8080)

    }
    OnWriteToFile() {
        fs.writeFile("./MyCity.txt", "Netanya (Hebrew: נְתַנְיָה) is a city in the Northern Central District of Israel, and is the capital of the surrounding Sharon plain. It is 30 km (18.6 mi) north of Tel Aviv, and 56 km (34.8 mi) south of Haifa, between Poleg stream and Wingate Institute in the south and the Avihayil stream in the north. Netanya was named in honor of Nathan Straus, a prominent Jewish American merchant and philanthropist in the early 20th century who was the co-owner of Macy's department store. ", () => { })
    }
    onReadFromFile = (request, response) => {

        readFilePromise("./MyCity.txt")
            .then((data) => { response.end(data) })
            .catch((err) => { response.end("error with info") })

    }

}
module.exports = new Myserver3();