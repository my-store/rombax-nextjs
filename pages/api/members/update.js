async function handler(req, res) {
    const { AsyncNedb } = require("nedb-async")
    const DB = new AsyncNedb({filename: "databases/Members.db", autoload: true})

    if(req.method === "POST") {
        const data = JSON.parse(req.body).data
        await DB.asyncUpdate({_id: data._id}, data)
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