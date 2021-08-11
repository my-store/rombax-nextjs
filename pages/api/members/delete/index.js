async function handler(req, res) {
    const { AsyncNedb } = require("nedb-async")
    const DB = new AsyncNedb({filename: "databases/Members.db", autoload: true})

    if(req.method === "POST") {
        await DB.asyncRemove({_id: JSON.parse(req.body).data._id})
        res.status(200).json({
            message: "Success"
        })
    }
    else {
        res.status(404).json({
            message: "Service not found."
        })
    }
}

export default handler