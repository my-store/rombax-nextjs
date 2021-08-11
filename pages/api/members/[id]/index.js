async function handler(req, res)
{
    const { AsyncNedb } = require("nedb-async")
    const DB = new AsyncNedb({filename: "databases/Members.db", autoload: true})

    if(req.method === "GET") {
        const member = await DB.asyncFind({_id: req.query.id})
        res.status(200).json({
            data: member[0],
            message: "Data fetched."
        })
    }
    else if(req.method === "PUT") {
      // 
    }
    else if(req.method === "POST") {
      // 
    }
}
export default handler
