var Request = require("request");

exports.getCompleted = (req, res, next) => {

    Request.get("https://jsonplaceholder.typicode.com/todos?completed=true", (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        res.send(body)
        //console.dir(JSON.parse(body));
    });
};
