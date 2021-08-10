const { AsyncNedb } = require("nedb-async")
const DB = new AsyncNedb({filename: "databases/Members.db", autoload: true})

export default async function handler(req, res)
{
    if(req.method === "GET") {
        try {
            const member = await DB.asyncFind({_id: req.query.id})
            res.status(200).json({
                data: member,
                message: "Data fetched."
            })
        }
        catch(error) {
            res.status(error).json(error)
        }
    }
    else if(req.method === "PUT") {
      // 
    }
    else if(req.method === "POST") {
      // 
    }
}
