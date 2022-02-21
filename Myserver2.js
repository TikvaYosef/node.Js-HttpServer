

const httpServer = require("http").Server;
const fs = require("fs");
const util = require("util");
const readFilePromise = util.promisify(fs.readFile)

class Myserver2 extends httpServer {
    constructor() {
        super();
        this.onCreatefile();
        this.on('request', this.onReadFromFile)
        this.listen(8000);

    }
    onCreatefile() {
        fs.writeFile("./Rihanna.txt", "Robyn Rihanna Fenty NH[2] (born February 20, 1988) (/riˈænə/ ree-AN-ə)[3][4][n 1] is a Barbadian singer, actress, fashion designer, and businesswoman. Born in Saint Michael and raised in Bridgetown, Barbados, Rihanna was discovered by American record producer Evan Rogers who invited her to the United States to record demo tapes. After signing with Def Jam in 2005, she soon gained recognition with the release of her first two studio albums, Music of the Sun (2005) and A Girl Like Me (2006), both of which were influenced by Caribbean music and peaked within the top ten of the US Billboard 200 chart.", () => { })
    }
    onReadFromFile = (request, response) => {
        readFilePromise("./Rihanna.txt")
            .then((data) => { response.end(data) })
            .catch((err) => { response.end("error with info") })

    }
}
module.exports = new Myserver2();
