const { AsyncNedb } = require("nedb-async")
const DB = new AsyncNedb({filename: "databases/Members.db", autoload: true})

export default async function handler(req, res)
{
    try {
        const member = await DB.asyncFind({_id: req.query.id})
        res.status(200).json(member)
    }
    catch(error) {
        res.status(error).json(error)
    }
}
